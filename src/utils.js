export function createElem(element, className="", parent) {
    const elem = document.createElement(element);
    elem.classList.add(className);
    parent.appendChild(elem);
    return elem;
}