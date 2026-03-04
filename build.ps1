# Build script for SmartScheduler
# Generates two bundles:
#   schedula-core.min.js  — Public MIT bundle (Core only, readable)
#   smartscheduler.min.js — PRO bundle (Core + all plugins, obfuscated)

$distFolder = "dist"

# 1. Clean dist folder
if (Test-Path $distFolder) {
    Write-Host "Cleaning dist folder..." -ForegroundColor Cyan
    Remove-Item -Path $distFolder -Recurse -Force
}

# 2. Create structure
Write-Host "Creating dist structure..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "$distFolder/js" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/css" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/images" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/bootstrap" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/data" -Force | Out-Null

# 3. Compile TypeScript (type check only)
Write-Host "Type-checking TypeScript..." -ForegroundColor Cyan
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) {
    Write-Host "TypeScript errors found. Fix them before building." -ForegroundColor Red
    exit 1
}

# 4a. Bundle — Core PUBLIC (MIT, not obfuscated)
Write-Host "Bundling PUBLIC Core (MIT)..." -ForegroundColor Cyan
npx -y esbuild src/index.ts `
    --bundle `
    --outfile="$distFolder/js/schedula-core.js" `
    --format=iife `
    --target=es2015

# 4b. Bundle — PRO (Core + plugins, will be obfuscated)
Write-Host "Bundling PRO bundle (Core + Plugins)..." -ForegroundColor Cyan
npx -y esbuild src/index-pro.ts `
    --bundle `
    --outfile="$distFolder/js/smartscheduler.js" `
    --format=iife `
    --target=es2015

# 5. Rename bundles to .min.js
Write-Host "Renaming to .min.js..." -ForegroundColor Cyan
Get-ChildItem -Path "$distFolder/js" -Include "*.js" -Recurse | ForEach-Object {
    $newName = $_.FullName -replace '\.js$', '.min.js'
    Rename-Item -Path $_.FullName -NewName $newName -Force
}

# Copy icons.js if present
if (Test-Path "icons.js") {
    Copy-Item -Path "icons.js" -Destination "$distFolder/js/icons.min.js"
}

# 6. Copy other assets
Write-Host "Copying assets..." -ForegroundColor Cyan

if (Test-Path "css") {
    Copy-Item -Path "css/*" -Destination "$distFolder/css" -Recurse -Force
}
if (Test-Path "images") {
    Copy-Item -Path "images/*" -Destination "$distFolder/images" -Recurse -Force
}
if (Test-Path "bootstrap") {
    Copy-Item -Path "bootstrap/*" -Destination "$distFolder/bootstrap" -Recurse -Force
}
if (Test-Path "data") {
    Get-ChildItem -Path "data" -Include "*.js", "*.json" -Recurse | ForEach-Object {
        $destPath = Join-Path "$distFolder/data" $_.FullName.Substring((Get-Item "data").FullName.Length + 1)
        $destDir = Split-Path $destPath
        if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }
        Copy-Item -Path $_.FullName -Destination $destPath -Force
    }
}

# Copy HTML files (excluding tests) — update to use PRO bundle as default
Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -notmatch "tests.html" } | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'src="icons.js"', 'src="js/icons.min.js"'
    $content = $content -replace '(?m)^\s*import .* from .*;\r?\n?', ''
    $content = $content -replace '<script type="module">', "<script src=`"js/smartscheduler.min.js`"></script>`r`n    <script>"
    Set-Content "$distFolder/$($_.Name)" $content
}

# 7. Obfuscate ONLY the PRO bundle (Core bundle stays readable for open source use)
Write-Host "Obfuscating PRO bundle..." -ForegroundColor Yellow
npx -y javascript-obfuscator "$distFolder/js/smartscheduler.min.js" `
    --output "$distFolder/js/smartscheduler.min.js" `
    --compact true `
    --control-flow-flattening true `
    --dead-code-injection true `
    --string-array true `
    --string-array-rotate true `
    --string-array-shuffle true `
    --string-array-threshold 0.75

Write-Host "" -ForegroundColor White
Write-Host "Build complete!" -ForegroundColor Green
Write-Host "  PUBLIC  Core: $distFolder/js/schedula-core.min.js  (MIT, GitHub-publishable)" -ForegroundColor Cyan
Write-Host "  PRO bundle:   $distFolder/js/smartscheduler.min.js (Commercial, obfuscated)" -ForegroundColor Yellow
