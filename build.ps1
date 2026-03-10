# Build script for SchedulaCore
# Generates two bundles:
#   schedula-core.min.js     — Public MIT bundle (Core only, readable)
#   schedula-core-pro.min.js — PRO bundle (Core + all plugins, obfuscated)

$distFolder = "dist"

# Read version from package.json
$pkg = Get-Content "package.json" -Raw | ConvertFrom-Json
$version = $pkg.version
Write-Host "Building SchedulaCore v$version..." -ForegroundColor White

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

# 3. Type-check TypeScript
Write-Host "Type-checking TypeScript..." -ForegroundColor Cyan
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) {
    Write-Host "TypeScript errors found. Fix them before building." -ForegroundColor Red
    exit 1
}

$banner = "/* schedula-core v$version | MIT License | https://github.com/tuonome/schedula-core */"
$bannerPro = "/* schedula-core-pro v$version | Commercial License */"

# 4a. Bundle — Core PUBLIC (MIT, not obfuscated)
Write-Host "Bundling PUBLIC Core (MIT)..." -ForegroundColor Cyan
npx -y esbuild src/index.ts `
    --bundle `
    --outfile="$distFolder/js/schedula-core.js" `
    --format=iife `
    --target=es2015 `
    --banner:js="$banner"

# 4b. Bundle — PRO (Core + plugins, will be obfuscated)
Write-Host "Bundling PRO bundle (Core + Plugins)..." -ForegroundColor Cyan
npx -y esbuild src/index-pro.ts `
    --bundle `
    --outfile="$distFolder/js/schedula-core-pro.js" `
    --format=iife `
    --target=es2015 `
    --banner:js="$bannerPro"

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

# 6. Copy assets (only files needed by the component, no dev-only CSS)
Write-Host "Copying assets..." -ForegroundColor Cyan

$cssFiles = @("schedula-core.css", "scheduler-themes.css", "popup.css", "style.css", "planner-test.css")
foreach ($f in $cssFiles) {
    if (Test-Path "css/$f") {
        Copy-Item -Path "css/$f" -Destination "$distFolder/css/$f" -Force
    }
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

# Copy HTML files (excluding test files) — update to use PRO bundle
Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -notmatch "tests.html" } | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'src="icons.js"', 'src="js/icons.min.js"'
    $content = $content -replace '(?m)^\s*import .* from .*;\r?\n?', ''
    $content = $content -replace '<script type="module">', "<script src=`"js/schedula-core-pro.min.js`"></script>`r`n    <script>"
    Set-Content "$distFolder/$($_.Name)" $content
}

# 7. Obfuscate ONLY the PRO bundle
Write-Host "Obfuscating PRO bundle..." -ForegroundColor Yellow
npx -y javascript-obfuscator "$distFolder/js/schedula-core-pro.min.js" `
    --output "$distFolder/js/schedula-core-pro.min.js" `
    --compact true `
    --control-flow-flattening true `
    --dead-code-injection true `
    --string-array true `
    --string-array-rotate true `
    --string-array-shuffle true `
    --string-array-threshold 0.75

Write-Host "" -ForegroundColor White
Write-Host "Build complete! v$version" -ForegroundColor Green
Write-Host "  PUBLIC Core: $distFolder/js/schedula-core.min.js     (MIT, GitHub-publishable)" -ForegroundColor Cyan
Write-Host "  PRO bundle:  $distFolder/js/schedula-core-pro.min.js (Commercial, obfuscated)" -ForegroundColor Yellow
