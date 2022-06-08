/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPageDisplay": () => (/* binding */ contactPageDisplay)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _tabhighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabhighlight */ "./src/modules/tabhighlight.js");



function contactPageDisplay () {
    const addContent = document.querySelector('.content'); 
    
    // Navigation Bar Creation
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(addContent);
    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_1__.highlightTab)(2)
    

    const bgImgContainer =  addContent.appendChild(document.createElement('div'));
    bgImgContainer.classList.add('background-container');
    bgImgContainer.style.backgroundImage = 'url(restaurant-page/images/anchor-lee-kO1G3neRA2o-unsplash.jpg)'
    
    const findUsSection = (() => {
        const findUsContainer = bgImgContainer.appendChild(document.createElement("div"));
            findUsContainer.classList.add('findus-container');
        const findUsContent = findUsContainer.appendChild(document.createElement("div"));
            findUsContent.classList.add('findus-content');
            const findUsHeader = findUsContent.appendChild(document.createElement('h1'))
            findUsHeader.classList.add('contact-header');
            findUsHeader.textContent = 'where to find us';
        // Left section of Contact page's find us information
            const findUsLeftContainer = findUsContent.appendChild(document.createElement('div'))
                findUsLeftContainer.classList.add('findus-left-container')
                const findUsLeftHeader = findUsLeftContainer.appendChild(document.createElement('h4'))
                    findUsLeftHeader.textContent = 'CONNECT';
                    const findUsLeftSocial1 = findUsLeftContainer.appendChild(document.createElement('a'));
                        findUsLeftSocial1.appendChild(document.createTextNode('Instagram'));
                        const findUsLeftSocial2 = findUsLeftContainer.appendChild(document.createElement('a'));
                        findUsLeftSocial2.appendChild(document.createTextNode('Facebook'))
                    const findUsLeftSocial3 = findUsLeftContainer.appendChild(document.createElement('a'));
                        findUsLeftSocial3.appendChild(document.createTextNode('Twitter'));
        // Center section of Contact page's find us information
            const findUsCenterContainer = findUsContent.appendChild(document.createElement('div'));
                findUsCenterContainer.classList.add('findus-center-container');
                const findUsCenterHeader1 = findUsCenterContainer.appendChild(document.createElement('h4')).textContent = 'address';
                    findUsCenterContainer.appendChild(document.createElement('p')).textContent = 'Kofi Annan Street';
                    findUsCenterContainer.appendChild(document.createElement('p')).textContent = 'Bakau, The Gambia';
                    findUsCenterContainer.appendChild(document.createElement('br'));
                const findUsCenterHeader2 = findUsCenterContainer.appendChild(document.createElement('h4')).textContent = 'contact';
                    findUsCenterContainer.appendChild(document.createElement('p')).textContent = 'reservations@capepointchicken.com';
                    findUsCenterContainer.appendChild(document.createElement('p')).textContent = '+220 555 5555';
        // Right section of Contact page's find us information
            const findUsRightContainer = findUsContent.appendChild(document.createElement('div'));
                findUsRightContainer.classList.add('findus-right-container');
                const findUsRightHeader1 = findUsRightContainer.appendChild(document.createElement('h4')).textContent = 'hours';
                    findUsRightContainer.appendChild(document.createElement('p')).textContent = 'Sunday to Thursday: 11am - 11pm';
                    findUsRightContainer.appendChild(document.createElement('p')).textContent = 'Friday & Saturday: 11am - 1am';
                    findUsRightContainer.appendChild(document.createElement('br'));
                const findUsRightHeader2 = findUsRightContainer.appendChild(document.createElement('h4')).textContent = 'note';
                findUsRightContainer.appendChild(document.createElement('p')).textContent = 'We are accepting online reservations only.';
                findUsRightContainer.appendChild(document.createElement('p')).textContent = 'Online reservations can be made 31 days in advance, and for up to 8 guests.';

    })();

    // Google Maps API 
    const mapCreation = (() => {
        const mapContainer = bgImgContainer.appendChild(document.createElement("div"));
        mapContainer.classList.add('map-container');
        const googleMaps = mapContainer.appendChild(document.createElement("iframe"));
            googleMaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.7975236034904!2d-16.66766643491839!3d13.486570707017254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29b07e907e14d%3A0x5f84dcea838ec574!2sCape%20Point%20Beach!5e0!3m2!1sen!2sca!4v1654433092183!5m2!1sen!2sca"
            googleMaps.setAttribute('id', 'map');
            googleMaps.setAttribute('frameborder', 0)
    })();

    // Creation of Form
    const contactForm = (() => {
        const formContainer = bgImgContainer.appendChild(document.createElement("div"));
            formContainer.classList.add('form-container');
        
        const formContent = formContainer.appendChild(document.createElement("div"));
        formContent.classList.add('form-content');
        
        const formHeader = formContent.appendChild(document.createElement("h1"))
        formHeader.textContent = 'contact us';
        formHeader.classList.add('form-header');
        formHeader.style.textAlign = "center";

        
        const formBody = formContent.appendChild(document.createElement("form"));
            formBody.classList.add('form-body');

            const formRow1 = formBody.appendChild(document.createElement("div"));
            formRow1.classList.add('form-row1');
        
        // Create an input element for Full Name
        const formNameInput = formRow1.appendChild(document.createElement('input'));
            formNameInput.setAttribute("type", "text");
            formNameInput.setAttribute("name", "FullName");
            formNameInput.setAttribute("placeholder", "Name");
            formNameInput.required;
    
        // Create an input element for email
        const emailInput = formRow1.appendChild(document.createElement('input'));
            emailInput.setAttribute("type", "email");
            emailInput.setAttribute("name", "email");
            emailInput.setAttribute("placeholder", "E-mail");
            emailInput.required;
    
        // Create an input element for PHONE
        const phoneInput = formRow1.appendChild(document.createElement('input'));
            phoneInput.setAttribute("type", "number")
            phoneInput.setAttribute("name", "phone");
            phoneInput.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}")
            phoneInput.setAttribute("placeholder", "Phone Number");

            const formRow2 = formBody.appendChild(document.createElement("div"));
            formRow2.classList.add('form-row2');
    
        // Create an input element for user messasge
        const messageInput = formRow2.appendChild(document.createElement('textarea'));
            messageInput.setAttribute("placeholder", "Your Message");
            messageInput.setAttribute("id", "textarea")
            messageInput.setAttribute("name", "text-area");
            messageInput.setAttribute("rows", 10);

    
                    // create a submit button
                    const s = formRow2.appendChild(document.createElement("input"));
                    s.setAttribute("type", "submit");
                    s.setAttribute("value", "Submit")
                    s.setAttribute('id','input-css');
                    
        })();
}



