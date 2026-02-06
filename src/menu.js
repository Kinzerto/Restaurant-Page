import { createElem } from "./homepage.js";

export function menuPage(){
    const menuPage = createElem('div', 'menuPage', content);
    document.title = "Menu";

    const costumerFav = createElem('div', 'customerFav', menuPage);

    costumerFav.textContent = "Customer Favorites";
}
