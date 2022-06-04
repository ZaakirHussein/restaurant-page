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

export { slideShowAnimation }