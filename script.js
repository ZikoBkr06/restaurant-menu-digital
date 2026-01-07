/* ============================================
   GESTION DE STOCKS POUR RESTAURANT
   Application complète avec localStorage
   ============================================ */

// ============================================
// VARIABLES GLOBALES ET INITIALISATION
// ============================================

// Structure de données pour stocker les informations
let stockData = {
    entries: [],    // Historique des entrées
    exits: [],      // Historique des sorties
    stock: {}       // Stock actuel par produit
};

// Clés pour localStorage
const STORAGE_KEY = 'restaurantStockData';

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Charger les données depuis localStorage
    loadData();
    
    // Initialiser la date du jour dans les formulaires
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('entryDate').value = today;
    document.getElementById('exitDate').value = today;
    
    // Initialiser les écouteurs d'événements
    initializeEventListeners();
    
    // Charger les données d'exemple si aucune donnée n'existe
    if (stockData.entries.length === 0 && stockData.exits.length === 0) {
        loadSampleData();
    }
    
    // Afficher les données
    updateDisplay();
    
    console.log('✅ Application de gestion de stocks initialisée');
});

// ============================================
// GESTION DU LOCALSTORAGE
// ============================================

/**
 * Charge les données depuis localStorage
 */
function loadData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            stockData = JSON.parse(savedData);
            console.log('📦 Données chargées depuis localStorage');
        } catch (error) {
            console.error('❌ Erreur lors du chargement des données:', error);
            stockData = { entries: [], exits: [], stock: {} };
        }
    }
}

/**
 * Sauvegarde les données dans localStorage
 */
function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stockData));
        console.log('💾 Données sauvegardées dans localStorage');
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde:', error);
        alert('Erreur lors de la sauvegarde des données. Vérifiez l\'espace de stockage.');
    }
}

// ============================================
// DONNÉES D'EXEMPLE
// ============================================

/**
 * Charge des données d'exemple pour démonstration
 */
function loadSampleData() {
    const sampleEntries = [
        {
            id: Date.now() - 86400000 * 7,
            productName: 'Tomates',
            category: 'Légumes',
            quantity: 50,
            unitPrice: 2.50,
            date: new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0],
            total: 125.00
        },
        {
            id: Date.now() - 86400000 * 5,
            productName: 'Riz Basmati',
            category: 'Épicerie',
            quantity: 20,
            unitPrice: 4.50,
            date: new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0],
            total: 90.00
        },
        {
            id: Date.now() - 86400000 * 3,
            productName: 'Poulet',
            category: 'Viandes',
            quantity: 15,
            unitPrice: 8.00,
            date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
            total: 120.00
        },
        {
            id: Date.now() - 86400000 * 2,
            productName: 'Huile d\'olive',
            category: 'Épicerie',
            quantity: 10,
            unitPrice: 6.50,
            date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
            total: 65.00
        },
        {
            id: Date.now() - 86400000 * 1,
            productName: 'Tomates',
            category: 'Légumes',
            quantity: 30,
            unitPrice: 2.30,
            date: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
            total: 69.00
        }
    ];
    
    const sampleExits = [
        {
            id: Date.now() - 86400000 * 4,
            productName: 'Tomates',
            quantity: 25,
            unitPrice: 2.50,
            date: new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0],
            total: 62.50
        },
        {
            id: Date.now() - 86400000 * 2,
            productName: 'Riz Basmati',
            quantity: 8,
            unitPrice: 4.50,
            date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
            total: 36.00
        },
        {
            id: Date.now() - 86400000 * 1,
            productName: 'Poulet',
            quantity: 5,
            unitPrice: 8.00,
            date: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
            total: 40.00
        }
    ];
    
    // Ajouter les entrées
    sampleEntries.forEach(entry => {
        addEntryToStock(entry);
    });
    
    // Ajouter les sorties
    sampleExits.forEach(exit => {
        addExitToStock(exit);
    });
    
    stockData.entries = sampleEntries;
    stockData.exits = sampleExits;
    
    saveData();
    console.log('📝 Données d\'exemple chargées');
}

// ============================================
// GESTION DES ÉVÉNEMENTS
// ============================================

/**
 * Initialise tous les écouteurs d'événements
 */
function initializeEventListeners() {
    // Formulaire d'entrée
    document.getElementById('entryForm').addEventListener('submit', handleEntrySubmit);
    
    // Formulaire de sortie
    document.getElementById('exitForm').addEventListener('submit', handleExitSubmit);
    
    // Bouton pour effacer toutes les données
    document.getElementById('clearAllBtn').addEventListener('click', handleClearAll);
    
    // Gestion des onglets
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
    
    // Mettre à jour la liste des produits disponibles lors du changement de produit
    document.getElementById('exitProductName').addEventListener('change', function() {
        updateExitProductInfo(this.value);
    });
    
    // Menu de navigation des fichiers
    const navToggle = document.getElementById('navToggle');
    const navDropdown = document.getElementById('navDropdown');
    
    if (navToggle && navDropdown) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navDropdown.classList.toggle('active');
        });
        
        // Fermer le menu en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navDropdown.contains(e.target)) {
                navDropdown.classList.remove('active');
            }
        });
        
        // Fermer le menu avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navDropdown.classList.contains('active')) {
                navDropdown.classList.remove('active');
            }
        });
    }
}

