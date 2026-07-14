// Base de datos de productos de Burger Bike's
const PRODUCTS = [
    // --- HAMBURGUESAS ---
    {
        id: 'burg-argentina',
        name: 'Argentina',
        category: 'hamburguesas',
        price: 40,
        description: '100gr de Carne de León, Queso Amarillo, Jitomate, Cebolla Morada.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.5
    },
    {
        id: 'burg-argentina-2',
        name: 'Argentina 2.0',
        category: 'hamburguesas',
        price: 68,
        description: '100gr de Carne de León, Queso Amarillo, Aguacate, Tocino de Puerco Brasileño, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: 'Nueva',
        stars: 4.7
    },
    {
        id: 'burg-samoana',
        name: 'Samoana',
        category: 'hamburguesas',
        price: 68,
        description: '100gr de Carne de Unicornio, Piña de Bob Esponja, Tocino Árabe, Jamón, Set de Vegetales, Mayonesa Galáctica.',
        image: 'assets/burger_item.jpg',
        badge: 'Popular',
        stars: 4.8
    },
    {
        id: 'burg-llanero',
        name: 'Llanero Solitario',
        category: 'hamburguesas',
        price: 70,
        description: '100gr de Carne de Mamut, Queso Asadero, Aros de Cebolla Naturales, Tocino de Puerco BBQ, Mayonesa de Chipotle, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: '🥈 2do Lugar',
        stars: 4.9
    },
    {
        id: 'burg-wirikuta',
        name: 'Wirikuta',
        category: 'hamburguesas',
        price: 68,
        description: '100gr de Carne de Mamut, champiñones de la Granja de María Sabina, Chile Poblano, Queso Asadero, BBQ, Mayonesas Egipcias, Set de Vegetales, Tocino de Coshi.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'burg-nona',
        name: 'Nona Lola',
        category: 'hamburguesas',
        price: 68,
        description: '100gr de Carne de T-Rex, Peperoni de Saturno, Queso Blanco, Tocino Azteca, Salsa 4 Quesos Parmesano, Mayonesa Chimichurri, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: 'Especial',
        stars: 4.8
    },
    {
        id: 'burg-bastarda',
        name: 'Bastarda',
        category: 'hamburguesas',
        price: 70,
        description: '100gr de Carne Sagrada, choriqueso, Chile Poblano, Salchichón, Queso Amarillo, Set de Vegetales, Mayonesas Galácticas.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.5
    },
    {
        id: 'burg-sancho',
        name: 'Sancho',
        category: 'hamburguesas',
        price: 78,
        description: '100gr de Carne de Velociraptor, Salchichón, Queso Amarillo y Blanco, Tocino Croata, BBQ, Mayonesa de Jalapeño, chimichurri, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'burg-cosmica',
        name: 'Cósmica',
        category: 'hamburguesas',
        price: 78,
        description: '100gr de Carne de Robocop, Piña de Turquía, Salchichón, Tocino, Queso Amarillo y Blanco, BBQ, Jalea de Piña-Habanero, Set de Vegetales, Mayonesas chidas.',
        image: 'assets/burger_item.jpg',
        badge: 'Galáctica',
        stars: 4.7
    },
    {
        id: 'burg-hulk',
        name: 'Hulk',
        category: 'hamburguesas',
        price: 78,
        description: '100gr de Carne de Hormiga Atómica, 4 Rebanadas de Tocino, Aguacate, Queso Amarillo y Queso Asadero, Cebolla Asada, Mayonesa de Jalapeño, chimichurri, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: 'Monstruo',
        stars: 4.8
    },
    {
        id: 'burg-mutante',
        name: 'Mutante',
        category: 'hamburguesas',
        price: 89,
        description: '100gr de Carne de Godzilla, Camarones de Río Nilo, choriqueso, Tocino Árabe, chile Poblano, Queso Amarillo, Mayonesa de Chipotle, Chimichurri, Champiñón, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: '🥇 1er Lugar',
        stars: 5.0
    },
    {
        id: 'burg-infrahumana',
        name: 'Infrahumana',
        category: 'hamburguesas',
        price: 98,
        description: 'Doble Carne de Unicornio, Piña, Jamón, Peperoni, choriqueso, Poblano, Mayonesas de los Dioses Mayas.',
        image: 'assets/burger_item.jpg',
        badge: 'Doble Carne',
        stars: 4.9
    },
    {
        id: 'burg-tripon',
        name: 'Trip-On',
        category: 'hamburguesas',
        price: 110,
        description: 'Carnes de Velociraptor, Jamón, Tocino de Puerco Inca, Queso Blanco y Amarillo, Set de Vegetales, Mayonesa de Jalapeño, Mayonesa de Chipotle.',
        image: 'assets/burger_item.jpg',
        badge: 'Feroz',
        stars: 4.9
    },
    {
        id: 'burg-tapa',
        name: 'Tapa-Arterias',
        category: 'hamburguesas',
        price: 80,
        description: '100gr de Carne de King Kong, 4 Rebanadas de Tocino, Jamón, Huevo Estrellado de la NASA, Queso Amarillo y Blanco, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: 'Pesada',
        stars: 4.8
    },
    {
        id: 'burg-vaquerita',
        name: 'Vaquerita',
        category: 'hamburguesas',
        price: 90,
        description: 'Carne de Búfalo Bill, Arrachera, Piña, Queso Amarillo, Chile Poblano, Set de Vegetales.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'burg-manuelito',
        name: 'Manuelito',
        category: 'hamburguesas',
        price: 89,
        description: 'Carne de Minium, Salchichón, Piña Caramelizada, Carne de Puerco Migajero, Chorizo Argentino, Chiles Toreados con Cebolla pa llorar, Set de Vegetales, mayonesas chidas.',
        image: 'assets/burger_item.jpg',
        badge: 'Picosa',
        stars: 4.7
    },
    {
        id: 'burg-jj',
        name: 'JJ-Burguer',
        category: 'hamburguesas',
        price: 89,
        description: 'Carne de Chitará, Jamón Serrano, Salchicha Arg., Tocino de Puerco Cansado, Poblano, Queso Blanco y Amarillo, Champiñones al Ajillo, Chile Güero de África.',
        image: 'assets/burger_item.jpg',
        badge: 'Elite',
        stars: 4.8
    },

    // --- SNACKS ("SNAKS") ---
    {
        id: 'snak-papas',
        name: 'Papas Fritas',
        category: 'snaks',
        price: 40,
        description: '170 gr de papas fritas crujientes y sazonadas al estilo Biker.',
        image: 'assets/snack_item.jpg',
        badge: 'Básico',
        stars: 4.4
    },
    {
        id: 'snak-salchipapas',
        name: 'Salchipapas',
        category: 'snaks',
        price: 60,
        description: 'Papas fritas combinadas con salchicha premium picada y aderezos.',
        image: 'assets/snack_item.jpg',
        badge: '',
        stars: 4.5
    },
    {
        id: 'snak-aros',
        name: 'Aros de Cebolla',
        category: 'snaks',
        price: 68,
        description: '7 piezas de aros de cebolla naturales, súper crujientes.',
        image: 'assets/snack_item.jpg',
        badge: 'Crujiente',
        stars: 4.3
    },
    {
        id: 'snak-salchipulpos',
        name: 'Salchipulpos',
        category: 'snaks',
        price: 40,
        description: '16 piezas de divertidos salchipulpos fritos, perfectos para compartir.',
        image: 'assets/snack_item.jpg',
        badge: 'Para Niños',
        stars: 4.5
    },
    {
        id: 'snak-combo-loco',
        name: 'Combo Loco',
        category: 'snaks',
        price: 80,
        description: 'Papas, salchichas, 4 aros de cebolla y 3 dedos de queso crujientes.',
        image: 'assets/snack_item.jpg',
        badge: 'Recomendado',
        stars: 4.8
    },

    // --- COMBOS ---
    {
        id: 'combo-catrina',
        name: 'Catrina',
        category: 'combos',
        price: 250,
        description: '4 Hamburguesas Argentinas + 2 órdenes de Papas + Salchipulpos.',
        image: 'assets/combo_item.jpg',
        badge: 'Familiar',
        stars: 4.7
    },
    {
        id: 'combo-peluche',
        name: 'Familia Peluche',
        category: 'combos',
        price: 375,
        description: '5 Hamburguesas Argentinas + 1 Dogo MX + 3 ord. de Papas + 1 ord. de Salchipulpos.',
        image: 'assets/combo_item.jpg',
        badge: 'Megacombo',
        stars: 4.9
    },
    {
        id: 'combo-tres',
        name: 'Amor de Tres',
        category: 'combos',
        price: 215,
        description: '3 Hamburguesas Argentinas + 3 ord. de Papas.',
        image: 'assets/combo_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'combo-perro',
        name: 'Cuidado con el Perro',
        category: 'combos',
        price: 234,
        description: '4 Dogo Argentinos + 3 ord. de Papas.',
        image: 'assets/combo_item.jpg',
        badge: 'Dogos',
        stars: 4.5
    },
    {
        id: 'combo-soloyo',
        name: 'Solo Yo',
        category: 'combos',
        price: 98,
        description: '1 Hamburguesa Samoana + 1 orden de Papas.',
        image: 'assets/combo_item.jpg',
        badge: 'Individual',
        stars: 4.7
    },
    {
        id: 'combo-chupacabras',
        name: 'Chupa Cabras',
        category: 'combos',
        price: 100,
        description: '1 Hamburguesa Argentina + 1 Dogo Argentino + Papas.',
        image: 'assets/combo_item.jpg',
        badge: 'Mix',
        stars: 4.8
    },
    {
        id: 'combo-amigos',
        name: 'Dos Amigos',
        category: 'combos',
        price: 150,
        description: '2 Hamburguesas Argentinas + 2 Papas.',
        image: 'assets/combo_item.jpg',
        badge: 'Parejas',
        stars: 4.7
    },
    {
        id: 'combo-ideal',
        name: 'Pareja Ideal',
        category: 'combos',
        price: 200,
        description: 'Hamburguesa Samoana + Llanero + 2 Papas.',
        image: 'assets/combo_item.jpg',
        badge: 'Favorito',
        stars: 4.9
    },
    {
        id: 'combo-argentinos',
        name: 'Argentinos',
        category: 'combos',
        price: 70,
        description: '1 Dogo Argentino + 1 Hamburguesa Argentina.',
        image: 'assets/combo_item.jpg',
        badge: 'Económico',
        stars: 4.6
    },

    // --- BEBIDAS (COMPLEMENTARIAS) ---
    {
        id: 'beb-refresco',
        name: 'Refresco en Lata',
        category: 'bebidas',
        price: 25,
        description: 'Refrescos variados bien fríos (Coca-Cola, Fanta, Sidral, Sprite).',
        image: 'assets/combo_item.jpg',
        badge: 'Frío',
        stars: 4.5
    },
    {
        id: 'beb-agua',
        name: 'Agua Embotellada',
        category: 'bebidas',
        price: 20,
        description: 'Agua purificada de 600ml.',
        image: 'assets/combo_item.jpg',
        badge: '',
        stars: 4.2
    },
    {
        id: 'beb-malteada',
        name: 'Malteada Cremosa',
        category: 'bebidas',
        price: 45,
        description: 'Malteadas premium con crema batida. Elige: Chocolate, Vainilla o Fresa.',
        image: 'assets/combo_item.jpg',
        badge: 'Diner Classic',
        stars: 4.9
    }
];

