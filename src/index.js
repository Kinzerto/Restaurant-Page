import "./styles/fonts.scss";
import "./styles/styles.scss";
import { homepageLoad } from "./homepage.js";

const nav = document.querySelector('nav');
const content = document.getElementById('content');
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    content.replaceChildren();
    import('./homepage.js').then((module) => {
        module.homepageLoad(content);
    });
});
nav.addEventListener('click', (event) => {

    if (!event.target.closest('button')) return;

    const currentClick = event.target.closest('button').classList[0];
    console.log(currentClick);
    switch (currentClick) {
        case 'home':
            import('./homepage.js').then((module) => {
                module.homepageLoad(content);
            });
            break;
        case 'menu':
            // great way to import modules only when needed
            import('./menu.js').then((module) => {
                module.menuPage(content);
            });
            break;
        case 'services':
            import('./services.js').then((module) => {
                module.servicesPage(content);
            });
            break;
        default:
            break;
    }
});

const bagIcon = document.querySelector('.bagIcon');
bagIcon.addEventListener('click', () => {
    content.replaceChildren();
    import('./maintenance.js').then((module) => {
        module.maintenancePage(content);
    });
});

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
    content.replaceChildren();
    import('./maintenance.js').then((module) => {
        module.maintenancePage(content);
    });
});



homepageLoad(content);
