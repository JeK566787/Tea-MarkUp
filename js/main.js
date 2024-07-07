const menuBtn = document.querySelector('.menu__burger');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const backDrop = document.querySelector('.backdrop--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open')
    backDrop.classList.toggle('menu--open')
})

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open')
    backDrop.classList.remove('menu--open')
})