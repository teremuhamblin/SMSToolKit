<#
    smsc-checker.ps1 — Vérification simple du SMSC pour SMSToolKit
    Usage : powershell -ExecutionPolicy Bypass -File smsc-checker.ps1 "+123456789"
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$SMSC
)

Write-Host "=== SMSToolKit — Vérification du SMSC ==="
Write-Host "SMSC fourni : $SMSC"
Write-Host ""

# Vérification du format
if ($SMSC -match "^\+[0-9]{6,15}$") {
    Write-Host "[OK] Format valide (E.164)"
} else {
    Write-Host "[WARN] Format inhabituel. Le SMSC devrait être au format +XXXXXXXXX"
}

Write-Host ""
Write-Host "Test de connectivité..."
Start-Sleep -Seconds 1
Write-Host "[SIMULATION] Envoi d’une requête au SMSC..."
Start-Sleep -Seconds 1
Write-Host "[OK] Le SMSC répond correctement (simulation)."
