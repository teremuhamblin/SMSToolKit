###### Architecture.md * markdown

📄🏗️ Architecture

> Ce document décrit l’architecture interne du projet SMSToolKit : organisation, logique, modules, flux et conventions.

---

📁 Structure générale

```text
SMSToolKit/
├── assets/          # Images, icônes, médias
├── config/          # Fichiers JSON, presets, paramètres
├── docs/            # Documentation technique
├── tools/           # Scripts Bash, PowerShell, JS
├── website/         # Interface web (GitHub Pages)
└── .github/         # Workflows, templates, CI/CD
```

---

🧩 Modules principaux

1. Tools
Scripts utilitaires :
- diagnostic SMS
- vérification SMSC
- encodeurs / analyseurs
- générateurs de configuration

2. Config
Fichiers JSON :
- profils opérateurs
- paramètres SMS
- presets d’analyse

3. Website
Interface web statique :
- analyse SMS en temps réel
- encodeur GSM/UCS‑2
- segmentation
- design system CyberTech

4. Docs
Documentation technique :
- architecture
- styleguide
- design system
- guides d’utilisation

---

🔄 Flux général

1. L’utilisateur ouvre la WebApp  
2. Le JS analyse le SMS  
3. Le moteur applique les règles GSM/UCS‑2  
4. Le système génère un rapport  
5. L’utilisateur peut exporter ou copier les résultats  

---

🧱 Principes d’architecture

- Modularité : chaque dossier a une responsabilité unique  
- Scalabilité : ajout de modules sans casser l’existant  
- Simplicité : pas de dépendances inutiles  
- Documentation-first : chaque module est documenté  
- CyberTech Identity : cohérence visuelle et technique  
`

---
