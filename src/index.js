import "./styles/fonts.scss"
import "./styles/styles.scss";
import "./styles/homepage.scss";
import { menu } from './menu.js';

//homepage
import { homepageLoad } from './homepage.js';

const nav = document.querySelector('nav');
const content = document.getElementById('content');

nav.addEventListener('click', (event) => {

    if (!event.target.closest('button')) return;

    const currentClick = event.target.textContent;
    content.replaceChildren();
    switch (currentClick) {
        case 'Home':
            homepageLoad(content);
            break;
        case 'Menu':
            content.textContent = menu
        default:
            break;
    }
});


homepageLoad(content);

