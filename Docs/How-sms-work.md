==========================
Comment fonctionnent les SMS
==========================

Les SMS (Short Message Service) reposent sur un mécanisme simple mais robuste.  
Contrairement à une idée répandue, un SMS ne voyage pas directement d’un téléphone à un autre : il transite par un centre spécialisé appelé **SMSC**.

Flux d’un SMS
=============

1. Le téléphone envoie le message au SMSC.
2. Le SMSC stocke temporairement le SMS.
3. Le SMSC tente de livrer le message au destinataire.
4. En cas d’échec, il réessaie selon une durée définie (TTL).
5. Une fois livré, un rapport de livraison peut être généré.

Rôle du SMSC
============

- Stockage temporaire
- Routage du message
- Gestion des échecs
- Application des règles d’encodage
- Génération des rapports de livraison

Encodage
========

Deux encodages principaux :

- **GSM 7-bit** : 160 caractères
- **UCS-2** : 70 caractères (Unicode)

TTL (Time To Live)
==================

Durée pendant laquelle le SMSC tente de livrer un SMS (24 à 72 heures).
