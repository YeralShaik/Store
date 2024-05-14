//llamado al API
fetch('https://fakestoreapi.com/products?limit=3')
            .then(response => {
                if(!response.ok) {
                    throw new Error('error de red:' + response.statusText)
                }
                return response.json()
            })
            .then((data) => {
              getAllProduct(data)
            })
            .catch((error) => {
              console.error('Error:', error)
            })

//Obener solo los productos electronicos
fetch('https://fakestoreapi.com/products/category/electronics?limit=3')
            .then(response => {
                if(!response.ok) {
                    throw new Error('error de red:' + response.statusText)
                }
                return response.json()
            })
            .then((data) => {
              getElectronicsProducts(data)
            })
            .catch((error) => {
              console.error('Error:', error)
            })
//funcion para obtener todos los productos
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

// Agregar el ícono para agregar al cart
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

//Funcion para obtener los productos electronicos
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

    // Agregar el ícono al elemento de precios
    productPrices.appendChild(cartIcon)


    productCard.appendChild(productImg)
    productCard.appendChild(productName)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrices)

    electronicsProductsContainer.appendChild(productCard)
})

}

const menuMobile = document.querySelector('.navbar-mobile')
const menuMobileIcon = document.querySelector('.bi-list')

    menuMobileIcon.addEventListener('click', toggleMenuMobile)
        function toggleMenuMobile() {
            menuMobile.classList.toggle('inactive')
            console.log('funciona')
    }


const shopBag = document.querySelector('.bi-bag-fill')

const shoppingBagContainer = document.querySelector('.shoppingCart-Container')

    shopBag.addEventListener('click', toggleshoppingBag)
        function toggleshoppingBag() {
            shoppingBagContainer.classList.toggle('inactive')

            console.log('click')
        }