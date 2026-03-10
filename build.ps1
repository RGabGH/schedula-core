# Build script for SchedulaCore (MIT Free)
# Generates: schedula-core.min.js

$distFolder = "dist"

# Read version from package.json
$pkg = Get-Content "package.json" -Raw | ConvertFrom-Json
$version = $pkg.version
Write-Host "Building SchedulaCore v$version (MIT)..." -ForegroundColor White

# 1. Clean dist folder
if (Test-Path $distFolder) {
    Write-Host "Cleaning dist folder..." -ForegroundColor Cyan
    Remove-Item -Path $distFolder -Recurse -Force
}

# 2. Create structure
Write-Host "Creating dist structure..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "$distFolder/js" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/css" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/bootstrap" -Force | Out-Null
New-Item -ItemType Directory -Path "$distFolder/data" -Force | Out-Null

# 3. Type-check TypeScript
Write-Host "Type-checking TypeScript..." -ForegroundColor Cyan
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) {
    Write-Host "TypeScript errors found. Fix them before building." -ForegroundColor Red
    exit 1
}

$banner = "/* schedula-core v$version | MIT License | https://github.com/RGabGH/schedula-core */"

# 4. Bundle — Core (MIT)
Write-Host "Bundling Core (MIT)..." -ForegroundColor Cyan
npx -y esbuild src/index.ts `
    --bundle `
    --outfile="$distFolder/js/schedula-core.js" `
    --format=iife `
    --target=es2015 `
    --banner:js="$banner"

# 5. Rename to .min.js
Rename-Item -Path "$distFolder/js/schedula-core.js" -NewName "schedula-core.min.js" -Force

# Copy icons.js if present
if (Test-Path "icons.js") {
    Copy-Item -Path "icons.js" -Destination "$distFolder/js/icons.min.js"
}

# 6. Copy assets
Write-Host "Copying assets..." -ForegroundColor Cyan

$cssFiles = @("schedula-core.css", "scheduler-themes.css", "popup.css", "style.css", "planner-test.css")
foreach ($f in $cssFiles) {
    if (Test-Path "css/$f") {
        Copy-Item -Path "css/$f" -Destination "$distFolder/css/$f" -Force
    }
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

Write-Host "" -ForegroundColor White
Write-Host "Build complete! v$version" -ForegroundColor Green
Write-Host "  MIT bundle: $distFolder/js/schedula-core.min.js" -ForegroundColor Cyan
