/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ID": () => (/* binding */ DEFAULT_ID),
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "LoaderStatus": () => (/* binding */ LoaderStatus)
/* harmony export */ });
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

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
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/modules/map.js");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");





function contactPageDisplay () {
    const addContent = document.querySelector('.content'); 
    
    // Navigation Bar Creation
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(addContent);

    const bgImgContainer =  addContent.appendChild(document.createElement('div'));
    bgImgContainer.classList.add('background-container');
    bgImgContainer.style.backgroundImage = 'url(/styles/images/anchor-lee-kO1G3neRA2o-unsplash.jpg)'
    
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
        const googleMaps = mapContainer.appendChild(document.createElement("div"));
            googleMaps.setAttribute('id', 'map');

        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__.Loader({
            apiKey: "AIzaSyANTH1sH0tH_cfw_Gop6VIJRp2eH3Oqrmo",
            version: "weekly",
        });
        // Delay Loading Dynamic Map
        loader.load().then(() => {
            (0,_map__WEBPACK_IMPORTED_MODULE_1__["default"])(13.487780174710045, -16.666910644498213)
        });

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
/* harmony import */ var _src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/slide.js */ "./src/modules/slide.js");
/* harmony import */ var _src_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _src_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _tabhighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabhighlight */ "./src/modules/tabhighlight.js");
// Home Page Display


// Menu Page Display 


// Active Tab Highlights



const navCreation = (append) => {
    let activeTab;
    const navBar = append.appendChild(document.createElement("nav"));
        // Left Navigation Bar
        const leftNavBar = navBar.appendChild(document.createElement('div'));
        leftNavBar.classList.add('nav-left');
            const leftNavLogo = leftNavBar.appendChild(document.createElement('img'));
                leftNavLogo.setAttribute("id","nav-logo");
                leftNavLogo.src="/styles/images/Cape Point Chicken House-logos_transparent.png";
        // Center Navigation Bar
        const centerNavBar = navBar.appendChild(document.createElement('div'));
        centerNavBar.classList.add('nav-center');
            const createList = (() => {
                const unorderedList = centerNavBar.appendChild(document.createElement('ul'));
                unorderedList.classList.add('nav-links');
                const navLinks = ['Home', 'Menu', 'Contact'];

                for (const link of navLinks) {
                    const listViewItem = unorderedList.appendChild(document.createElement('li'));
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
                instagramLogo.src = "/styles/images/instagram.png";
                const facebookLogo = socialsContainer.appendChild(document.createElement('img'));
                facebookLogo.src = "/styles/images/facebook.png";
                const twitterLogo = socialsContainer.appendChild(document.createElement('img'));
                twitterLogo.src = "/styles/images/twitter.png";
            
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
                    (0,_src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageDisplay)();
                    (0,_src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__.slideShowAnimation)();
                    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_4__.highlightTab)(homeTab)                
                })

                const menuHandler = menuTab.addEventListener('click', function() {
                    removeContent();
                    (0,_src_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPageDisplay)();
                    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_4__.highlightTab)(menuTab);
                })

                const contactHandler = contactTab.addEventListener('click', function () {
                    removeContent();
                    (0,_src_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPageDisplay)();
                    (0,_tabhighlight__WEBPACK_IMPORTED_MODULE_4__.highlightTab)(contactTab);
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
                slide1.src = "/styles/images/albert-YYZU0Lo1uXE-unsplash.jpg";
            const slide2Container = slideShowContainer.appendChild(document.createElement('div'));
            slide2Container.classList.add('slides');
                const slide2 = slide2Container.appendChild(document.createElement('img'));
                slide2.classList.add('slide-image');
                slide2.src = "/styles/images/sameer-waskar-KojQfg8UdCE-unsplash.jpg";  
            const slide3Container = slideShowContainer.appendChild(document.createElement('div'));
            slide3Container.classList.add('slides');
                const slide3 = slide3Container.appendChild(document.createElement('img'));
                slide3.classList.add('slide-image');
                slide3.src = "/styles/images/andrew-itaga-_sBMs1TrcIE-unsplash.jpg";
            const slide4Container = slideShowContainer.appendChild(document.createElement('div'));
            slide4Container.classList.add('slides');
                const slide4 = slide4Container.appendChild(document.createElement('img'));
                slide4.classList.add('slide-image');
                slide4.src = "/styles/images/peter-pham-DMnYfIAfYSs-unsplash.jpg";
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
            infoLogo.src = "/styles/images/Cape Point Chicken House-logos_transparent.png";

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

/***/ "./src/modules/map.js":
/*!****************************!*\
  !*** ./src/modules/map.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Initialize and add the map
function initMap(lat, lng) {
    // The location
    const location = { lat, lng };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMap);

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



function menuPageDisplay () {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(addContent);

    // Menu Image Display
    const displayMenu = (() => {
        const menuContainer = addContent.appendChild(document.createElement("div"));
        menuContainer.classList.add('menu-container')
            const menuImage = menuContainer.appendChild(document.createElement('img'));
            menuImage.src = "/styles/images/menu.png";
            menuImage.setAttribute('id', 'menu-pic')
    })();
    
    //Information Section Creation
    (0,_info__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    activetab.style.textDecoration = 'underline';
    activetab.style.color = 'grey';
    console.log(activetab);
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
/* harmony import */ var _src_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _src_modules_tabhighlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/modules/tabhighlight.js */ "./src/modules/tabhighlight.js");
/* harmony import */ var _src_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/modules/contact.js */ "./src/modules/contact.js");
// Home Page Display


// Menu Page Display 





(0,_src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageDisplay)();
(0,_src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__.slideShowAnimation)();

const contentContainer = document.querySelector('.content');

const homeTab = document.querySelector('#Home');
const menuTab = document.querySelector('#Menu');
const contactTab = document.querySelector('#Contact');



const removeContent = () => {
    contentContainer.replaceChildren()
}

const homeHandler = homeTab.addEventListener('click', function () {
    removeContent();
    (0,_src_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageDisplay)();
    (0,_src_modules_slide_js__WEBPACK_IMPORTED_MODULE_1__.slideShowAnimation)();
})

const menuHandler = menuTab.addEventListener('click', function() {
    removeContent();
    (0,_src_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPageDisplay)();

})

const contactHandler = contactTab.addEventListener('click', function () {
    removeContent();
    (0,_src_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactPageDisplay)();
})
})();

/******/ })()
;
//# sourceMappingURL=main.js.map