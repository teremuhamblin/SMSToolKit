`markdown`

📚 Documentation — SMSToolKit

La documentation de SMSToolKit regroupe toutes les informations nécessaires pour comprendre, configurer et dépanner le service SMS sur smartphones.  
Elle est organisée de manière claire et modulaire afin de faciliter la navigation et l’intégration dans le projet.

---

📖 Contenu de la documentation

🔹 Présentation générale
- overview.md — Introduction au projet et à ses objectifs  
- how-sms-work.md — Fonctionnement technique des SMS  
- sms-parameters.md — Paramètres essentiels (SMSC, TTL, encodage, rapports)  
- smsc.md — Rôle et format du SMSC  
- encoding.md — Encodage GSM / UCS‑2  
- troubleshooting.md — Dépannage complet des problèmes SMS  

---

🔹 Opérateurs (carriers/)
Documentation dédiée aux paramètres SMS des opérateurs.

🇫🇷 France
- orange.md  
- sfr.md  
- bouygues.md  
- free.md

🌍 International
- Dossiers par pays (à compléter)

---

🔹 Appareils (devices/)
- android.md — Particularités Android, menus cachés, SMSC, IMS  
- ios.md — Gestion automatique, limitations, diagnostics possibles  

---

🎯 Objectif de la documentation

- Centraliser les connaissances techniques sur les SMS  
- Fournir des guides clairs pour les utilisateurs et techniciens  
- Standardiser les paramètres opérateurs  
- Expliquer les mécanismes internes (SMSC, encodage, delivery reports)  
- Proposer des solutions rapides aux problèmes courants  

---

🗂️ Structure recommandée

```text
docs/
├── overview.md
├── how-sms-work.md
├── sms-parameters.md
├── smsc.md
├── encoding.md
├── troubleshooting.md
├── carriers/
│   ├── france/
│   └── international/
└── devices/
```

---

🛠️ Contribution

Les contributions sont les bienvenues :  
ajout d’opérateurs, corrections, améliorations techniques, ou nouvelles sections.

---

📄 Licence

Cette documentation est distribuée sous licence GPL 3.0 comme le reste du projet.
`

---
