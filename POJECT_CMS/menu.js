/* ============================================
   MENU DIGITAL - LOGIQUE JAVASCRIPT
   Interactions et animations pour le menu
   ============================================ */

// ============================================
// DONNÉES DES PLATS DU MENU
// ============================================

const menuData = {
    entrees: [
        {
            id: 1,
            name: "Salade César Premium",
            description: "Laitue romaine fraîche, croûtons maison, parmesan italien et notre sauce César signature",
            price: 12.50,
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop",
            icon: "🥗",
            badge: "new"
        },
        {
            id: 2,
            name: "Foie Gras Maison",
            description: "Foie gras d'oie mi-cuit, chutney de figues, pain brioche toasté",
            price: 18.00,
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
            icon: "⭐",
            badge: "chef"
        },
        {
            id: 3,
            name: "Soupe à l'Oignon Gratinée",
            description: "Recette traditionnelle française, fromage gruyère gratiné, croûtons",
            price: 9.50,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
            icon: "🔥",
            badge: "bestseller"
        },
        {
            id: 4,
            name: "Carpaccio de Bœuf",
            description: "Tranches fines de bœuf, roquette, parmesan, huile d'olive et citron",
            price: 14.00,
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&h=400&fit=crop",
            icon: "🍖",
            badge: null
        }
    ],
    plats: [
        {
            id: 5,
            name: "Entrecôte Grillée",
            description: "Entrecôte de bœuf charolais, frites maison, sauce au poivre",
            price: 28.00,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
            icon: "🔥",
            badge: "bestseller"
        },
        {
            id: 6,
            name: "Saumon Grillé",
            description: "Filet de saumon sauvage, légumes de saison, sauce hollandaise",
            price: 24.00,
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
            icon: "🐟",
            badge: "new"
        },
        {
            id: 7,
            name: "Coq au Vin",
            description: "Recette traditionnelle, vin rouge, champignons, lardons, pommes de terre",
            price: 22.00,
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop",
            icon: "⭐",
            badge: "chef"
        },
        {
            id: 8,
            name: "Risotto aux Champignons",
            description: "Risotto crémeux, champignons de Paris, parmesan, truffe",
            price: 20.00,
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop",
            icon: "🍄",
            badge: null
        },
        {
            id: 9,
            name: "Magret de Canard",
            description: "Magret de canard confit, pommes sarladaises, sauce au miel",
            price: 26.00,
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop",
            icon: "🦆",
            badge: "bestseller"
        },
        {
            id: 10,
            name: "Bouillabaisse",
            description: "Soupe de poissons méditerranéenne, rouille, croûtons",
            price: 30.00,
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
            icon: "⭐",
            badge: "chef"
        }
    ],
    desserts: [
        {
            id: 11,
            name: "Tiramisu Maison",
            description: "Recette traditionnelle italienne, café, mascarpone, cacao",
            price: 8.50,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
            icon: "🍰",
            badge: "bestseller"
        },
        {
            id: 12,
            name: "Fondant au Chocolat",
            description: "Cœur coulant au chocolat noir, glace vanille",
            price: 9.00,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
            icon: "🔥",
            badge: "new"
        },
        {
            id: 13,
            name: "Tarte Tatin",
            description: "Tarte aux pommes renversée, caramel, crème fraîche",
            price: 8.00,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
            icon: "🍎",
            badge: null
        },
        {
            id: 14,
            name: "Crème Brûlée",
            description: "Crème vanille, caramel croquant, fruits rouges",
            price: 7.50,
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
            icon: "⭐",
            badge: "chef"
        }
    ],
    boissons: [
        {
            id: 15,
            name: "Jus d'Orange Frais",
            description: "Jus d'orange pressé maison, frais et vitaminé",
            price: 5.50,
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
            icon: "🍊",
            badge: "bestseller"
        },
        {
            id: 16,
            name: "Limonade Maison",
            description: "Limonade fraîche préparée maison, citron et menthe",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1523677011783-c91d1bbe2fdc?w=600&h=400&fit=crop",
            icon: "🍋",
            badge: "new"
        },
        {
            id: 17,
            name: "Smoothie Fruits Rouges",
            description: "Smoothie aux fruits rouges, fraise, framboise, myrtille",
            price: 6.50,
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
            icon: "🥤",
            badge: null
        },
        {
            id: 18,
            name: "Eau Pétillante",
            description: "Eau minérale pétillante, bouteille 75cl",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=400&fit=crop",
            icon: "💧",
            badge: null
        },
        {
            id: 19,
            name: "Café Espresso",
            description: "Café italien, grains torréfiés maison",
            price: 3.00,
            image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop",
            icon: "☕",
            badge: null
        },
        {
            id: 20,
            name: "Thé Vert à la Menthe",
            description: "Thé vert frais infusé avec des feuilles de menthe",
            price: 4.00,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
            icon: "🫖",
            badge: null
        },
        {
            id: 21,
            name: "Coca-Cola / Sprite",
            description: "Boisson gazeuse fraîche, canette 33cl",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=400&fit=crop",
            icon: "🥤",
            badge: null
        }
    ]
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentCategory = 'all';
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Panier
let cart = [];
const CART_STORAGE_KEY = 'menu_digital_cart';

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🍽️ Menu digital initialisé');
    
    // Charger le panier depuis localStorage
    loadCart();
    
    // Générer tous les plats
    renderAllDishes();
    
    // Initialiser les écouteurs d'événements
    initializeEventListeners();
    
    // Initialiser les événements du panier
    initializeCartListeners();
    
    // Mettre à jour l'affichage du panier
    updateCartDisplay();
    
    // Animation d'entrée
    animateOnLoad();
});

