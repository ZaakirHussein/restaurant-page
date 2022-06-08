import navCreation from "./header";
import informationCreation from "./info";
import { highlightTab } from "./tabhighlight";


function menuPageDisplay () {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    navCreation(addContent);
    highlightTab(1)

    // Menu Image Display
    const displayMenu = (() => {
        const menuContainer = addContent.appendChild(document.createElement("div"));
        menuContainer.classList.add('menu-container')
            const menuImage = menuContainer.appendChild(document.createElement('img'));
            menuImage.src = "restaurant-page/images/menu.png";
            menuImage.setAttribute('id', 'menu-pic')
    })();
    
    //Information Section Creation
    informationCreation();
    highlightTab(1);
};


export { menuPageDisplay }