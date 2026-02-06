// HOMEPAGE
// model 
import { menuPage } from './menu.js';
import girlPic from './assets/images/Intersect.png';
// comment 
import rectangle from './assets/images/Rectangle_24.svg';
// lower food
import food1 from './assets/images/image 14.png';
import food2 from './assets/images/image 13.png';

//star
import starFilled from './assets/images/fi-sr-star.svg';
import starUnFilled from './assets/images/fi-br-star.svg';

export function createElem(element, className, parent) {
    const elem = document.createElement(element);
    elem.classList.add(className);
    parent.appendChild(elem);
    return elem;
}

export function homepageLoad(parent) {
    document.title = "Home";
    const content = parent;
    content.replaceChildren();
    const homepage = createElem('div', 'homepage', content);

    // SECTION LEFT
    const section = createElem("section", "left-section", homepage);

    // h1 + span
    const h1 = createElem("h1", null, section);
    h1.textContent = "Dive into Delights Of Delectable ";

    const span = createElem("span", "food", h1);
    span.textContent = "Food";

    // p
    const p = createElem("p", null, section);
    p.textContent = "Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship";

    // buttons container
    const buttons = createElem("div", "buttons", section);

    // Order button
    const orderButton = createElem("button", "orderButton", buttons);
    orderButton.addEventListener("click", () => {
        content.replaceChildren();
        menuPage(content);
    });
    orderButton.textContent = "Order Now";

    // Watch Video link
    const watchVid = createElem("a", "watchVid", buttons);
    watchVid.textContent = "Watch Video";
    watchVid.addEventListener("click", () => {
        window.open("https://youtu.be/Aq5WXmQQooo?si=m37QdadBzHANiTDQ", "_blank");
    });

    // Play button
    const playButton = createElem("div", "playButton", buttons);
    playButton.addEventListener("click", () => {
        window.open("https://youtu.be/Aq5WXmQQooo?si=m37QdadBzHANiTDQ", "_blank");
    });

    // SVG (needs namespace)
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "27");
    svg.setAttribute("viewBox", "0 0 24 27");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M22.5 10.7987C24.5 11.9534 24.5 14.8401 22.5 15.9948L4.49999 26.3871C2.49999 27.5418 -1.34201e-06 26.0984 -1.24107e-06 23.789L-3.32543e-07 3.00442C-2.31596e-07 0.695016 2.5 -0.748354 4.5 0.406346L22.5 10.7987Z");
    path.setAttribute("fill", "#7f1515");

    svg.appendChild(path);
    playButton.appendChild(svg);



    // SECTION RIGHT
    const rightSection = createElem('div', 'right-section', homepage);
    // rightSection.textContent = ''
    const circle = createElem('div', 'circle', rightSection);

    // girl pic
    const model = createElem('img', 'girl', circle);
    model.src = girlPic;

    //circle
    const divComment = createElem('div', 'commentContainer', rightSection);

    const comment = createElem('img', 'comment', divComment);
    comment.src = rectangle;
    const message = createElem('div', 'message', divComment);
    message.textContent = 'Hot spicy Food 🌶';

    //lower Display
    const specialty = createElem('div', 'specialty', rightSection);

    //Create a function to generate the favorite food items
    function createFavorite(parent, imageSrc, name, price, rating) {
        const fav = createElem('div', 'fav', parent);

        const img = createElem('img', 'fav-img', fav);
        img.src = imageSrc;

        const details = createElem('div', 'favMenuDetails', fav);

        const foodName = createElem('div', 'foodName', details);
        foodName.textContent = name;

        const ratings = createElem('div', 'ratings', details);
        for (let i = 1; i <= 5; i++) {
            const star = createElem('img', 'star', ratings);
            star.src = i <= rating ? starFilled : starUnFilled;
        }

        const priceDiv = createElem('div', 'price', details);
        createElem('span', 'dollarSign', priceDiv).textContent = '$';
        createElem('span', 'amount', priceDiv).textContent = price;
    }
    createFavorite(specialty, food1, "Spicy noodles", "23.00", 3);
    createFavorite(specialty, food2, "Spicy noodles", "23.00", 3);
}