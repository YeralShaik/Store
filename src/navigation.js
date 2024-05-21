
    const logoHome = document.querySelector('.bi-bag-heart-fill')
    const menuMobileIcon = document.querySelector('.bi-list')
    const menuMobile = document.querySelector('.navbar-mobile')
    const loginButtonMobile = document.querySelector('.login-button-mobile')
    const loginContainer = document.querySelector('.sign-account')
    const loginButton = document.querySelector('.login-button')
    const createlink = document.querySelector('.create-account-link')
    const createAccountContainer = document.querySelector('.create-Account')
    const shopBagIcon = document.querySelector('.bi-bag-fill')
    const shoppingBagContainer = document.querySelector('.shoppingCart-Container')

    const bannerSection = document.querySelector('.banner-section')
    const productSection = document.querySelector('.products-section')
     
    const womenSectionBtn = document.querySelector('.women-category')
    const menSectionBtn = document.querySelector('.women-category')

    const electronicSectionBtn = document.querySelector('.electronic-category')
    const accesoriesSectionBtn = document.querySelector('.accesories-category')

    const womenSection = document.querySelector('.women-section')
    const menSection = document.querySelector('.women-section')
    const electronicCategory = document.querySelector('.men-section')
    const electronicSection = document.querySelector('.electronic-banner-section')
    const accesoriesSection = document.querySelector('.accesories-section')
   
    
    womenSectionBtn.addEventListener('click', showwomenSection) 
        function showwomenSection(){
        womenSection.classList.remove('hide')
        bannerSection.style.display = 'none';
        productSection.style.display = 'none';
        electronicSection.style.display = 'none'

}
    logoHome.addEventListener('click', backHome)
        function backHome(){
            womenSection.classList.add('hide')
            bannerSection.style.display = 'flex';
            productSection.style.display = 'flex';
            electronicSection.style.display = 'flex'
        }



    menuMobileIcon.addEventListener('click', toggleMenuMobile)
            function toggleMenuMobile() {
                menuMobile.classList.toggle('inactive')
                shoppingBagContainer.classList.add('inactive')
        }
        
        loginButtonMobile.addEventListener('click', toggleLogin)
            function toggleLogin(){
                loginContainer.classList.toggle('inactive')
                createAccountContainer.classList.add('inactive')
                shoppingBagContainer.classList.add('inactive')
                menuMobile.classList.add('inactive')

        }

        loginButton.addEventListener('click', toggleLogin)
            function toggleLogin(){
                loginContainer.classList.toggle('inactive')
                createAccountContainer.classList.add('inactive')
                shoppingBagContainer.classList.add('inactive')
                menuMobile.classList.add('inactive')
            }

   
        createlink.addEventListener('click', toggleCreateAccount)
            function toggleCreateAccount(){
                createAccountContainer.classList.toggle('inactive')
                loginContainer.classList.add('inactive')
                shoppingBagContainer.classList.add('inactive')
                menuMobile.classList.add('inactive')
            }



            shopBagIcon.addEventListener('click', toggleShoppingBag)
            function toggleShoppingBag(){
                shoppingBagContainer.classList.toggle('inactive')
                loginButtonMobile.classList.add('inactive')
                loginContainer.classList.add('inactive')
                menuMobile.classList.add('inactive')
                createAccountContainer.classList.add('inactive')
            }



