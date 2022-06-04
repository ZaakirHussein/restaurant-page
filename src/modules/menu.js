import navCreation from "./header";
import informationCreation from "./info";

function menuPageDisplay () {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    navCreation(addContent);

    // Menu Image Display
    const displayMenu = (() => {
        const menuContainer = addContent.appendChild(document.createElement("div"));
        menuContainer.classList.add('menu-container')
            const menuImage = menuContainer.appendChild(document.createElement('img'));
            menuImage.src = "/styles/images/menu.png";
            menuImage.setAttribute('id', 'menu-pic')
    })();
    
    //Information Section Creation
    informationCreation();
};


export { menuPageDisplay }