// Opciones de personalización
const CUSTOMIZATION_OPTIONS = {
    hamburguesas: [
        { name: 'Extra Queso Asadero', price: 12 },
        { name: 'Extra Tocino Crujiente', price: 15 },
        { name: 'Doble Carne', price: 35 },
        { name: 'Añadir Huevo Estrellado', price: 10 },
        { name: 'Sin Cebolla', price: 0 },
        { name: 'Sin Chile / Picante', price: 0 }
    ],
    snaks: [
        { name: 'Añadir Queso Cheddar Derretido', price: 15 },
        { name: 'Añadir Tocino Picado', price: 15 },
        { name: 'Aderezo Chipotle Extra', price: 5 }
    ],
    combos: [
        { name: 'Hacer Papas Grandes', price: 15 },
        { name: 'Añadir Refresco', price: 20 }
    ],
    bebidas: []
};

// Variables globales de estado
let cart = JSON.parse(localStorage.getItem('burger_bikers_cart')) || [];
let activeCategory = 'todos';
let searchQuery = '';
let currentSelectedProduct = null;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    setupEventListeners();
    setupCartUI();
});

// Configuración de escuchas de eventos
function setupEventListeners() {
    // Filtrado por Categorías
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            renderProducts();
        });
    });

    // Buscador
    const searchInput = document.getElementById('search-input');
    const clearSearch = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        if (searchQuery.length > 0) {
            clearSearch.style.display = 'block';
        } else {
            clearSearch.style.display = 'none';
        }
        renderProducts();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearch.style.display = 'none';
        renderProducts();
    });

    // Abrir/Cerrar Carrito
    const cartToggle = document.getElementById('cart-toggle-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCartFunc = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('show');
        document.body.classList.toggle('overflow-hidden');
        renderCartItems();
    };

    cartToggle.addEventListener('click', toggleCartFunc);
    closeCart.addEventListener('click', toggleCartFunc);
    cartOverlay.addEventListener('click', toggleCartFunc);

    // Modal de Detalle de Producto
    const closeModal = document.getElementById('close-modal');
    const productModal = document.getElementById('product-modal');
    
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        }
    });

    // Envío del pedido por WhatsApp
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', sendOrderToWhatsApp);
}

