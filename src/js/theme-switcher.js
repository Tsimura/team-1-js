const switcherRefs = {
    switcher: document.querySelector('.switch'),
    darkTheme: document.querySelector('dark-theme'),
    lightTheme: document.querySelector('light-theme'),
    body: document.querySelector('body'),
    filmHeadings: document.getElementsByClassName('film_title'),
    header: document.querySelector('.header'),
    footer: document.querySelector('footer'),
    footerP: document.querySelectorAll('footer p'),
    footerLinks: document.querySelectorAll('footer a'),
    footerHeadings: document.querySelectorAll('footer h2'),
    footerSVG: document.querySelectorAll('footer svg'),
    gallery: document.querySelector('.hp__gallery_wrapper'),
    
}
// const mobileWidthMatch = window.matchMedia("(min-width: 320px)");
// const tabletWidthMatch = window.matchMedia("(min-width: 768px)");
// const desktopWidthMatch = window.matchMedia("(min-width: 1024px)");
let widthMatch = 0;
switcherRefs.switcher.addEventListener('change', onSwitch);



  function onSwitch(evt) {
    
    evt.currentTarget.children[2].classList.toggle('is-hidden');
    evt.target.removeAttribute('checked');
    evt.currentTarget.children[1].classList.toggle('is-hidden');
 
    if (!switcherRefs.switcher.children[0].checked) {
        
        switcherRefs.body.style.backgroundImage = ' linear-gradient(0deg, rgb(101, 21, 139) 25%, rgb(17, 17, 26) 73%)';
        switcherRefs.footer.style.backgroundColor = '#000';
        switcherRefs.gallery.classList.add('dark-theme__text-color');
        changeTextColorByStyle(switcherRefs.footerLinks)
        changeTextColorByClass(switcherRefs.footerP);
        changeTextColorByClass(switcherRefs.footerHeadings);
        changeSvgFill(switcherRefs.footerSVG);
        changeBackGroundImage();
        console.log(window.screen.width)
    
    } else{
        switcherRefs.gallery.classList.remove('dark-theme__text-color');
        removeAttributeStyle(switcherRefs.body);
        removeAttributeStyle(switcherRefs.header);
        removeAttributeStyle(switcherRefs.footer);
        removeAttributeStyleFromArray(switcherRefs.footerLinks);
        removeAttributeStyleFromArray(switcherRefs.footerSVG);
        removeDarkThemeClass(switcherRefs.footerP);
        removeDarkThemeClass(switcherRefs.footerHeadings);
        
       
 
    }
}
  function changeTextColorByClass(arr) {
   return arr.forEach(el => {
           
            return el.classList.add('dark-theme__text-color');
     })
}
  function changeTextColorByStyle(elem) {
    return elem.forEach(el => {
        return el.style.color = '#fff';
    })
}
  function changeSvgFill(svg) {
    return svg.forEach(el => {
        return el.style.fill = '#fff';
    })
}
  function removeAttributeStyle(elem) {
    return elem.removeAttribute('style');
        
}
  function removeAttributeStyleFromArray(arr) {
    return arr.forEach(el => {
        return el.removeAttribute('style');
    })
}

function removeDarkThemeClass(elem) {
    return elem.forEach(el => {
        return el.classList.remove('dark-theme__text-color');

    })
}

function changeBackGroundImage() {
    
    // if (mobileWidthMatch.matches) {
        
    // } else if () {
        
    // } else {
    //     switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/descktop-index.c45719dd.jpg)';
    // }
    // switch (widthMatch) {
    //     case 'window.matchMedia("(min-width: 320px)")': 
    //     switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(.././image/header/header-index/mobile-index.jpg)';
    //         break;
    //     case 'window.matchMedia("(min-width: 768px)")': 
    //     switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(.././image/header/header-index/tablet-index.jpg)';
    //         break;
    //     case 'window.matchMedia("(min-width: 1024px)")': 
    //     switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(.././image/header/header-index/descktop-index.jpg)';
    //         break;
    //     default:
    //             switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(.././image/header/header-index/tablet-index.jpg)';
    // }
}

