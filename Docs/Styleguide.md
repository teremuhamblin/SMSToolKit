# 🎨 Styleguide — SMSToolKit

Ce document définit les règles de style du code pour garantir une base propre, cohérente et maintenable.

---

## 🧱 Principes généraux

- Code simple, lisible, commenté
- Pas de magie inutile
- Préférence pour la clarté plutôt que la concision extrême
- Respect strict du design system

---

## 🧩 JavaScript

### Règles
- ES2022 minimum
- Modules ES (`import/export`)
- Pas de variables globales
- `const` par défaut, `let` si nécessaire
- Pas de `var`

### Style
- Indentation : 2 espaces
- Pas de point-virgule
- Quotes simples `'text'`
- Pas de trailing commas

---

## 🎨 CSS

### Structure
- Variables globales dans `:root`
- Classes utilitaires limitées
- Composants isolés
- Pas d’ID pour le style

### Style
- BEM optionnel mais recommandé
- Pas de CSS inline
- Pas de !important sauf cas extrême

---

## 📄 Markdown

- Titres courts
- Sections claires
- Pas de lignes trop longues
- Code blocks annotés

---

## 🧪 Tests manuels

- Vérifier l’encodage
- Vérifier la segmentation
- Vérifier l’affichage mobile
