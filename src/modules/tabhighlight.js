function highlightTab (activetab) {
    let navTab = document.getElementsByClassName('nav-container');
    navTab[activetab].style.textDecoration = 'underline';
    navTab[activetab].style.color = 'grey';
}

export { highlightTab }