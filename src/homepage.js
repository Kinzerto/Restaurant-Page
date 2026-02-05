// HOMEPAGE
// model 
import girlPic from './assets/images/Intersect.png';
// comment 
import rectangle from './assets/images/Rectangle_24.svg';
// lower food
import food1 from './assets/images/image 14.png';
import food2 from './assets/images/image 13.png';

//star
import starFilled from './assets/images/fi-sr-star.svg';
import starUnFilled from './assets/images/fi-br-star.svg';

export function homepageLoad() {
    const homepage = createElem('div', 'homepage', content);


    function createElem(element, className, parent) {
        const elem = document.createElement(element);
        elem.classList.add(className);
        parent.appendChild(elem);
        return elem;
    }
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
    orderButton.textContent = "Order Now";

    // Watch Video link
    const watchVid = createElem("a", "watchVid", buttons);
    watchVid.href = "#";
    watchVid.textContent = "Watch Video";

    // Play button
    const playButton = createElem("div", "playButton", buttons);

    // SVG (needs namespace)
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "27");
    svg.setAttribute("viewBox", "0 0 24 27");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M22.5 10.7987C24.5 11.9534 24.5 14.8401 22.5 15.9948L4.49999 26.3871C2.49999 27.5418 -1.34201e-06 26.0984 -1.24107e-06 23.789L-3.32543e-07 3.00442C-2.31596e-07 0.695016 2.5 -0.748354 4.5 0.406346L22.5 10.7987Z");
    path.setAttribute("fill", "#1E1E1E");

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
    const dollar1 = createElem('span', 'dollarSign', price1);
    dollar1.textContent = '$';
    const amount1 = createElem('span', 'amount', price1);
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
    const dollar2 = createElem('span', 'dollarSign', price2);
    dollar2.textContent = '$';
    const amount2 = createElem('span', 'amount', price2);
    amount2.textContent = '23.00';

    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Width: ${width}px, Height: ${height}px`);

}