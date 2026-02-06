import "./styles/fonts.scss"
import "./styles/styles.scss";
import "./styles/homepage.scss";
import "./styles/menu.scss";
import { menuPage } from './menu.js';

//homepage
import { homepageLoad } from './homepage.js';

const nav = document.querySelector('nav');
const content = document.getElementById('content');
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    content.replaceChildren();
    homepageLoad(content);
});
nav.addEventListener('click', (event) => {
    
    if (!event.target.closest('button')) return;
       
    const currentClick = event.target.closest('button').classList[0];
    console.log(currentClick);
    content.replaceChildren();
    switch (currentClick) {
        case 'home':
            homepageLoad(content);
            break;
        case 'menu':
            menuPage();
        default:
            break;
    }
});


menuPage();