// ============================================
// RENDU DES PLATS
// ============================================

/**
 * Génère tous les plats dans leurs sections respectives
 */
function renderAllDishes() {
    // Rendre les entrées
    renderDishes('entrees', menuData.entrees);
    
    // Rendre les plats principaux
    renderDishes('plats', menuData.plats);
    
    // Rendre les desserts
    renderDishes('desserts', menuData.desserts);
    
    // Rendre les boissons
    renderDishes('boissons', menuData.boissons);
}

/**
 * Génère les cartes de plats pour une section donnée
 */
function renderDishes(sectionName, dishes) {
    const grid = document.getElementById(`${sectionName}-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    dishes.forEach((dish, index) => {
        const card = createDishCard(dish, sectionName);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
}

/**
 * Crée une carte de plat
 */
function createDishCard(dish, category) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.dataset.category = category;
    card.dataset.dishId = dish.id;
    
    // Badge HTML
    let badgeHTML = '';
    if (dish.badge) {
        badgeHTML = `<div class="dish-badge ${dish.badge}">${getBadgeText(dish.badge)}</div>`;
    }
    
    card.innerHTML = `
        <div class="dish-image-container">
            <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="dish-content">
            <div class="dish-header">
                <h3 class="dish-name">${dish.name}</h3>
                <span class="dish-icon">${dish.icon}</span>
            </div>
            <p class="dish-description">${dish.description}</p>
            <div class="dish-footer">
                <span class="dish-price">${dish.price.toFixed(2)}</span>
                <button class="dish-btn" onclick="showDishDetails(${dish.id}, '${category}')">
                    Voir détails
                </button>
            </div>
        </div>
    `;
    
    // Ajouter l'événement de clic sur la carte
    card.addEventListener('click', function(e) {
        // Ne pas déclencher si on clique sur le bouton
        if (!e.target.classList.contains('dish-btn')) {
            showDishDetails(dish.id, category);
        }
    });
    
    return card;
}

/**
 * Retourne le texte du badge selon son type
 */
function getBadgeText(badgeType) {
    const badges = {
        'new': 'Nouveau',
        'bestseller': 'Best Seller',
        'chef': "Chef's Choice"
    };
    return badges[badgeType] || '';
}

// ============================================
// FILTRAGE PAR CATÉGORIE
// ============================================

/**
 * Initialise les écouteurs d'événements pour la navigation
 */
function initializeEventListeners() {
    // Boutons de navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            
            // Mettre à jour l'état actif
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Fermer le modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Filtre les plats par catégorie
 */
function filterByCategory(category) {
    currentCategory = category;
    
    const allCards = document.querySelectorAll('.dish-card');
    const allSections = document.querySelectorAll('.menu-section');
    
    if (category === 'all') {
        // Afficher tous les plats
        allCards.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = '';
        });
        allSections.forEach(section => {
            section.style.display = '';
        });
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Masquer toutes les sections
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Afficher la section correspondante
        const targetSection = document.querySelector(`[data-section="${category}"]`);
        if (targetSection) {
            targetSection.style.display = '';
        }
        
        // Filtrer les cartes
        allCards.forEach(card => {
            if (card.dataset.category === category) {
                card.classList.remove('hidden');
                card.style.display = '';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        // Scroll vers la section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Animation de révélation
    animateCards();
}

/**
 * Anime les cartes visibles
 */
function animateCards() {
    const visibleCards = document.querySelectorAll('.dish-card:not(.hidden)');
    visibleCards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
        }, 10);
    });
}

// ============================================
// MODAL DE DÉTAILS
// ============================================

/**
 * Affiche les détails d'un plat dans un modal
 */
function showDishDetails(dishId, category) {
    // Trouver le plat dans les données
    let dish = null;
    const categoryData = menuData[category];
    if (categoryData) {
        dish = categoryData.find(d => d.id === dishId);
    }
    
    if (!dish) {
        console.error('Plat non trouvé');
        return;
    }
    
    // Générer le contenu du modal
    let badgeHTML = '';
    if (dish.badge) {
        badgeHTML = `<div class="dish-badge ${dish.badge}">${getBadgeText(dish.badge)}</div>`;
    }
    
    modalBody.innerHTML = `
        <div class="dish-image-container" style="height: 300px; margin-bottom: var(--spacing-md);">
            <img src="${dish.image}" alt="${dish.name}" class="dish-image" style="object-fit: cover;">
            ${badgeHTML}
        </div>
        <div class="dish-content" style="padding: 0;">
            <div class="dish-header" style="margin-bottom: var(--spacing-md);">
                <h3 class="dish-name" style="font-size: 2rem;">${dish.name}</h3>
                <span class="dish-icon" style="font-size: 2rem;">${dish.icon}</span>
            </div>
            <p class="dish-description" style="font-size: 1.1rem; margin-bottom: var(--spacing-lg);">
                ${dish.description}
            </p>
            <div style="text-align: center; padding-top: var(--spacing-md); border-top: 2px solid rgba(212, 175, 55, 0.3);">
                <div class="dish-price" style="font-size: 2.5rem; margin-bottom: var(--spacing-md);">
                    ${dish.price.toFixed(2)}
                </div>
                <button class="dish-btn" style="padding: var(--spacing-sm) var(--spacing-lg); font-size: 1.1rem;" onclick="addToCart(${dish.id}, '${category}')">
                    Ajouter au panier 🛒
                </button>
            </div>
        </div>
    `;
    
    // Afficher le modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    setTimeout(() => {
        modalBody.style.opacity = '1';
    }, 10);
}

/**
 * Ferme le modal
 */
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Animation de sortie
    modalBody.style.opacity = '0';
}

// ============================================
// GESTION DU PANIER
// ============================================

/**
 * Charge le panier depuis localStorage
 */
function loadCart() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Erreur lors du chargement du panier:', e);
            cart = [];
        }
    }
}

/**
 * Sauvegarde le panier dans localStorage
 */
function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartDisplay();
}

/**
 * Trouve un plat par son ID dans toutes les catégories
 */
function findDishById(dishId) {
    for (const category in menuData) {
        const dish = menuData[category].find(d => d.id === dishId);
        if (dish) {
            return { ...dish, category };
        }
    }
    return null;
}

/**
 * Ajoute un plat au panier
 */
function addToCart(dishId, category) {
    // Trouver le plat
    let dish = findDishById(dishId);
    if (!dish) {
        const categoryData = menuData[category];
        if (categoryData) {
            dish = categoryData.find(d => d.id === dishId);
            if (dish) dish.category = category;
        }
    }
    
    if (!dish) return;
    
    // Vérifier si le plat est déjà dans le panier
    const existingItem = cart.find(item => item.id === dishId);
    
    if (existingItem) {
        // Augmenter la quantité
        existingItem.quantity += 1;
    } else {
        // Ajouter un nouvel article
        cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            icon: dish.icon,
            category: dish.category || category,
            quantity: 1
        });
    }
    
    // Sauvegarder et mettre à jour l'affichage
    saveCart();
    
    // Animation de confirmation
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Ajouté !';
    btn.style.background = 'linear-gradient(135deg, #4a7c59, #66bb6a)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
    
    console.log('🛒 Plat ajouté au panier:', dish.name);
}

/**
 * Supprime un article du panier
 */
function removeFromCart(dishId) {
    cart = cart.filter(item => item.id !== dishId);
    saveCart();
}

/**
 * Met à jour la quantité d'un article dans le panier
 */
function updateCartQuantity(dishId, quantity) {
    const item = cart.find(item => item.id === dishId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(dishId);
        } else {
            item.quantity = quantity;
            saveCart();
        }
    }
}

/**
 * Calcule le total du panier
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Calcule le nombre total d'articles dans le panier
 */
function getCartItemsCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

/**
 * Met à jour l'affichage du panier
 */
function updateCartDisplay() {
    // Mettre à jour le compteur dans l'icône
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const count = getCartItemsCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
}


/**
 * Ouvre le panier dans une nouvelle fenêtre
 */
function openCart() {
    // Générer le HTML pour la nouvelle fenêtre
    const cartHTML = generateCartWindowHTML();
    
    // Créer une nouvelle fenêtre
    const cartWindow = window.open('', 'MonPanier', 'width=600,height=800,scrollbars=yes,resizable=yes');
    
    if (!cartWindow) {
        alert('Veuillez autoriser les popups pour afficher le panier.');
        return;
    }
    
    // Écrire le contenu dans la nouvelle fenêtre
    cartWindow.document.write(cartHTML);
    cartWindow.document.close();
    
    // Attendre que la fenêtre soit chargée puis initialiser
    cartWindow.onload = function() {
        initializeCartWindow(cartWindow);
    };
}

/**
 * Génère le HTML complet pour la fenêtre du panier
 */
function generateCartWindowHTML() {
    const total = getCartTotal();
    const itemsCount = getCartItemsCount();
    
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Panier - Le Gourmet</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #e0e0e0;
            padding: 20px;
            min-height: 100vh;
        }
        
        .cart-container {
            max-width: 550px;
            margin: 0 auto;
        }
        
        .cart-header {
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid rgba(212, 175, 55, 0.2);
            margin-bottom: 20px;
        }
        
        .cart-title {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: #d4af37;
            margin-bottom: 10px;
        }
        
        .cart-items-count {
            color: #a0a0a0;
            font-size: 0.9rem;
        }
        
        .cart-empty {
            text-align: center;
            padding: 60px 20px;
            color: #a0a0a0;
        }
        
        .cart-empty-icon {
            font-size: 4rem;
            opacity: 0.3;
            display: block;
            margin-top: 20px;
        }
        
        .cart-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: rgba(212, 175, 55, 0.05);
            border-radius: 12px;
            margin-bottom: 15px;
            border: 1px solid rgba(212, 175, 55, 0.1);
        }
        
        .cart-item-image {
            width: 80px;
            height: 80px;
            border-radius: 12px;
            overflow: hidden;
            flex-shrink: 0;
            background: #1a1a1a;
        }
        
        .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .cart-item-info {
            flex: 1;
            min-width: 0;
        }
        
        .cart-item-name {
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            color: #d4af37;
            margin-bottom: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .cart-item-price {
            font-size: 0.9rem;
            color: #a0a0a0;
        }
        
        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 12px;
            padding: 5px;
        }
        
        .cart-item-btn {
            background: #d4af37;
            color: #1a1a1a;
            border: none;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            font-size: 1rem;
        }
        
        .cart-item-btn:hover {
            background: #f4e4bc;
            transform: scale(1.1);
        }
        
        .cart-item-quantity {
            min-width: 30px;
            text-align: center;
            font-weight: 600;
            color: #d4af37;
            font-size: 1rem;
        }
        
        .cart-item-remove {
            background: rgba(196, 30, 58, 0.2);
            border: 1px solid #c41e3a;
            color: #c41e3a;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            opacity: 0.7;
        }
        
        .cart-item-remove:hover {
            background: #c41e3a;
            color: #fff;
            opacity: 1;
            transform: scale(1.1);
        }
        
        .cart-footer {
            padding: 20px;
            border-top: 2px solid rgba(212, 175, 55, 0.2);
            margin-top: 20px;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
            border-radius: 12px;
        }
        
        .cart-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 15px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 12px;
        }
        
        .cart-total-label {
            font-size: 1.2rem;
            color: #a0a0a0;
            font-weight: 500;
        }
        
        .cart-total-price {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: #d4af37;
            font-weight: 700;
        }
        
        .cart-checkout-btn {
            width: 100%;
            background: linear-gradient(135deg, #d4af37, #b8941f);
            color: #1a1a1a;
            border: none;
            padding: 15px;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .cart-checkout-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(212, 175, 55, 0.3);
            background: linear-gradient(135deg, #f4e4bc, #d4af37);
        }
        
        .cart-checkout-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .cart-actions {
            margin-top: 15px;
            display: flex;
            gap: 10px;
        }
        
        .cart-btn-secondary {
            flex: 1;
            background: transparent;
            border: 2px solid #d4af37;
            color: #d4af37;
            padding: 12px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .cart-btn-secondary:hover {
            background: rgba(212, 175, 55, 0.1);
        }
    </style>
</head>
<body>
    <div class="cart-container">
        <div class="cart-header">
            <h1 class="cart-title">🛒 Mon Panier</h1>
            <p class="cart-items-count" id="cartItemsCount">${itemsCount} article${itemsCount > 1 ? 's' : ''}</p>
        </div>
        <div id="cartItemsContainer">
            ${generateCartItemsHTML()}
        </div>
        <div class="cart-footer" id="cartFooter" style="display: ${cart.length > 0 ? 'block' : 'none'};">
            <div class="cart-total">
                <span class="cart-total-label">Total :</span>
                <span class="cart-total-price" id="cartTotal">${total.toFixed(2)} €</span>
            </div>
            <button class="cart-checkout-btn" id="cartCheckoutBtn" ${cart.length === 0 ? 'disabled' : ''}>
                Commander
            </button>
            <div class="cart-actions">
                <button class="cart-btn-secondary" onclick="window.close()">Fermer</button>
                <button class="cart-btn-secondary" onclick="clearCartInWindow()">Vider le panier</button>
            </div>
        </div>
    </div>
    <script>
        // Stocker les données du panier dans la fenêtre
        window.cartData = ${JSON.stringify(cart)};
        window.parentWindow = window.opener;
        
        function updateQuantity(dishId, change) {
            const item = window.cartData.find(item => item.id === dishId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    window.cartData = window.cartData.filter(item => item.id !== dishId);
                }
                refreshCartDisplay();
                
                // Mettre à jour le panier dans la fenêtre parente
                if (window.parentWindow && typeof window.parentWindow.updateCartFromWindow === 'function') {
                    window.parentWindow.updateCartFromWindow(window.cartData);
                }
            }
        }
        
        function removeItem(dishId) {
            window.cartData = window.cartData.filter(item => item.id !== dishId);
            refreshCartDisplay();
            
            // Mettre à jour le panier dans la fenêtre parente
            if (window.parentWindow && typeof window.parentWindow.updateCartFromWindow === 'function') {
                window.parentWindow.updateCartFromWindow(window.cartData);
            }
        }
        
        function clearCartInWindow() {
            if (confirm('Voulez-vous vraiment vider le panier ?')) {
                window.cartData = [];
                refreshCartDisplay();
                
                // Mettre à jour le panier dans la fenêtre parente
                if (window.parentWindow && typeof window.parentWindow.updateCartFromWindow === 'function') {
                    window.parentWindow.updateCartFromWindow([]);
                }
            }
        }
        
        function refreshCartDisplay() {
            const container = document.getElementById('cartItemsContainer');
            const footer = document.getElementById('cartFooter');
            const totalEl = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('cartCheckoutBtn');
            const itemsCountEl = document.getElementById('cartItemsCount');
            
            if (window.cartData.length === 0) {
                container.innerHTML = '<div class="cart-empty"><p>Votre panier est vide</p><span class="cart-empty-icon">🛒</span></div>';
                footer.style.display = 'none';
                if (itemsCountEl) itemsCountEl.textContent = '0 article';
                return;
            }
            
            const total = window.cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemsCount = window.cartData.reduce((sum, item) => sum + item.quantity, 0);
            
            container.innerHTML = generateCartItemsHTML();
            totalEl.textContent = total.toFixed(2) + ' €';
            checkoutBtn.disabled = false;
            if (itemsCountEl) itemsCountEl.textContent = itemsCount + ' article' + (itemsCount > 1 ? 's' : '');
            footer.style.display = 'block';
        }
        
        function generateCartItemsHTML() {
            if (window.cartData.length === 0) {
                return '<div class="cart-empty"><p>Votre panier est vide</p><span class="cart-empty-icon">🛒</span></div>';
            }
            
            return window.cartData.map(item => \`
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="\${item.image}" alt="\${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">\${item.icon} \${item.name}</h4>
                        <p class="cart-item-price">\${item.price.toFixed(2)} €</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="cart-item-btn" onclick="updateQuantity(\${item.id}, -1)">-</button>
                        <span class="cart-item-quantity">\${item.quantity}</span>
                        <button class="cart-item-btn" onclick="updateQuantity(\${item.id}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeItem(\${item.id})" title="Supprimer">×</button>
                </div>
            \`).join('');
        }
        
        // Bouton commander
        document.getElementById('cartCheckoutBtn').addEventListener('click', function() {
            if (window.cartData.length > 0) {
                const total = window.cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                alert('Commande confirmée ! Total : ' + total.toFixed(2) + ' €\\n\\nMerci pour votre commande ! 🍽️');
                window.close();
            }
        });
        
        // Actualiser toutes les 500ms pour synchroniser avec la fenêtre parente
        setInterval(function() {
            if (window.parentWindow && typeof window.parentWindow.getCartData === 'function') {
                const parentCart = window.parentWindow.getCartData();
                if (JSON.stringify(parentCart) !== JSON.stringify(window.cartData)) {
                    window.cartData = parentCart;
                    refreshCartDisplay();
                }
            }
        }, 500);
    </script>
</body>
</html>`;
}

/**
 * Génère le HTML des articles du panier
 */
function generateCartItemsHTML() {
    if (cart.length === 0) {
        return '<div class="cart-empty"><p>Votre panier est vide</p><span class="cart-empty-icon">🛒</span></div>';
    }
    
    return cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.icon} ${item.name}</h4>
                <p class="cart-item-price">${item.price.toFixed(2)} €</p>
            </div>
            <div class="cart-item-controls">
                <button class="cart-item-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="cart-item-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeItem(${item.id})" title="Supprimer">×</button>
        </div>
    `).join('');
}

/**
 * Initialise la fenêtre du panier
 */
function initializeCartWindow(cartWindow) {
    // Cette fonction peut être utilisée pour des initialisations supplémentaires si nécessaire
}

/**
 * Met à jour le panier depuis la fenêtre popup (appelé depuis la popup)
 */
function updateCartFromWindow(newCart) {
    cart = newCart;
    saveCart();
    updateCartDisplay();
}

/**
 * Retourne les données du panier (pour la synchronisation avec la popup)
 */
function getCartData() {
    return cart;
}

/**
 * Ferme le panier (garde cette fonction pour compatibilité mais ne fait rien)
 */
function closeCart() {
    // Fonction conservée pour compatibilité mais ne fait rien car on utilise une popup
}

/**
 * Initialise les écouteurs d'événements du panier
 */
function initializeCartListeners() {
    // Bouton pour ouvrir le panier
    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', openCart);
    }
}

/**
 * Vide le panier
 */
function clearCart() {
    cart = [];
    saveCart();
}


// ============================================
// ANIMATIONS
// ============================================

/**
 * Animation au chargement de la page
 */
function animateOnLoad() {
    // Animation des cartes avec délai
    const cards = document.querySelectorAll('.dish-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
    
    // Animation du header
    const header = document.querySelector('.menu-header');
    if (header) {
        header.style.animation = 'fadeInDown 0.8s ease-out';
    }
}

// ============================================
// EXPORT DES FONCTIONS GLOBALES
// ============================================

// Rendre les fonctions accessibles globalement
window.showDishDetails = showDishDetails;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.updateCartFromWindow = updateCartFromWindow;
window.getCartData = getCartData;

