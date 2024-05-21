const apiUrl = 'https://fakestoreapi.com/products';

async function fetchData(url, callback) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error de red: ' + response.statusText);
        }
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData(`${apiUrl}?limit=3`, getAllProduct);
fetchData(`${apiUrl}/category/electronics?limit=3`, getElectronicsProducts)
fetchData(`${apiUrl}/category/women's clothing`, getWomenProducts)
fetchData(`${apiUrl}/category/men's clothing`, getMenProducts)
fetchData(`${apiUrl}/category/electronics`, getAllElectronicsProducts)
fetchData(`${apiUrl}/category/jewelery`, getAccesoriesProducts);
            
function getAllProduct(products) {
    const allproductsContainer = document.querySelector('.allproducts-section')
        allproductsContainer.innerHTML = ''


products.forEach((product) => {
        
    const productCard = document.createElement('div')
        productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('h3')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;

// icono para agregar al cart
        const cartIcon = document.createElement('svg')
        cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        cartIcon.setAttribute('width', '18')
        cartIcon.setAttribute('height', '16') 
        cartIcon.setAttribute('fill', 'currentColor')
        cartIcon.setAttribute('class', 'bi bi-bag-plus')
        cartIcon.setAttribute('viewBox', '0 0 16 16')
    
        const path = document.createElement('path')
        path.setAttribute(
          'd',
          'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
        );
    
        cartIcon.appendChild(path)
    
        // Agregar el ícono al elemento de precios
        productPrices.appendChild(cartIcon)

 
        productCard.appendChild(productImg)
        productCard.appendChild(productName)
        productCard.appendChild(productCategory)
        productCard.appendChild(productPrices)

    allproductsContainer.appendChild(productCard)

})
} 

function getElectronicsProducts(products) {
    const electronicsProductsContainer = document.querySelector('.allelectronicproducts-section')
       electronicsProductsContainer.innerHTML = ''

products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('h3')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;


    const cartIcon = document.createElement('svg')
    cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    cartIcon.setAttribute('width', '18')
    cartIcon.setAttribute('height', '16') 
    cartIcon.setAttribute('fill', 'currentColor')
    cartIcon.setAttribute('class', 'bi bi-bag-plus')
    cartIcon.setAttribute('viewBox', '0 0 16 16')

    const path = document.createElement('path')
    path.setAttribute(
      'd',
      'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
    );

    cartIcon.appendChild(path)


    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)

    electronicsProductsContainer.appendChild(productCard)
})

}
function getWomenProducts(products) {
    const womenProductsSection = document.querySelector('.women-products-container')
    
    womenProductsSection.innerHTML = ''
    const titleSection = document.createElement('h1');
    titleSection.className = 'title-section'
    titleSection.textContent = 'Women';
    womenProductsSection.appendChild(titleSection);


    products.forEach((product) => {

    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('p')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;


    const cartIcon = document.createElement('svg')
    cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    cartIcon.setAttribute('width', '18')
    cartIcon.setAttribute('height', '16') 
    cartIcon.setAttribute('fill', 'currentColor')
    cartIcon.setAttribute('class', 'bi bi-bag-plus')
    cartIcon.setAttribute('viewBox', '0 0 16 16')

    const path = document.createElement('path')
    path.setAttribute(
      'd',
      'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
    );

    cartIcon.appendChild(path)


    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)


       womenProductsSection.appendChild(productCard)
    })

}
function getMenProducts(products) {
    const menProductsSection = document.querySelector('.men-products-container')
    
    menProductsSection.innerHTML = ''
    const titleSection = document.createElement('h1');
    titleSection.className = 'title-section'
    titleSection.textContent = 'Women';
    menProductsSection.appendChild(titleSection);


    products.forEach((product) => {

    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('p')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;


    const cartIcon = document.createElement('svg')
    cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    cartIcon.setAttribute('width', '18')
    cartIcon.setAttribute('height', '16') 
    cartIcon.setAttribute('fill', 'currentColor')
    cartIcon.setAttribute('class', 'bi bi-bag-plus')
    cartIcon.setAttribute('viewBox', '0 0 16 16')

    const path = document.createElement('path')
    path.setAttribute(
      'd',
      'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
    );

    cartIcon.appendChild(path)


    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)


       menProductsSection.appendChild(productCard)
    })

}
function getAllElectronicsProducts(products) {
    const electronicsProductsSection = document.querySelector('.electronic-products-container')
    
    electronicsProductsSection.innerHTML = ''
    const titleSection = document.createElement('h1');
    titleSection.className = 'title-section'
    titleSection.textContent = 'Electronics';
    electronicsProductsSection.appendChild(titleSection);


    products.forEach((product) => {
    

    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('p')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;


    const cartIcon = document.createElement('svg')
    cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    cartIcon.setAttribute('width', '18')
    cartIcon.setAttribute('height', '16') 
    cartIcon.setAttribute('fill', 'currentColor')
    cartIcon.setAttribute('class', 'bi bi-bag-plus')
    cartIcon.setAttribute('viewBox', '0 0 16 16')

    const path = document.createElement('path')
    path.setAttribute(
      'd',
      'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
    );

    cartIcon.appendChild(path)


    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)


       electronicsProductsSection.appendChild(productCard)
    })

}
function getAccesoriesProducts(products) {
    const accesoriesProductsSection = document.querySelector('.accesories-products-container')
    
    accesoriesProductsSection.innerHTML = ''
    const titleSection = document.createElement('h1');
    titleSection.className = 'title-section'
    titleSection.textContent = 'Women';
    accesoriesProductsSection.appendChild(titleSection);


    products.forEach((product) => {

    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImg = document.createElement('img')
        productImg.src = product.image   
        productImg.alt = product.title

    const productCategory = document.createElement('p')
        productCategory.className = 'product-category'
        productCategory.innerText = product.category

    const productName = document.createElement('p')
        productName.className ='product-name'
        productName.innerText = product.title

    const productPrices = document.createElement('p')
        productPrices.className = 'product-prices'
        productPrices.innerText = `$${product.price.toFixed(2)}`;


    const cartIcon = document.createElement('svg')
    cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    cartIcon.setAttribute('width', '18')
    cartIcon.setAttribute('height', '16') 
    cartIcon.setAttribute('fill', 'currentColor')
    cartIcon.setAttribute('class', 'bi bi-bag-plus')
    cartIcon.setAttribute('viewBox', '0 0 16 16')

    const path = document.createElement('path')
    path.setAttribute(
      'd',
      'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'
    );

    cartIcon.appendChild(path)


    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)


    accesoriesProductsSection.appendChild(productCard)
    })

}




