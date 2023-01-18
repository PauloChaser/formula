import { Body } from './classes/Body';

const menuButton = document.querySelector('.js-burger')
const headerMenu = document.querySelector('.js-header-menu')

export function initHeader() {
    if (!isWindowSizeSmallerThen(1021)) {
        return
    }
    menuButton.addEventListener('click', function () {
        headerMenu.classList.toggle('header__menu--active')
        menuButton.classList.toggle('header__burger--active')
        Body.toggleBody()
    })
}

function isWindowSizeSmallerThen(size = 1021) {
    return document.body.offsetWidth < size;
}