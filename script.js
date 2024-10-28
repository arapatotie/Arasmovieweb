const sideBar = document.querySelector('.sidebar');
const MenuBtn = document.querySelector('.menu');
const rightButton = document.querySelector('#right-button');
const searchBtn = document.querySelector('#search-btn');
const leftButton = document.querySelector('#left-button');
const MobileMenu = document.querySelector('.mobile-menu');
const CloseBtn = document.querySelector('.close');
const search = document.querySelector('#search');
const cardSection = document.querySelector('#cardSection');

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

let searchFunction = () => {
    let searchTxt = search.value.toLowerCase();
    let searchTxtSegments = searchTxt.split(" ");

    let cards = cardSection.querySelectorAll('.card');
    for (const card of cards) {
        card.style.display = 'block';

        let titleTxt = card.querySelector('.title').textContent;
        titleTxt = titleTxt.toLowerCase();
        titleSegments = titleTxt.split(" ");

        let missed = false;
        for (const searchSegment of searchTxtSegments) {
            let foundSegment = titleSegments.find(title => title.includes(searchSegment));
            if (!foundSegment) {
                missed = true;
                break;
            }
        }

        if (missed) {
            card.style.display = 'none';
        }
    }
};

search.addEventListener('keyup', searchFunction);
search.addEventListener('keydown', searchFunction);