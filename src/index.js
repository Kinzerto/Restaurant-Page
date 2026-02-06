import "./styles/fonts.scss"
import "./styles/styles.scss";
import "./styles/homepage.scss";
import "./styles/menu.scss";
import "./styles/maintenance.scss";
import "./styles/services.scss";
import { maintenancePage } from './maintenance.js';
import { menuPage } from './menu.js';
import {servicesPage} from './services.js';

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
    switch (currentClick) {
        case 'home':
            homepageLoad(content);
            break;
        case 'menu':
            menuPage(content);
            break;
        case 'services':
            servicesPage(content);
            break;
        default:
            break;
    }
});

const bagIcon = document.querySelector('.bagIcon');
bagIcon.addEventListener('click', () => {
    content.replaceChildren();
    maintenancePage(content);
});

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
    content.replaceChildren();
    maintenancePage(content);
});



homepageLoad(content);