// Renderizar la lista de productos
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    // Filtrar los productos
    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                              p.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results text-center py-5">
                <i class="fas fa-motorcycle fa-3x text-muted mb-3"></i>
                <h3>No encontramos lo que buscas</h3>
                <p class="text-muted">Prueba buscando otros ingredientes o categorías.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card animate-fade-in';
        
        // Estrellas de puntuación
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(p.stars)) {
                starsHTML += '<i class="fas fa-star text-primary"></i>';
            } else if (i - 0.5 <= p.stars) {
                starsHTML += '<i class="fas fa-star-half-alt text-primary"></i>';
            } else {
                starsHTML += '<i class="far fa-star text-muted"></i>';
            }
        }

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${p.image}" alt="${p.name}" class="card-image" loading="lazy">
                ${p.badge ? `<span class="card-badge bg-accent">${p.badge}</span>` : ''}
                <div class="card-image-overlay">
                    <button class="btn btn-primary rounded-circle btn-view" data-id="${p.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h3 class="product-title">${p.name}</h3>
                    <span class="product-price">$${p.price.toFixed(2)}</span>
                </div>
                <div class="product-rating mb-2">
                    ${starsHTML} <span class="rating-text">(${p.stars})</span>
                </div>
                <p class="product-description">${p.description}</p>
                <div class="card-actions mt-3">
                    <button class="btn btn-outline-primary w-100 btn-add-quick" data-id="${p.id}">
                        <i class="fas fa-shopping-cart me-2"></i> Agregar
                    </button>
                </div>
            </div>
        `;

        // Eventos
        card.querySelector('.btn-view').addEventListener('click', () => openProductModal(p));
        card.querySelector('.btn-add-quick').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCartQuick(p);
        });

        grid.appendChild(card);
    });
}

// Abrir Modal de Producto para Personalización
function openProductModal(product) {
    currentSelectedProduct = product;
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-product-name');
    const modalImg = document.getElementById('modal-product-image');
    const modalDesc = document.getElementById('modal-product-description');
    const modalPrice = document.getElementById('modal-product-price');
    const optionsContainer = document.getElementById('modal-custom-options');
    const quantityCount = document.getElementById('modal-qty-count');

    // Cargar detalles básicos
    modalTitle.textContent = product.name;
    modalImg.src = product.image;
    modalDesc.textContent = product.description;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    quantityCount.textContent = '1';

    // Generar opciones de personalización
    optionsContainer.innerHTML = '';
    const options = CUSTOMIZATION_OPTIONS[product.category] || [];
    
    if (options.length > 0) {
        const title = document.createElement('h4');
        title.className = 'custom-options-title mb-3';
        title.innerHTML = '<i class="fas fa-tools text-primary me-2"></i>Personaliza tu pedido:';
        optionsContainer.appendChild(title);

        options.forEach((opt, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'custom-option-item';
            
            const uniqueId = `opt-${product.id}-${idx}`;
            const priceText = opt.price > 0 ? `(+$${opt.price.toFixed(2)})` : '(Gratis)';
            
            wrapper.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input custom-opt-checkbox" type="checkbox" 
                           id="${uniqueId}" data-name="${opt.name}" data-price="${opt.price}">
                    <label class="form-check-label d-flex justify-content-between" for="${uniqueId}">
                        <span>${opt.name}</span>
                        <span class="text-accent">${priceText}</span>
                    </label>
                </div>
            `;
            optionsContainer.appendChild(wrapper);
        });
    }

    // Configurar control de cantidades dentro del modal
    const minusBtn = document.getElementById('modal-qty-minus');
    const plusBtn = document.getElementById('modal-qty-plus');
    
    const newMinus = minusBtn.cloneNode(true);
    const newPlus = plusBtn.cloneNode(true);
    minusBtn.replaceWith(newMinus);
    plusBtn.replaceWith(newPlus);

    let qty = 1;
    newMinus.addEventListener('click', () => {
        if (qty > 1) {
            qty--;
            quantityCount.textContent = qty;
        }
    });

    newPlus.addEventListener('click', () => {
        qty++;
        quantityCount.textContent = qty;
    });

    // Configurar botón de agregar del modal
    const addBtn = document.getElementById('modal-add-btn');
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.replaceWith(newAddBtn);

    newAddBtn.addEventListener('click', () => {
        const checkboxes = optionsContainer.querySelectorAll('.custom-opt-checkbox:checked');
        const extras = Array.from(checkboxes).map(cb => ({
            name: cb.dataset.name,
            price: parseFloat(cb.dataset.price)
        }));

        addToCart(product, qty, extras);
        
        modal.classList.remove('open');
        document.body.classList.remove('overflow-hidden');

        showToast(`¡${product.name} agregado al carrito!`);
    });

    modal.classList.add('open');
    document.body.classList.add('overflow-hidden');
}

