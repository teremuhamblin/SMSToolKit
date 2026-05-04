###### README.MD * markdown
---
# 🧩 SMSToolKit

SMSToolKit est un projet dédié au paramétrage, au diagnostic et à l’optimisation des SMS sur smartphones.  
Il fournit une documentation claire, des fichiers de configuration standardisés et des outils pratiques pour comprendre, configurer et dépanner le service SMS.

---

### 🎯 Objectifs

- Expliquer simplement comment fonctionnent les SMS
- Documenter les paramètres essentiels (SMSC, encodage, TTL, rapports de livraison)
- Fournir des fiches opérateurs (France + international)
- Proposer des outils de diagnostic (scripts, vérifications, générateurs)
- Offrir un site web regroupant guides et outils

---

### 📁 Structure du projet

```text
SMSToolKit/
├── docs/           # Documentation complète
├── config/         # Fichiers de configuration (JSON + formats avancés)
├── tools/          # Scripts et utilitaires
└── website/        # Mini-site d'information et d'outils
```

---

### 📚 Documentation

La documentation est disponible dans le dossier :

`
docs/
`

Elle inclut :

- overview.md — Présentation générale  
- how-sms-work.md — Fonctionnement des SMS  
- sms-parameters.md — Paramètres essentiels  
- smsc.md — Rôle et format du SMSC  
- encoding.md — Encodage GSM / UCS-2  
- troubleshooting.md — Dépannage complet  
- carriers/ — Fiches opérateurs  
- devices/ — Particularités Android / iOS  

---

### 🛠️ Outils

Le dossier tools/ contient :

- smsc-checker.sh — Vérification du SMSC (Linux / macOS)
- smsc-checker.ps1 — Vérification du SMSC (Windows)
- sms-diagnostic.js — Diagnostic rapide côté navigateur
- generator/ — Générateur de fichiers de configuration

---

### 🌐 Site web

Un mini-site est disponible dans :

`
website/
`

Il propose :

- des guides simplifiés  
- des fiches opérateurs  
- des outils interactifs  
- une interface claire et accessible  

---

### 🗺️ Roadmap

- v1.0 — Documentation de base + outils essentiels  
- v1.1 — Fiches opérateurs France + site web minimal  
- v1.2 — Diagnostic avancé + générateur complet de configuration  

---

### 📄 Licence

Projet distribué sous licence GPL 3.0
`

---
