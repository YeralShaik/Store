document.addEventListener('DOMContentLoaded', function() {
    const menuMobileIcon = document.querySelector('.bi-list')
    const loginButtonMobile = document.querySelector('.login-button-mobile')
    const loginButton = document.querySelector('.login-button')
    const createSubmitButton = document.querySelector('.button-create')
    const profileIcon = document.querySelector('#profile-icon')
    const createlink = document.querySelector('.create-account-link')
    const menuMobile = document.querySelector('.navbar-mobile')
    const loginContainer = document.querySelector('.sign-account')
    const createAccountContainer = document.querySelector('.create-Account')

    const shopBagIcon = document.querySelector('.bi-bag-fill')
    const shoppingBagContainer = document.querySelector('.shoppingCart-Container')

    const bannerSection = document.querySelector('.banner-section')
    const productSection = document.querySelector('.products-section')
    const electronicBannerSection = document.querySelector('.electronic-banner-section')
    const electronicProductsSection = document.querySelector('.products-electronics-section')

    const home = document.querySelector('.home')
    const womenCategory = document.querySelector('.women-category')
    const menCategory = document.querySelector('.men-category')
    const electronicCategory = document.querySelector('.electronic-category')
    const accesoriesCategory = document.querySelector('.accesories-category')

    const womenSection = document.querySelector('.women-section')
    const menSection = document.querySelector('.men-section')
    const accesoriesSection = document.querySelector('.accesories-section')
    const electronicSection = document.querySelector('.electronic-section')
    const electronicProductContainer = document.querySelector('.all-electronics-products')
    const profile = document.querySelector('.profile-section')

    if (home) home.addEventListener('click', onClickHome)
    if (womenCategory) womenCategory.addEventListener('click', () => showSection(womenSection))
    if (menCategory) menCategory.addEventListener('click', () => showSection(menSection))
    if (electronicCategory) electronicCategory.addEventListener('click', () => showSection(electronicSection))
    if (accesoriesCategory) accesoriesCategory.addEventListener('click', () => showSection(accesoriesSection))
    if (createSubmitButton) createSubmitButton.addEventListener('click', () => showProfile(profile))

    if (menuMobile) menuMobile.addEventListener('click', onClickMenuMobile)
    if (menuMobileIcon) menuMobileIcon.addEventListener('click', toggleMenuMobile)
    if (shopBagIcon) shopBagIcon.addEventListener('click', toggleShoppingBag)
    if (loginButtonMobile) loginButtonMobile.addEventListener('click', toggleLogin)
    if (createlink) createlink.addEventListener('click', toggleCreateAccount)
    if (loginButton) loginButton.addEventListener('click', toggleLogin)
    if (profileIcon) profileIcon.addEventListener('click', () => showProfile(profile))

    function closeProfile() {
        hideAllSections()
        bannerSection.style.display = 'flex'
        productSection.style.display = 'flex'
        electronicBannerSection.style.display = 'flex'
        electronicProductsSection.style.display = 'flex'
        profileIcon.classList.remove('hide')
    }

    function onClickHome() {
        backHome()
    }

    function onClickMenuMobile(event) {
        const classList = event.target.classList
        if (classList.contains('home')) {
            backHome()
        } else if (classList.contains('women-category')) {
            showSection(womenSection)
        } else if (classList.contains('men-category')) {
            showSection(menSection)
        } else if (classList.contains('electronic-category')) {
            showSection(electronicSection)
        } else if (classList.contains('accesories-category')) {
            showSection(accesoriesSection)
        } else if (classList.contains('profile')) {
            showProfile(profile)
        }
    }

    function hideAllSections() {
        bannerSection.style.display = 'none'
        productSection.style.display = 'none'
        electronicBannerSection.style.display = 'none'
        electronicProductsSection.style.display = 'none'
        womenSection.classList.add('hide')
        menSection.classList.add('hide')
        accesoriesSection.classList.add('hide')
        electronicSection.classList.add('hide')
        profile.classList.add('hide')
    }

    function backHome() {
        hideAllSections()
        bannerSection.style.display = 'flex'
        productSection.style.display = 'flex'
        electronicBannerSection.style.display = 'flex'
        electronicProductsSection.style.display = 'flex'
    }

    function showSection(section) {
        hideAllSections()
        section.classList.remove('hide')
    }

    function toggleMenuMobile() {
        menuMobile.classList.toggle('inactive')
        shoppingBagContainer.classList.add('inactive')
    }

    function toggleLogin() {
        loginContainer.classList.toggle('inactive')
        createAccountContainer.classList.add('inactive')
        shoppingBagContainer.classList.add('inactive')
        menuMobile.classList.add('inactive')
    }

    function toggleCreateAccount() {
        createAccountContainer.classList.toggle('inactive')
        createSubmitButton.classList.remove('hide')
        loginContainer.classList.add('inactive')
        shoppingBagContainer.classList.add('inactive')
        menuMobile.classList.add('inactive')
    }

    function toggleShoppingBag() {
        shoppingBagContainer.classList.toggle('inactive')
        loginContainer.classList.add('inactive')
        menuMobile.classList.add('inactive')
        createAccountContainer.classList.add('inactive')
    }

    function showProfile(profile) {
        hideAllSections()
        profile.classList.remove('hide')
        profileIcon.classList.remove('hide')
        createAccountContainer.classList.add('inactive')
        loginButton.style.display = 'none'
    }

    document.getElementById('formCreateAccount').addEventListener('submit', function(event) {
        event.preventDefault()

        document.getElementById('errorName').textContent = ''
        document.getElementById('errorEmail').textContent = ''
        document.getElementById('errorPassword').textContent = ''

        const inputName = document.querySelector('.name').value
        const inputEmail = document.querySelector('.email').value
        const password = document.querySelector('.password').value
        let isValid = true

        if (inputName.trim() === '') {
            document.getElementById('errorName').textContent = 'The name is required'
            isValid = false
        }  
        if (inputEmail.trim() === '') {
            document.getElementById('errorEmail').textContent = 'The email is required'
            isValid = false 
        }
        else if (!isEmailValid(inputEmail)) {
            document.getElementById('errorEmail').textContent = 'The email is invalid'
            isValid = false
        }
        if (password.trim() === '') {
            document.getElementById('errorPassword').textContent = 'The password is required'
            isValid = false
        }

        if (isValid) {
            alert(`'Bienvenido' ${inputName}`)
            showUserProfile(inputName, inputEmail)
        }
    })

    function isEmailValid(inputEmail) {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return valid.test(inputEmail)
    }

    function showUserProfile(name, email) {
        if (profile) {
            profile.innerHTML = `
                <section class="profile-container">
                    <h1>My Profile</h1>
                    <div class="profile-information">
                        <i class="bi bi-person-circle"></i>   
                        <p class="greet">   Hola, ${name}</p>
                        <p class="email-profile">Email: ${email}</p>
                    </div>
                    <div class="purchases-container">
                        <p>My Purchases</p>
                        <div class="profile-information"></div>
                    </div>
                    <button class="logOut-button">Log Out</button>
                </section>
            `

            // Add event listener to the dynamically created log out button
            const newLogOutButton = profile.querySelector('.logOut-button')
            if (newLogOutButton) {
                newLogOutButton.addEventListener('click', () => closeProfile())
            }
        } else {
            console.error('Elemento con la clase "profile-container-aside" no encontrado')
        }
    }
})