// ============================================
// GESTION DES ENTRÉES (PRODUITS ENTRANTS)
// ============================================

/**
 * Gère la soumission du formulaire d'entrée
 */
function handleEntrySubmit(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const productName = document.getElementById('entryProductName').value.trim();
    const category = document.getElementById('entryCategory').value;
    const quantity = parseFloat(document.getElementById('entryQuantity').value);
    const unitPrice = parseFloat(document.getElementById('entryUnitPrice').value);
    const date = document.getElementById('entryDate').value;
    
    // Validation
    if (!productName || !category || quantity <= 0 || unitPrice < 0 || !date) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }
    
    // Créer l'objet entrée
    const entry = {
        id: Date.now(),
        productName: productName,
        category: category,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
        total: quantity * unitPrice
    };
    
    // Ajouter à l'historique
    stockData.entries.push(entry);
    
    // Mettre à jour le stock
    addEntryToStock(entry);
    
    // Sauvegarder
    saveData();
    
    // Réinitialiser le formulaire
    e.target.reset();
    document.getElementById('entryDate').value = new Date().toISOString().split('T')[0];
    
    // Mettre à jour l'affichage
    updateDisplay();
    
    // Message de confirmation
    console.log('✅ Entrée ajoutée:', entry);
    showNotification('Produit entrant ajouté avec succès !', 'success');
}

/**
 * Ajoute une entrée au stock actuel
 */
function addEntryToStock(entry) {
    const productName = entry.productName;
    
    if (!stockData.stock[productName]) {
        // Nouveau produit
        stockData.stock[productName] = {
            category: entry.category,
            quantity: 0,
            totalCost: 0,
            entries: []
        };
    }
    
    // Ajouter la quantité
    stockData.stock[productName].quantity += entry.quantity;
    
    // Calculer le coût total (moyenne pondérée)
    const currentTotalCost = stockData.stock[productName].totalCost;
    const currentQuantity = stockData.stock[productName].quantity - entry.quantity;
    const newTotalCost = (currentTotalCost * currentQuantity + entry.total) / stockData.stock[productName].quantity;
    stockData.stock[productName].totalCost = newTotalCost;
    
    // Enregistrer l'entrée
    stockData.stock[productName].entries.push(entry.id);
}

// ============================================
// GESTION DES SORTIES (PRODUITS SORTANTS)
// ============================================

/**
 * Gère la soumission du formulaire de sortie
 */
function handleExitSubmit(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const productName = document.getElementById('exitProductName').value.trim();
    const quantity = parseFloat(document.getElementById('exitQuantity').value);
    const unitPrice = parseFloat(document.getElementById('exitUnitPrice').value);
    const date = document.getElementById('exitDate').value;
    
    // Validation
    if (!productName || quantity <= 0 || unitPrice < 0 || !date) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }
    
    // Vérifier si le produit existe en stock
    if (!stockData.stock[productName] || stockData.stock[productName].quantity < quantity) {
        alert(`Stock insuffisant pour "${productName}". Stock disponible: ${stockData.stock[productName]?.quantity || 0}`);
        return;
    }
    
    // Créer l'objet sortie
    const exit = {
        id: Date.now(),
        productName: productName,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
        total: quantity * unitPrice
    };
    
    // Ajouter à l'historique
    stockData.exits.push(exit);
    
    // Mettre à jour le stock
    addExitToStock(exit);
    
    // Sauvegarder
    saveData();
    
    // Réinitialiser le formulaire
    e.target.reset();
    document.getElementById('exitDate').value = new Date().toISOString().split('T')[0];
    
    // Mettre à jour l'affichage
    updateDisplay();
    
    // Message de confirmation
    console.log('✅ Sortie ajoutée:', exit);
    showNotification('Produit sortant enregistré avec succès !', 'success');
}

/**
 * Ajoute une sortie au stock actuel
 */
function addExitToStock(exit) {
    const productName = exit.productName;
    
    if (stockData.stock[productName]) {
        // Réduire la quantité
        stockData.stock[productName].quantity -= exit.quantity;
        
        // Si le stock est épuisé, supprimer le produit
        if (stockData.stock[productName].quantity <= 0) {
            delete stockData.stock[productName];
        }
    }
}

/**
 * Met à jour les informations du produit sélectionné dans le formulaire de sortie
 */
function updateExitProductInfo(productName) {
    if (productName && stockData.stock[productName]) {
        const product = stockData.stock[productName];
        document.getElementById('exitUnitPrice').value = product.totalCost.toFixed(2);
    }
}

// ============================================
// AFFICHAGE DES DONNÉES
// ============================================

/**
 * Met à jour tous les affichages
 */
function updateDisplay() {
    updateStockTable();
    updateEntriesTable();
    updateExitsTable();
    updateTotalStockValue();
    updateExitProductSelect();
}

/**
 * Met à jour le tableau du stock actuel
 */
