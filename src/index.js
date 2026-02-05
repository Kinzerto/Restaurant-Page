import "./styles/fonts.scss"
import "./styles/styles.scss";
import "./styles/homepage.scss";
import { menu } from './menu.js';
import girlPic from './assets/images/intersect.png'
import rectangle from './assets/images/Rectangle_24.svg'
import food1 from './assets/images/image 14.png'
import food2 from './assets/images/image 13.png'


const content = document.getElementById('content');
const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {

    if (!event.target.closest('button')) return;
    const currentClick = event.target.textContent;
    switch (currentClick) {
        case 'Home':
            console.log('Home');
            break;
        case 'Menu':
            content.textContent = menu
        default:
            break;
    }
});

function createElem(element, className, parent) {
    const elem = document.createElement(element);
    elem.classList.add(className);
    parent.appendChild(elem);
    return elem;
}
function createImage(element, className, parent) {
    const elem = document.createElement(element);
    elem.classList.add(className);
    parent.appendChild(elem);
    return elem;
}

const rightSection = document.querySelector('.right-section');

const circle = document.querySelector('.right-section .circle');


const model = createElem('img', 'girl', circle);
model.src = girlPic;

const divComment = createElem('div', 'commentContainer', circle);

const comment = createElem('img', 'comment', divComment);
comment.src = rectangle;

const message = createElem('div', 'message', divComment);
message.textContent = 'Hot spicy Food 🌶';


const specialty = createElem('div', 'specialty', rightSection);

const fav1 = createElem('div', 'fav1', specialty);
const fav2 = createElem('div', 'fav2', specialty);

const fav1Menu = createElem('img', 'fav1-img', fav1)
fav1Menu.src = food1;

const fav2Menu = createElem('img', 'fav2-img', fav2)
fav2Menu.src = food2;

// fav1.appendChild(fav1Menu);