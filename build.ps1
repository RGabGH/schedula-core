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

# 4. Bundle with esbuild
Write-Host "Bundling JavaScript..." -ForegroundColor Cyan
npx -y esbuild src/index.ts --bundle --outfile="$distFolder/js/smartscheduler.js" --format=iife --target=es2015

# 5. Rename to .min.js and update imports
Write-Host "Renaming files to .min.js and updating imports..." -ForegroundColor Cyan

# Copy icons.js to js folder first so it gets renamed
if (Test-Path "icons.js") {
    Copy-Item -Path "icons.js" -Destination "$distFolder/js"
}

Get-ChildItem -Path "$distFolder/js" -Include "*.js" -Recurse | ForEach-Object {
    $newName = $_.FullName -replace '\.js$', '.min.js'
    Rename-Item -Path $_.FullName -NewName $newName -Force
}

# Update internal imports in .min.js files (only relevant for non-bundled files if any)
Get-ChildItem -Path "$distFolder/js" -Include "*.min.js" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Replace .js' or .js" in imports/exports
    $content = $content -replace "\.js'", ".min.js'"
    $content = $content -replace '\.js"', '.min.js"'
    Set-Content $_.FullName $content
}

# 6. Copy other assets
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

# Copy Data (Filter to only copy .js and .json, exclude .py)
if (Test-Path "data") {
    Get-ChildItem -Path "data" -Include "*.js", "*.json" -Recurse | ForEach-Object {
        $destPath = Join-Path "$distFolder/data" $_.FullName.Substring((Get-Item "data").FullName.Length + 1)
        $destDir = Split-Path $destPath
        if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }
        Copy-Item -Path $_.FullName -Destination $destPath -Force
    }
}

# Copy HTML files (excluding tests)
Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -notmatch "tests.html" } | Copy-Item -Destination $distFolder

# 7. Minification and Obfuscation
Write-Host "Minifying and Obfuscating JavaScript files..." -ForegroundColor Cyan
npx -y javascript-obfuscator "$distFolder/js" --output "$distFolder/js" --compact true --control-flow-flattening true --dead-code-injection true --string-array true --string-array-rotate true --string-array-shuffle true --string-array-threshold 0.75

# 8. Fix paths in HTML files
Write-Host "Updating paths in dist HTML files..." -ForegroundColor Cyan
Get-ChildItem -Path $distFolder -Filter "*.html" | ForEach-Object {
    $htmlPath = $_.FullName
    $content = Get-Content $htmlPath -Raw
    
    # Update script src for icons.js (now icons.min.js)
    $content = $content -replace 'src="icons.js"', 'src="js/icons.min.js"'
    
    # Replace the module script block with simplified bundle usage
    # Remove all import statements (generic regex)
    $content = $content -replace '(?m)^\s*import .* from .*;\r?\n?', ''
    
    # Remove type="module" and add the bundle script tag
    $content = $content -replace '<script type="module">', "<script src=`"js/smartscheduler.min.js`"></script>`r`n    <script>"
    
    Set-Content $htmlPath $content
}

Write-Host "Build complete! Check the '$distFolder' folder." -ForegroundColor Green
