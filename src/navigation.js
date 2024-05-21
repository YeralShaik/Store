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


home.addEventListener('click', onClickHome);
womenCategory.addEventListener('click', () => showSection(womenSection));
menCategory.addEventListener('click', () => showSection(menSection));
electronicCategory.addEventListener('click', () => showSection(electronicSection));
accesoriesCategory.addEventListener('click', () => showSection(accesoriesSection));
menuMobile.addEventListener('click', onClickMenuMobile);
menuMobileIcon.addEventListener('click', toggleMenuMobile)
shopBagIcon.addEventListener('click', toggleShoppingBag)
loginButtonMobile.addEventListener('click', toggleLogin)
createlink.addEventListener('click', toggleCreateAccount)
loginButton.addEventListener('click', toggleLogin)

function onClickHome() {
    backHome();
}

function onClickMenuMobile(event) {
    const classList = event.target.classList;
    if (classList.contains('home')) {
        backHome();
    } else if (classList.contains('women-category')) {
        showSection(womenSection);
    } else if (classList.contains('men-category')) {
        showSection(menSection);
    } else if (classList.contains('electronic-category')) {
        showSection(electronicSection);
    } else if (classList.contains('accessories-category')) {
        showSection(accesoriesSection);
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
