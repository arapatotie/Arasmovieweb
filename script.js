const sideBar = document.querySelector('.sidebar');
const MenuBtn = document.querySelector('.menu');
const rightButton = document.querySelector('#right-button');
const leftButton = document.querySelector('#left-button');
const MobileMenu = document.querySelector('.mobile-menu');
const CloseBtn = document.querySelector('.close');

MenuBtn.addEventListener("click", () => {
    sideBar.classList.toggle('close');
});

rightButton.addEventListener('click', function(event) {
    const content = document.querySelector('.cards');
    content.scrollLeft += 300;
    event.preventDefault();
});

leftButton.addEventListener('click', function(event) {
    const content = document.querySelector('.cards');
    content.scrollLeft -= 300;
    event.preventDefault();
});

MobileMenu.addEventListener('click', () => {
    sideBar.classList.add('open');
});

CloseBtn.addEventListener('click', () => {
    sideBar.classList.remove('open');
});
