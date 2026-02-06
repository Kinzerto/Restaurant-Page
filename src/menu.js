import { createElem } from "./homepage.js";
import burgerPic from './assets/images/burger.png';
import breakfastPic from './assets/images/breakfast.png';

import dessertPic from './assets/images/dessert.png';
import juicePic from './assets/images/juice.png';

export function menuPage() {
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

}
