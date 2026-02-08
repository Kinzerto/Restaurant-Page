import "./styles/menu.scss";
import fattoushSalad from './assets/images/Fattoush-salad.png';
import { createElem } from "./utils.js";
import burgerPic from './assets/images/burger.png';
import breakfastPic from './assets/images/breakfast.png';

import dessertPic from './assets/images/dessert.png';
import juicePic from './assets/images/juice.png';

import vegetableSalad from './assets/images/vegetable-salad.png';

import lessThan from './assets/images/lessThan.svg';

export function menuPage(content) {
    content.replaceChildren();
    const menuPage = createElem('div', 'menuPage', content);
    document.title = "Menu";

    // customer favorites text
    const costumerFav = createElem('div', 'customerFav', menuPage);

    costumerFav.textContent = "Customer Favorites";

    // Popular Categories
    const popularCategories = createElem('div', 'popularCategories', menuPage);
    popularCategories.textContent = "Popular Categories";

    // Menu Items container
    const menuItemsContainer = createElem('div', 'menuItemsContainer', menuPage);

    function createDish({ parent, pictureSrc, title, total }) {
        // Main container
        const mainDish = createElem('div', 'mainDish', parent);

        // Picture container
        const pictureContainer = createElem('div', 'pictureContainer', mainDish);

        // Dish image
        const dishPicture = createElem('img', 'dishPicture', pictureContainer);
        dishPicture.src = pictureSrc;

        // Dish title
        const dishInfo = createElem('div', 'dishInfo', mainDish);
        dishInfo.textContent = title;

        // Total dishes
        const totalDishes = createElem('div', 'totalDishes', mainDish);
        totalDishes.textContent = `(${total} Dishes)`;

        // Return main container in case you want to manipulate it later
        return mainDish;
    }
    createDish({
        parent: menuItemsContainer,
        pictureSrc: burgerPic,
        title: "Burgers",
        total: 86
    });
    createDish({
        parent: menuItemsContainer,
        pictureSrc: breakfastPic,
        title: "Burgers",
        total: 12
    });
    createDish({
        parent: menuItemsContainer,
        pictureSrc: dessertPic,
        title: "Desserts",
        total: 48
    });
    createDish({
        parent: menuItemsContainer,
        pictureSrc: juicePic,
        title: "Browse All",
        total: 255
    });

    //special dish text
    createElem('div', 'specialDish', menuPage).textContent = "Special Dish";

    //stand out text and button container
    const standOutAndButton = createElem('div', 'standOutAndButton', menuPage);

    createElem('div', 'standOutDish', standOutAndButton).textContent = "Standout Dishes From Our Menu";

    const containerForButton = createElem('div', 'containerForButton', standOutAndButton);

    const leftButton = createElem('div', 'leftButton', containerForButton);

    createElem('img', 'leftArrow', leftButton).src = lessThan;

    const rightButton = createElem('div', 'rightButton', containerForButton);

    createElem('img', 'rightArrow', rightButton).src = lessThan;




    //container of all the info about the stand out dish
    const standOutDishContainer = createElem('div', 'standOutDishContainer', menuPage)

    // container of a single stand out dish info (picture, name, description)
    function createStandFood(parent, { imageSrc, name, description, price }) {
        // container of a single stand out dish info
        const standFood = createElem('div', 'standFood', parent);

        // container of the heart icon
        const heartIconContainer = createElem('div', 'heartIconContainer', standFood);
        const heartIcon = createElem('span', 'heartIcon', heartIconContainer);
        heartIcon.textContent = '❤︎⁠';

        // picture
        const standOutDishInfoPic = createElem('img', 'standOutDishPic', standFood);
        standOutDishInfoPic.src = imageSrc;
        standOutDishInfoPic.alt = name;

        // FOOD NAME
        const foodName = createElem('div', 'foodName', standFood);
        foodName.textContent = name;

        // DESCRIPTION
        const standOutDishInfoDesc = createElem('div', 'standOutDishInfoDesc', standFood);
        standOutDishInfoDesc.textContent = description;

        // PRICE
        const standOutDishInfoPrice = createElem('div', 'standOutDishInfoPrice', standFood);
        createElem('span', 'dollarSign', standOutDishInfoPrice).textContent = '$';
        createElem('span', 'amount', standOutDishInfoPrice).textContent = price;
    }
    createStandFood(standOutDishContainer, {
        imageSrc: fattoushSalad,
        name: "Fattoush Salad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui.",
        price: "12.99"
    });

    createStandFood(standOutDishContainer, {
        imageSrc: fattoushSalad,
        name: "Fattoush Salad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui.",
        price: "12.99"
    });
    createStandFood(standOutDishContainer, {
        imageSrc: fattoushSalad,
        name: "Fattoush Salad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui.",
        price: "12.99"
    });

}

