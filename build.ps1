# Build script for SmartScheduler

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

# 3. Compile TypeScript
Write-Host "Compiling TypeScript..." -ForegroundColor Cyan
npx tsc

# 4. Copy assets
Write-Host "Copying assets..." -ForegroundColor Cyan

# Copy CSS
if (Test-Path "css") {
    Copy-Item -Path "css/*" -Destination "$distFolder/css" -Recurse -Force
}

# Copy Images
if (Test-Path "images") {
    Copy-Item -Path "images/*" -Destination "$distFolder/images" -Recurse -Force
}

# Copy Bootstrap
if (Test-Path "bootstrap") {
    Copy-Item -Path "bootstrap/*" -Destination "$distFolder/bootstrap" -Recurse -Force
}

# Copy Data
if (Test-Path "data") {
    Copy-Item -Path "data/*" -Destination "$distFolder/data" -Recurse -Force
}

# Copy HTML files (excluding tests)
Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -notmatch "tests.html" } | Copy-Item -Destination $distFolder

# Copy icons.js to js folder
if (Test-Path "icons.js") {
    Copy-Item -Path "icons.js" -Destination "$distFolder/js"
}

# 5. Minification and Obfuscation
Write-Host "Minifying and Obfuscating JavaScript files..." -ForegroundColor Cyan
npx -y javascript-obfuscator "$distFolder/js" --output "$distFolder/js" --compact true --control-flow-flattening true --dead-code-injection true --string-array true --string-array-rotate true --string-array-shuffle true --string-array-threshold 0.75

# 6. Fix paths in scheduler.html
Write-Host "Updating paths in dist/scheduler.html..." -ForegroundColor Cyan
$htmlPath = "$distFolder/scheduler.html"
if (Test-Path $htmlPath) {
    $content = Get-Content $htmlPath -Raw
    
    # Update script src for icons.js
    $content = $content -replace 'src="icons.js"', 'src="js/icons.js"'
    
    # Update ES module imports to point to js/src
    $content = $content -replace "import { SchedulaCore } from './src/", "import { SchedulaCore } from './js/src/"
    $content = $content -replace "import { SchedulaSettings } from './src/", "import { SchedulaSettings } from './js/src/"
    $content = $content -replace "import { SchedulaTemplate } from './src/", "import { SchedulaTemplate } from './js/src/"
    
    Set-Content $htmlPath $content
}

Write-Host "Build complete! Check the '$distFolder' folder." -ForegroundColor Green
