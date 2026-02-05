import "./styles/fonts.scss"
import "./styles/styles.scss";
import "./styles/homepage.scss";
import { menu } from './menu.js';

// HOMEPAGE
// model 
import girlPic from './assets/images/intersect.png';
// comment 
import rectangle from './assets/images/Rectangle_24.svg';
// lower food
import food1 from './assets/images/image 14.png';
import food2 from './assets/images/image 13.png';

//star
import starFilled from './assets/images/fi-sr-star.svg';
import starUnFilled from './assets/images/fi-br-star.svg';


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
// rightSection.textContent = ''
const circle = document.querySelector('.right-section .circle');

// girl pic
const model = createElem('img', 'girl', circle);
model.src = girlPic;

//circle
const divComment = createElem('div', 'commentContainer', circle);

const comment = createElem('img', 'comment', divComment);
comment.src = rectangle;
const message = createElem('div', 'message', divComment);
message.textContent = 'Hot spicy Food 🌶';

//lower Display
const specialty = createElem('div', 'specialty', circle);

const fav1 = createElem('div', 'fav1', specialty);
const fav1Menu = createElem('img', 'fav1-img', fav1)
fav1Menu.src = food1;

//Fav1 Container
const fav1MenuDetails = createElem('div', 'fav1MenuDetails', fav1);
// Its Content
const foodName1 = createElem('div', 'foodName', fav1MenuDetails);
foodName1.textContent = 'Spicy noodles';
const ratings1 = createElem('div', 'ratings', fav1MenuDetails);
// star rating
for (let i = 1; i <= 5; i++) {
    const star = createElem('img', 'star', ratings1);
    if (i <= 3) {
        star.src = starFilled;
    } else {
        star.src = starUnFilled;
    }
}
const price1 = createElem('div', 'price', fav1MenuDetails);
const dollar1 = createElem('span','dollarSign',price1);
dollar1.textContent = '$';
const amount1 = createElem('span','amount',price1);
amount1.textContent = '23.00';

const fav2 = createElem('div', 'fav2', specialty);
// FAV2 CONTAINER
const fav2Menu = createElem('img', 'fav2-img', fav2)
fav2Menu.src = food2;

//Fav2 Container
const fav2MenuDetails = createElem('div', 'fav2MenuDetails', fav2);
// Its Content
const foodName2 = createElem('div', 'foodName', fav2MenuDetails);
foodName2.textContent = 'Spicy noodles';
const ratings2 = createElem('div', 'ratings', fav2MenuDetails);
// star rating
for (let i = 1; i <= 5; i++) {
    const star = createElem('img', 'star', ratings2);
    if (i <= 3) {
        star.src = starFilled;
    } else {
        star.src = starUnFilled;
    }
}
const price2 = createElem('div', 'price', fav2MenuDetails);
const dollar2 = createElem('span','dollarSign',price2);
dollar2.textContent = '$';
const amount2 = createElem('span','amount',price2);
amount2.textContent = '23.00';

const width = window.innerWidth;
const height = window.innerHeight;

console.log(`Width: ${width}px, Height: ${height}px`);



//FOOD 2