// Agregar rápido (sin personalización, cantidad = 1)
function addToCartQuick(product) {
    addToCart(product, 1, []);
    showToast(`¡${product.name} agregado al carrito!`);
}

// Agregar elemento al carrito formalmente
function addToCart(product, qty, extras) {
    const extrasKey = extras.map(e => `${e.name}:${e.price}`).sort().join('|');
    const cartItemId = `${product.id}-${extrasKey}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: qty,
            extras: extras
        });
    }

    saveCart();
    updateCartCount();
    renderCartItems();
}

// Actualizar el número de la insignia del carrito
function updateCartCount() {
    const badge = document.getElementById('cart-badge');
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;
    
    const cartToggle = document.getElementById('cart-toggle-btn');
    if (totalCount > 0) {
        cartToggle.classList.add('pulse');
    } else {
        cartToggle.classList.remove('pulse');
    }
}

// Renderizar la lista de compras del carrito lateral
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-subtotal');
    
    container.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart text-center py-5">
                <i class="fas fa-shopping-basket fa-3x text-muted mb-3"></i>
                <p>Tu carrito está vacío</p>
                <p class="text-muted small">¡Agrega algunas burgers de mamut o t-rex!</p>
            </div>
        `;
        totalEl.textContent = '$0.00';
        document.getElementById('checkout-btn').disabled = true;
        return;
    }

    document.getElementById('checkout-btn').disabled = false;

    cart.forEach((item, index) => {
        const extrasPrice = item.extras.reduce((sum, e) => sum + e.price, 0);
        const itemUnitPrice = item.price + extrasPrice;
        const itemTotal = itemUnitPrice * item.quantity;
        subtotal += itemTotal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item animate-fade-in';

        let extrasHTML = '';
        if (item.extras.length > 0) {
            extrasHTML = `
                <div class="cart-item-extras">
                    ${item.extras.map(e => `<span>+ ${e.name} ($${e.price})</span>`).join('')}
                </div>
            `;
        }

        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <button class="btn btn-link text-danger p-0 btn-remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-price">$${itemUnitPrice.toFixed(2)}</div>
                ${extrasHTML}
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="qty-control-sm">
                        <button class="btn-qty-sm btn-minus" data-index="${index}"><i class="fas fa-minus"></i></button>
                        <span class="qty-val-sm">${item.quantity}</span>
                        <button class="btn-qty-sm btn-plus" data-index="${index}"><i class="fas fa-plus"></i></button>
                    </div>
                    <span class="fw-bold text-accent">$${itemTotal.toFixed(2)}</span>
                </div>
            </div>
        `;

        cartItemEl.querySelector('.btn-minus').addEventListener('click', () => adjustCartQuantity(index, -1));
        cartItemEl.querySelector('.btn-plus').addEventListener('click', () => adjustCartQuantity(index, 1));
        cartItemEl.querySelector('.btn-remove-item').addEventListener('click', () => removeCartItem(index));

        container.appendChild(cartItemEl);
    });

    totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

// Ajustar cantidad de un elemento del carrito
function adjustCartQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Remover elemento del carrito
function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Guardar carrito en LocalStorage
function saveCart() {
    localStorage.setItem('burger_bikers_cart', JSON.stringify(cart));
}

// Configuración adicional del checkout
function setupCartUI() {
    const paymentSelect = document.getElementById('payment-method');
    const cashChangeWrapper = document.getElementById('cash-change-wrapper');
    
    paymentSelect.addEventListener('change', (e) => {
        if (e.target.value === 'efectivo') {
            cashChangeWrapper.classList.remove('d-none');
            cashChangeWrapper.classList.add('animate-fade-in');
        } else {
            cashChangeWrapper.classList.add('d-none');
        }
    });
}

// Formatear pedido y enviar a WhatsApp
function sendOrderToWhatsApp() {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerNotes = document.getElementById('customer-notes').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const cashChange = document.getElementById('cash-change').value.trim();
    
    if (!customerName) {
        alert('Por favor, ingresa tu nombre.');
        document.getElementById('customer-name').focus();
        return;
    }

    // Teléfono de Burger Bike's (Número dummy de prueba, se puede cambiar)
    const phoneNumber = '4497181129'; 

    // Cabecera del mensaje
    let message = `🏍️ *BURGER BIKE'S - NUEVO PEDIDO* 🏍️\n`;
    message += `===============================\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    message += `💳 *Método de Pago:* ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}\n`;
    
    if (paymentMethod === 'efectivo' && cashChange) {
        message += `💵 *Paga con:* $${cashChange} (Requiere cambio)\n`;
    }

    if (customerNotes) {
        message += `📝 *Notas del Pedido:* ${customerNotes}\n`;
    }
    
    message += `\n🛒 *DETALLE DEL PEDIDO:*\n`;
    message += `---------------------------------\n`;

    let total = 0;
    cart.forEach(item => {
        const extrasPrice = item.extras.reduce((sum, e) => sum + e.price, 0);
        const unitPrice = item.price + extrasPrice;
        const subtotalItem = unitPrice * item.quantity;
        total += subtotalItem;

        message += `• *${item.quantity}x* ${item.name} ($${item.price.toFixed(2)})\n`;
        
        if (item.extras.length > 0) {
            item.extras.forEach(ext => {
                message += `  _+ ${ext.name} ($${ext.price.toFixed(2)})_\n`;
            });
        }
        
        message += `  *Subtotal:* $${subtotalItem.toFixed(2)}\n\n`;
    });

    message += `---------------------------------\n`;
    message += `💰 *TOTAL A PAGAR: $${total.toFixed(2)}*\n\n`;
    message += `===============================\n`;
    message += `¡Muchas gracias por su preferencia! 🍔🔥`;

    // Codificar mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir enlace en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Vaciar carrito tras hacer el pedido
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    
    // Cerrar carrito
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('show');
    document.body.classList.remove('overflow-hidden');
    
    showToast('¡Pedido enviado! Redirigiendo a WhatsApp...', 4000);
}

// Función auxiliar para notificaciones Toast
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification animate-slide-up';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle text-primary me-2"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, duration);
}
