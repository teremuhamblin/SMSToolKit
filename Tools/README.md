###### README.md * markdown

---

🛠️ tools/ — Outils du projet SMSToolKit

Le dossier tools/ regroupe l’ensemble des scripts, utilitaires, et générateurs utilisés pour analyser, diagnostiquer ou configurer le service SMS.  
Ces outils sont pensés pour être simples, portables, et compatibles multi‑plateformes.

---

📁 Contenu du dossier

```text
tools/
├── smsc-checker.sh        # Vérification du SMSC (Linux / macOS)
├── smsc-checker.ps1       # Vérification du SMSC (Windows)
├── sms-diagnostic.js      # Diagnostic rapide dans le navigateur
└── generator/             # Générateur de fichiers de configuration
```

---

🔧 Outils inclus

- smsc-checker.sh  
  Script Bash permettant de vérifier ou tester la configuration du SMSC sur systèmes Unix.

- smsc-checker.ps1  
  Version PowerShell pour Windows, avec les mêmes fonctionnalités que la version Bash.

- sms-diagnostic.js  
  Script JavaScript exécuté côté navigateur pour effectuer un diagnostic rapide :  
  encodage, longueur, segmentation, compatibilité GSM/UCS‑2.

- generator/  
  Contient les outils permettant de générer automatiquement des fichiers de configuration SMS (JSON, profils opérateurs, presets).

---

🎯 Objectifs du dossier

- Centraliser tous les outils nécessaires au diagnostic SMS  
- Fournir des scripts simples à exécuter et documentés  
- Permettre la génération automatique de configurations standardisées  
- Faciliter les tests et validations pour les utilisateurs et contributeurs

---

📦 Installation & utilisation

Chaque outil possède sa propre documentation interne (commentaires + usage).  
Exemples rapides :

Linux / macOS
```text
bash smsc-checker.sh
```

Windows
```text
powershell -ExecutionPolicy Bypass -File smsc-checker.ps1
```

Navigateur
Ouvrir sms-diagnostic.js via le site web du projet ou un fichier HTML local.

---

🤝 Contributions

Les contributions sont les bienvenues :  
ajout de scripts, optimisation, portages, améliorations du générateur, etc.

Merci de suivre les conventions du projet (structure, nommage, documentation).

---

📄 Licence

Tous les outils du dossier sont distribués sous licence GPL 3.0.

---
