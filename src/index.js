// Home Page Display
import { homePageDisplay } from '/src/modules/home.js';
import { slideShowAnimation } from '/src/modules/slide.js';
// Menu Page Display 
import { menuPageDisplay } from '/src/modules/menu.js';
import { highlightTab } from '/src/modules/tabhighlight.js';

import { contactPageDisplay } from '/src/modules/contact.js'

homePageDisplay();
slideShowAnimation();

const contentContainer = document.querySelector('.content');

const homeTab = document.querySelector('#Home');
const menuTab = document.querySelector('#Menu');
const contactTab = document.querySelector('#Contact');



const removeContent = () => {
    contentContainer.replaceChildren()
}

const homeHandler = homeTab.addEventListener('click', function () {
    removeContent();
    homePageDisplay();
    slideShowAnimation();
})

const menuHandler = menuTab.addEventListener('click', function() {
    removeContent();
    menuPageDisplay();

})

const contactHandler = contactTab.addEventListener('click', function () {
    removeContent();
    contactPageDisplay();
})