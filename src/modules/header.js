// Home Page Display
import { homePageDisplay } from '/src/modules/home.js';
import { slideShowAnimation } from '/src/modules/slide.js';
// Menu Page Display 
import { menuPageDisplay } from '/src/modules/menu.js';
import { contactPageDisplay } from '/src/modules/contact.js'
// Active Tab Highlights
import { highlightTab } from './tabhighlight';


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
                    homePageDisplay();
                    slideShowAnimation();
                    highlightTab(homeTab)                
                })

                const menuHandler = menuTab.addEventListener('click', function() {
                    removeContent();
                    menuPageDisplay();
                    highlightTab(menuTab);
                })

                const contactHandler = contactTab.addEventListener('click', function () {
                    removeContent();
                    contactPageDisplay();
                    highlightTab(contactTab);
                })
};    

export default navCreation