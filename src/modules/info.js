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
            infoLogo.src = "/restaurant-page/images/Cape Point Chicken House-logos_transparent.png";

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

export default informationCreation 