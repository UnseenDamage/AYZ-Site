const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.header-nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})