# Régénère toon-family-shorts.zip à partir de skill.md.
# À relancer après chaque modification de skill.md :
#   powershell -ExecutionPolicy Bypass -File scripts\build-zip.ps1

$root = Split-Path -Parent $PSScriptRoot
$src  = Join-Path $root 'skill.md'
$zip  = Join-Path $root 'toon-family-shorts.zip'

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

if (Test-Path $zip) { Remove-Item $zip -Force }

$archive = [System.IO.Compression.ZipFile]::Open($zip, 'Create')
try {
    # Chemin avec "/" pour que le zip s'ouvre correctement partout (Claude, macOS, Linux).
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $src, 'toon-family-shorts/SKILL.md') | Out-Null
} finally {
    $archive.Dispose()
}

Write-Output "OK -> $zip"