/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide */ "./src/modules/slide.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/modules/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/modules/contact.js");
// Home Page Display


// Menu Page Display 



const navCreation = (append) => {
    const navBar = append.appendChild(document.createElement("nav"));
        // Left Navigation Bar
        const leftNavBar = navBar.appendChild(document.createElement('div'));
        leftNavBar.classList.add('nav-left');
            const leftNavLogo = leftNavBar.appendChild(document.createElement('img'));
                leftNavLogo.setAttribute("id","nav-logo");
                leftNavLogo.src="restaurant-page/images/Cape Point Chicken House-logos_transparent.png";
        // Center Navigation Bar
        const centerNavBar = navBar.appendChild(document.createElement('div'));
        centerNavBar.classList.add('nav-center');
            const createList = (() => {
                const unorderedList = centerNavBar.appendChild(document.createElement('ul'));
                unorderedList.classList.add('nav-links');
                const navLinks = ['Home', 'Menu', 'Contact'];

                for (const link of navLinks) {
                    const listViewItem = unorderedList.appendChild(document.createElement('li'));
                    listViewItem.classList.add('nav-container');
                    const a = listViewItem.appendChild(document.createElement('a'));
                    a.appendChild(document.createTextNode(link));
                    a.setAttribute('id', link);
                    a.classList.add('nav-tab');
                }
            })()
        // Right Navigation Bar
        const rightNavBar = navBar.appendChild(document.createElement('div'));
        rightNavBar.classList.add('nav-right');
            const socialsContainer = rightNavBar.appendChild(document.createElement('div'));
            socialsContainer.classList.add('socials')
                const instagramLogo = socialsContainer.appendChild(document.createElement('img'));
                instagramLogo.src = "restaurant-page/images/instagram.png";
                const facebookLogo = socialsContainer.appendChild(document.createElement('img'));
                facebookLogo.src = "restaurant-page/images/facebook.png";
                const twitterLogo = socialsContainer.appendChild(document.createElement('img'));
                twitterLogo.src = "restaurant-page/images/twitter.png";
            
            // Tab Switching Logic. Removes content using replaceChildren() then repopulates display with corresponding click event listner. 
                const contentContainer = document.querySelector('.content');
                const homeTab = document.querySelector('#Home');
                const menuTab = document.querySelector('#Menu');
                const contactTab = document.querySelector('#Contact');
        
                const removeContent = () => {
                    contentContainer.replaceChildren()
                }

                const homeHandler = homeTab.addEventListener('click', function () {
                    removeContent();
                    (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageDisplay)();
                    (0,_slide__WEBPACK_IMPORTED_MODULE_1__.slideShowAnimation)();        
                })

                const menuHandler = menuTab.addEventListener('click', function() {
                    removeContent();
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPageDisplay)();
                })

                const contactHandler = contactTab.addEventListener('click', function () {
                    removeContent();
                    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPageDisplay)();
                })
};    

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navCreation);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageDisplay": () => (/* binding */ homePageDisplay)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/modules/info.js");



