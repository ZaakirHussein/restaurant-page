import navCreation from "./header";
import informationCreation from "./info";

const homePageDisplay = (() => {
    const addContent = document.querySelector('.content');

    // Navigation Bar Creation
    navCreation(addContent);
    

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
    informationCreation();
});

export { homePageDisplay }