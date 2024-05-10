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

        /*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg>*/
        const cartIcon = document.createElement('svg');
        cartIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        cartIcon.setAttribute('width', '18');  
        cartIcon.setAttribute('height', '16');  
        cartIcon.setAttribute('fill', 'currentColor');  
        cartIcon.setAttribute('class', 'bi bi-cart');  
        cartIcon.setAttribute('viewBox', '0 0 16 16');  
    
        const path = document.createElement('path');
        path.setAttribute(
          'd',
          'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 a 2 2 0 0 0 0-4m7 0a 2 2 0 1 0 0 4 a 2 2 0 0 0 0-4'
        );
    
        cartIcon.appendChild(path);
    
        // Agregar el ícono al elemento de precios
        productPrices.appendChild(cartIcon);

 
        productCard.appendChild(productImg);
        productCard.appendChild(productCategory);
        productCard.appendChild(productName);
        productCard.appendChild(productPrices);

    allproductsContainer.appendChild(productCard)

})
}


