param([Parameter(Mandatory = $true, Position = 1, HelpMessage = "The name of the project")]
[string]$Name,
[Parameter(Mandatory = $false)]
[switch]$isVue
)

if ($isVue) {
    npm run build
    Copy-Item -Path ".\web\dist\" -Destination ".\web\" -Recurse
}

# change index.html (add scromFunctions script)
$html = Get-Content -Path ".\web\index.html" -Encoding "utf8"
$contentArr = ""

foreach ($node in $html) {
    if ($node -notlike "*<script src='../SCROMfunctions.js'></script>") {
        $contentArr =  ($contentArr, $node) -Join "`r`n"
    }
    if ($node -like "*<head>*") {
        $contentArr =  ($contentArr, "        <script src='../SCROMfunctions.js'></script>") -Join "`r`n"
    }


}
Set-Content -Path ".\web\index.html" -Value $contentArr -Encoding "utf8"
Write-Output("Added script tag to index.html")

# change imsmanifest.xml
$contentArr = ""
$xml = Get-Content -Path ".\imsmanifest.xml" -Encoding "utf8"
foreach ($node in $xml) {
    if ($node -like "*<title>*</title>*") {
        Write-Host('title')
        $contentArr =  ($contentArr, "			<title>$Name<title>") -Join "`r`n"
    } else {
        $contentArr =  ($contentArr, $node) -Join "`r`n"
    }
}
Write-Output($contentArr)
Set-Content -Path ".\imsmanifest.xml" -Value $contentArr -Encoding "utf8"
Write-Output("Added title to imsmanifest.xml")


Compress-Archive -Path ".\" -Update  -DestinationPath "..\$Name.zip"
explorer "..\"
Write-Host "zip finished"