const homePageDisplay = (() => {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(addContent);
    

    // Slideshow Creation
    const slideShowCreation = (() => {
        const slideShowContainer = addContent.appendChild(document.createElement('div'));
        slideShowContainer.classList.add('slideshow-container');
            const slide1Container = slideShowContainer.appendChild(document.createElement('div'));
            slide1Container.classList.add('slides');
                const slide1 = slide1Container.appendChild(document.createElement('img'));
                slide1.classList.add('slide-image');
                slide1.src = "restaurant-page/images/albert-YYZU0Lo1uXE-unsplash.jpg";
            const slide2Container = slideShowContainer.appendChild(document.createElement('div'));
            slide2Container.classList.add('slides');
                const slide2 = slide2Container.appendChild(document.createElement('img'));
                slide2.classList.add('slide-image');
                slide2.src = "restaurant-page/images/sameer-waskar-KojQfg8UdCE-unsplash.jpg";  
            const slide3Container = slideShowContainer.appendChild(document.createElement('div'));
            slide3Container.classList.add('slides');
                const slide3 = slide3Container.appendChild(document.createElement('img'));
                slide3.classList.add('slide-image');
                slide3.src = "restaurant-page/images/andrew-itaga-_sBMs1TrcIE-unsplash.jpg";
            const slide4Container = slideShowContainer.appendChild(document.createElement('div'));
            slide4Container.classList.add('slides');
                const slide4 = slide4Container.appendChild(document.createElement('img'));
                slide4.classList.add('slide-image');
                slide4.src = "restaurant-page/images/peter-pham-DMnYfIAfYSs-unsplash.jpg";
                })();


    //Information Section Creation
    (0,_info__WEBPACK_IMPORTED_MODULE_1__["default"])();
});



/***/ }),

