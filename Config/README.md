
📁 config/README.md

`markdown

⚙️ Config — SMSToolKit

Ce dossier contient les fichiers de configuration utilisés par SMSToolKit.  
Ils permettent de standardiser les paramètres SMS, les SMSC opérateurs et les règles d’encodage.

---

📁 Structure

```text
config/
├── sms-defaults.json
├── carriers/
│   ├── orange.json
│   ├── sfr.json
│   ├── bouygues.json
│   └── free.json
└── advanced/
    ├── smsc-format.rst
    └── encoding-rules.rst
```

---

📌 Contenu

🔹 sms-defaults.json
Paramètres SMS génériques utilisés comme base.

🔹 carriers/*.json
Fichiers de configuration par opérateur (SMSC, encodage, IMS, notes).

🔹 advanced/*.rst
Documentation technique avancée :
- format du SMSC  
- règles d’encodage  

---

🎯 Objectif

Fournir une base de configuration claire, standardisée et exploitable par les outils du projet.
`

---
