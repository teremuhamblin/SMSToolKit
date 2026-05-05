#!/usr/bin/env bash
#
# smsc-checker.sh — Vérification simple du SMSC pour SMSToolKit
# Usage : bash smsc-checker.sh "+123456789"
#

SMSC="$1"

if [ -z "$SMSC" ]; then
    echo "[!] Aucun SMSC fourni."
    echo "Usage : $0 \"+123456789\""
    exit 1
fi

echo "=== SMSToolKit — Vérification du SMSC ==="
echo "SMSC fourni : $SMSC"
echo

# Vérification du format
if [[ "$SMSC" =~ ^\+[0-9]{6,15}$ ]]; then
    echo "[OK] Format valide (E.164)"
else
    echo "[WARN] Format inhabituel. Le SMSC devrait être au format +XXXXXXXXX"
fi

# Simulation de test (à adapter selon modem / API)
echo
echo "Test de connectivité..."
sleep 1
echo "[SIMULATION] Envoi d’une requête au SMSC..."
sleep 1
echo "[OK] Le SMSC répond correctement (simulation)."

exit 0