function updateStockTable() {
    const tbody = document.getElementById('stockTableBody');
    const emptyMessage = document.getElementById('emptyStockMessage');
    
    tbody.innerHTML = '';
    
    const products = Object.keys(stockData.stock);
    
    if (products.length === 0) {
        emptyMessage.classList.add('show');
        return;
    }
    
    emptyMessage.classList.remove('show');
    
    // Trier les produits par nom
    products.sort().forEach(productName => {
        const product = stockData.stock[productName];
        const stockValue = product.quantity * product.totalCost;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${productName}</strong></td>
            <td><span class="category-badge">${product.category}</span></td>
            <td class="value-positive">${product.quantity.toFixed(2)}</td>
            <td>${product.totalCost.toFixed(2)} €</td>
            <td class="value-positive"><strong>${stockValue.toFixed(2)} €</strong></td>
            <td>
                <button class="btn btn-danger btn-small" onclick="deleteProduct('${productName}')">
                    Supprimer
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Met à jour le tableau des entrées
 */
function updateEntriesTable() {
    const tbody = document.getElementById('entriesTableBody');
    tbody.innerHTML = '';
    
    if (stockData.entries.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucune entrée enregistrée</td></tr>';
        return;
    }
    
    // Trier par date (plus récent en premier)
    const sortedEntries = [...stockData.entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedEntries.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(entry.date)}</td>
            <td><strong>${entry.productName}</strong></td>
            <td><span class="category-badge">${entry.category}</span></td>
            <td>${entry.quantity.toFixed(2)}</td>
            <td>${entry.unitPrice.toFixed(2)} €</td>
            <td class="value-positive"><strong>${entry.total.toFixed(2)} €</strong></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Met à jour le tableau des sorties
 */
function updateExitsTable() {
    const tbody = document.getElementById('exitsTableBody');
    tbody.innerHTML = '';
    
    if (stockData.exits.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Aucune sortie enregistrée</td></tr>';
        return;
    }
    
    // Trier par date (plus récent en premier)
    const sortedExits = [...stockData.exits].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedExits.forEach(exit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(exit.date)}</td>
            <td><strong>${exit.productName}</strong></td>
            <td>${exit.quantity.toFixed(2)}</td>
            <td>${exit.unitPrice.toFixed(2)} €</td>
            <td class="value-negative"><strong>${exit.total.toFixed(2)} €</strong></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Met à jour la valeur totale du stock
 */
function updateTotalStockValue() {
    let totalValue = 0;
    
    Object.keys(stockData.stock).forEach(productName => {
        const product = stockData.stock[productName];
        totalValue += product.quantity * product.totalCost;
    });
    
    document.getElementById('totalStockValue').textContent = totalValue.toFixed(2) + ' €';
}

/**
 * Met à jour la liste déroulante des produits disponibles pour les sorties
 */
function updateExitProductSelect() {
    const select = document.getElementById('exitProductName');
    const currentValue = select.value;
    
    select.innerHTML = '<option value="">Sélectionner un produit...</option>';
    
    Object.keys(stockData.stock).sort().forEach(productName => {
        const product = stockData.stock[productName];
        if (product.quantity > 0) {
            const option = document.createElement('option');
            option.value = productName;
            option.textContent = `${productName} (Stock: ${product.quantity.toFixed(2)})`;
            select.appendChild(option);
        }
    });
    
    // Restaurer la sélection précédente si elle existe toujours
    if (currentValue && stockData.stock[currentValue]) {
        select.value = currentValue;
    }
}

// ============================================
// GESTION DES ONGLETS
// ============================================

/**
 * Change l'onglet actif
 */
function switchTab(tabName) {
    // Mettre à jour les boutons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Mettre à jour les panneaux
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

// ============================================
// ACTIONS SUR LES PRODUITS
// ============================================

/**
 * Supprime un produit du stock
 */
function deleteProduct(productName) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer "${productName}" du stock ?`)) {
        delete stockData.stock[productName];
        saveData();
        updateDisplay();
        showNotification('Produit supprimé du stock', 'info');
    }
}

/**
 * Efface toutes les données
 */
function handleClearAll() {
    if (confirm('⚠️ ATTENTION : Cette action supprimera TOUTES les données. Êtes-vous absolument sûr ?')) {
        stockData = { entries: [], exits: [], stock: {} };
        localStorage.removeItem(STORAGE_KEY);
        updateDisplay();
        showNotification('Toutes les données ont été supprimées', 'warning');
        console.log('🗑️ Toutes les données ont été supprimées');
    }
}

// ============================================
// UTILITAIRES
// ============================================

/**
 * Formate une date au format français
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Affiche une notification (simple alert pour l'instant)
 */
function showNotification(message, type = 'info') {
    // Pour une version plus avancée, on pourrait utiliser un système de toast
    console.log(`📢 ${type.toUpperCase()}: ${message}`);
}

// ============================================
// EXPORT DES FONCTIONS GLOBALES
// ============================================

// Rendre certaines fonctions accessibles globalement pour les boutons onclick
window.deleteProduct = deleteProduct;

