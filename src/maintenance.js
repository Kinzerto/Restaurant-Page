function createElem(element, className, parent) {
    const elem = document.createElement(element);
    // Split by spaces so 'pin pin1' becomes two classes: 'pin' and 'pin1'
    elem.classList.add(...className.split(" "));
    parent.appendChild(elem);
    return elem;
}
export function maintenancePage(content) {
    content.textContent = ""; // Clear existing content
    document.title = "Contact";
    console.log(content);
    
    const mainWrapper = createElem("div", "main-wrapper", content);

    const signboardWrapper = createElem("div", "signboard-wrapper", mainWrapper);

    const signboard = createElem("div", "signboard", signboardWrapper);
    signboard.textContent = "CLOSED"; // Add the text inside
    const credit = createElem("div", "credits", signboard);

    credit.textContent = "Designed by: Takane Ichinose";

    createElem("div", "string", signboardWrapper);
    createElem("div", "pin pin1", signboardWrapper);
    createElem("div", "pin pin2", signboardWrapper);
    createElem("div", "pin pin3", signboardWrapper);
    console.log('kin');

    

}