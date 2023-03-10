import { Body } from './classes/Body';

export function initModals() {
    const openModalLinks = document.querySelectorAll('.js-open-modal');
    const closeModalsLinks = document.querySelectorAll('.js-close-modals');
    const modalsContainer = document.querySelector('.js-modals')

    if (!modalsContainer) {
        return
    }

    closeModalsLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeModals();
        })
    });

    openModalLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const linkElement = e.currentTarget;
            const modalId = (linkElement.dataset.modal || linkElement.getAttribute('href')).split('#').pop();

            openModal(modalId);
        })
    });

    modalsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('js-modals')) {
            closeModals();
        }
    })
}

export function openModal(modalId) {
    Body.fixBody();

    const modalsContainer = document.querySelector('.js-modals')
    const modal = document.getElementById(modalId);

    modal.classList.add('modals__item--active')
    modalsContainer.classList.add('modals--active')
}

export function closeModals () {
    Body.releaseBody();

    const modalsContainer = document.querySelector('.js-modals')

    modalsContainer.classList.remove('modals--active');
    [...modalsContainer.children].forEach((modal) => {
        modal.classList.remove('modals__item--active')
    })
}