/***/ "./src/modules/info.js":
/*!*****************************!*\
  !*** ./src/modules/info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const informationCreation =() => {
    const addContent = document.querySelector('.content');

    const informationContainer = addContent.appendChild(document.createElement('div'));
    informationContainer.classList.add('information-section');
        //Info Section Left
        const infoLeft = informationContainer.appendChild(document.createElement('div'));
        infoLeft.classList.add('left-info');
            const h2Element = infoLeft.appendChild(document.createElement('h2'));
            h2Element.textContent = 'Contact';
            const p1 = infoLeft.appendChild(document.createElement('p'));
            p1.classList.add('contact-info');
            p1.textContent = 'Kofi Annan Street';
            const p2 = infoLeft.appendChild(document.createElement('p'));
            p2.classList.add('contact-info');
            p2.textContent = 'Bakau, The Gambia';
            const p3 = infoLeft.appendChild(document.createElement('p'));
            p3.classList.add('contact-info');
            p3.textContent = 'reservations@capepointchicken.com';
            const p4 = infoLeft.appendChild(document.createElement('p'));
            p4.classList.add('contact-info');
            p4.textContent = '+220 555 5555';

        //Info Section Center
        const infoCenter = informationContainer.appendChild(document.createElement('div'));
        infoCenter.classList.add('center-info');
            const infoLogo = infoCenter.appendChild(document.createElement('img'));
            infoLogo.classList.add('info-logo');
            infoLogo.src = "restaurant-page/images/Cape Point Chicken House-logos_transparent.png";

        //Info Section Right
        const infoRight = informationContainer.appendChild(document.createElement('div'));
        infoRight.classList.add('right-info')
            const secondH2Element = infoRight.appendChild(document.createElement('h2'));
            secondH2Element.textContent = 'Kitchen Hours';
            const p5 = infoRight.appendChild(document.createElement('p'));
            p5.textContent = 'Sunday to Thursday: 11am - 11pm';
            const p6 = infoRight.appendChild(document.createElement('p'));
            p6.textContent = 'Friday & Saturday: 11am - 1am';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (informationCreation); 

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPageDisplay": () => (/* binding */ menuPageDisplay)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/modules/info.js");
/* harmony import */ var _tabhighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabhighlight */ "./src/modules/tabhighlight.js");





function menuPageDisplay () {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(addContent);
    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_2__.highlightTab)(1)

    // Menu Image Display
    const displayMenu = (() => {
        const menuContainer = addContent.appendChild(document.createElement("div"));
        menuContainer.classList.add('menu-container')
            const menuImage = menuContainer.appendChild(document.createElement('img'));
            menuImage.src = "restaurant-page/images/menu.png";
            menuImage.setAttribute('id', 'menu-pic')
    })();
    
    //Information Section Creation
    (0,_info__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_2__.highlightTab)(1);
};




/***/ }),

/***/ "./src/modules/slide.js":
/*!******************************!*\
  !*** ./src/modules/slide.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideShowAnimation": () => (/* binding */ slideShowAnimation)
/* harmony export */ });
const slideShowAnimation = (() => {
    const slideImages = document.querySelectorAll('.slide-image');
    const nextImageDelay = 4000;
    let currentImageCounter = 0;

    slideImages[currentImageCounter].style.opacity = 1;

    const nextImage = () => {
        slideImages[currentImageCounter].style.opacity = 0;
        currentImageCounter = (currentImageCounter + 1) % slideImages.length;
        slideImages[currentImageCounter].style.opacity = 1;
    };

    setInterval(nextImage, nextImageDelay);
}); 



/***/ }),

/***/ "./src/modules/tabhighlight.js":
/*!*************************************!*\
  !*** ./src/modules/tabhighlight.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTab": () => (/* binding */ highlightTab)
/* harmony export */ });
function highlightTab (activetab) {
    let navTab = document.getElementsByClassName('nav-container');
    navTab[activetab].style.textDecoration = 'underline';
    navTab[activetab].style.color = 'grey';
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/slide.js */ "./src/modules/slide.js");
// Home Page Display



(0,_src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageDisplay)();
(0,_src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__.slideShowAnimation)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map