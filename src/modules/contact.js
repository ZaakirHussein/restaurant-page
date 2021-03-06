import navCreation from "./header";
import { highlightTab } from "./tabhighlight"

function contactPageDisplay () {
    const addContent = document.querySelector('.content'); 
    
    // Navigation Bar Creation
    navCreation(addContent);
    highlightTab(2)
    

    const bgImgContainer =  addContent.appendChild(document.createElement('div'));
    bgImgContainer.classList.add('background-container');
    bgImgContainer.style.backgroundImage = 'url(/restaurant-page/images/anchor-lee-kO1G3neRA2o-unsplash.jpg)'
    
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

export { contactPageDisplay }