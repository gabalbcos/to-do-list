const dropMenu = document.querySelector('.drop-menu');
const listMenu = document.querySelector('.list-menu');

dropMenu.addEventListener('click', hideMenu);

function hideMenu() {
    listMenu.classList.toggle('hidden');
}