const apiUrl = 'https://fakestoreapi.com/products';

const endpoints = [
    { url: `${apiUrl}?limit=3`, selector: '.allproducts-section' },
    { url: `${apiUrl}/category/electronics?limit=3`, selector: '.allelectronicproducts-section' },
    { url: `${apiUrl}/category/women's clothing`, selector: '.women-products-container' },
    { url: `${apiUrl}/category/men's clothing`, selector: '.men-products-container' },
    { url: `${apiUrl}/category/electronics`, selector: '.electronic-products-container' },
    { url: `${apiUrl}/category/jewelery`, selector: '.accesories-products-container' }
];

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error de red: ' + response.statusText);
    return response.json();
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card'

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3 class="product-name">${product.title}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-prices">$${product.price.toFixed(2)}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
        </p>
    `;

    return productCard;
}
function renderProducts(containerSelector, products) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    products.forEach(product => container.appendChild(createProductCard(product)));
}


(async function() {
    try {
        for (const endpoint of endpoints) {
            const data = await fetchData(endpoint.url);
            renderProducts(endpoint.selector, data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();

