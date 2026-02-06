import { createElem } from './homepage.js';
import cateringPic from './assets/images/fi-rr-salad.svg';

export function servicesPage(content) {
    content.replaceChildren();
    document.title = "Services";

    //container
    const services = createElem('div', 'services', content);

    // left sections
    const leftSection = createElem('section', 'leftSection', services);

    //story and services container
    const storyAndServices = createElem('div', 'storyAndServices', leftSection);

    storyAndServices.textContent = "Our Story & Services";

    //JOURNEY
    const journey = createElem('div', 'journey', leftSection);
    journey.textContent = 'Our Culinary Journey And Services';

    //journey text
    const journeyText = createElem('p', 'journeyText', leftSection);

    journeyText.textContent = "Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.";

    //explore button
    const exploreButton = createElem('button', 'servicesButton', leftSection);
    exploreButton.textContent = "Explore";

    //right section
    const rightSection = createElem('section', 'rightSection', services);

    function createServiceCard(parent, imgSrc, title, description) {
        // our services container
        const ourServices = createElem('div', 'ourServices', parent);

        // image
        const pic = createElem('img', 'pic', ourServices);
        pic.src = imgSrc;

        // service title
        const whatService = createElem('div', 'whatService', ourServices);
        whatService.textContent = title;

        // service description
        const serviceDesc = createElem('p', 'serviceDesc', ourServices);
        serviceDesc.textContent = description;

        return ourServices;
    }
    createServiceCard(
        rightSection,
        cateringPic,
        "Catering",
        "Delight your guests with our flavors and presentation"
    );
     createServiceCard(
        rightSection,
        cateringPic,
        "Catering",
        "Delight your guests with our flavors and presentation"
    );
     createServiceCard(
        rightSection,
        cateringPic,
        "Catering",
        "Delight your guests with our flavors and presentation"
    );
     createServiceCard(
        rightSection,
        cateringPic,
        "Catering",
        "Delight your guests with our flavors and presentation"
    );
}