# 🍽️ Gestion de Stocks pour Restaurant

Application web complète de gestion de stocks pour restaurants, développée en HTML, CSS et JavaScript pur.

## 📋 Fonctionnalités

### ✅ Gestion des produits entrants (achats)
- Enregistrement des produits avec nom, catégorie, quantité, prix unitaire et date
- Calcul automatique du total (quantité × prix)
- Historique complet des entrées

### ✅ Gestion des produits sortants (consommation)
- Enregistrement des sorties avec validation du stock disponible
- Mise à jour automatique des quantités restantes
- Historique complet des sorties

### ✅ Tableau du stock actuel
- Affichage de la quantité restante par produit
- Calcul de la valeur du stock par produit
- Calcul de la valeur totale du stock
- Suppression de produits individuels

### ✅ Interface utilisateur
- Design moderne et professionnel
- Responsive (PC, tablette, mobile)
- Navigation par onglets pour l'historique
- Formulaires ergonomiques avec validation

## 🚀 Utilisation

1. Ouvrez `index.html` dans votre navigateur web
2. Les données sont automatiquement sauvegardées dans le localStorage
3. Des données d'exemple sont chargées au premier lancement

## 📁 Structure du projet

```
.
├── index.html    # Structure HTML
├── style.css     # Styles et design
├── script.js     # Logique JavaScript
└── README.md     # Documentation
```

## 💾 Stockage des données

Les données sont stockées localement dans le navigateur via `localStorage`. Elles persistent même après la fermeture du navigateur.

## 🎨 Technologies utilisées

- HTML5
- CSS3 (avec variables CSS et Grid/Flexbox)
- JavaScript ES6+ (sans framework)
- localStorage pour la persistance

## 📝 Notes

- Les calculs utilisent une moyenne pondérée pour le prix unitaire moyen
- La validation empêche les sorties supérieures au stock disponible
- L'interface s'adapte automatiquement aux différentes tailles d'écran

