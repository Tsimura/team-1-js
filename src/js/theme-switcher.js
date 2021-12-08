import localStorage from "./local-storage";

const switcherRefs = {
    switcher: document.querySelector('.switch'),
    body: document.querySelector('body'),
    header: document.querySelector('.header'),
    footer: document.querySelector('footer'),
    footerP: document.querySelectorAll('footer p'),
    footerLinks: document.querySelectorAll('footer a'),
    footerHeadings: document.querySelectorAll('footer h2'),
    footerSVG: document.querySelectorAll('footer svg'),
    gallery: document.querySelector('.hp__gallery_wrapper'),
    modalForm: document.querySelector('.film-card-modal-window'),
    modalBtn: document.querySelector('.close-modal-window-btn'),
    modalSvg: document.querySelector('.icon-close-modal'),
    modalSignature: document.querySelector('.modal-window-signature'),
    modalCharacteristics: document.querySelectorAll('.modal-window-characteristics-value li'),
    
}

const PAGE_THEME = 'page-theme';
const savedPageTheme = localStorage.load(PAGE_THEME);
const lightTheme = {
    name: 'light-theme',
    'switcherRefs.switcher.children[0].checked':true,
}
const darkTheme = {
    name: 'dark-theme',
    'switcherRefs.switcher.children[0].checked':false,
}
// switcherRefs.switcher.children[0].setAttribute('checked', 'checked');
// getThemeFromLocalStorage();

switcherRefs.switcher.addEventListener('change', onSwitch);





  function onSwitch(evt) {
    
    evt.currentTarget.children[2].classList.toggle('is-hidden');
    evt.target.removeAttribute('checked');
    evt.currentTarget.children[1].classList.toggle('is-hidden');
 
    if (!switcherRefs.switcher.children[0].checked) {
        addDarkThemeStyles();
        
        // localStorage.save(PAGE_THEME, JSON.stringify(darkTheme));
        
        // getThemeFromLocalStorage()
        console.log(localStorage.load(PAGE_THEME))
    } else{
        removeDarkThemeStyles();
        // console.log('checked',switcherRefs.switcher.children[0].checked)
        // localStorage.save(PAGE_THEME, JSON.stringify(lightTheme));
       
        // getThemeFromLocalStorage();
        console.log(localStorage.load(PAGE_THEME))
    }
  }
  


function addDarkThemeStyles() {
       switcherRefs.body.style.backgroundImage = ' linear-gradient(0deg, rgb(101, 21, 139) 25%, rgb(17, 17, 26) 73%)';
        switcherRefs.footer.style.backgroundColor = '#000';
        switcherRefs.gallery.classList.add('dark-theme__text-color');
        switcherRefs.modalForm.style.backgroundImage = 'linear-gradient(0deg, rgb(101, 21, 139) 25%, rgb(17, 17, 26) 73%)';
        switcherRefs.modalBtn.style.backgroundColor = 'rgb(17, 17, 26)';
        switcherRefs.modalBtn.style.fill = '#ff6b01';
        changeTextColorByStyle(switcherRefs.footerLinks)
        changeTextColorByClass(switcherRefs.footerP);
        changeTextColorByClass(switcherRefs.footerHeadings);
        changeSvgFill(switcherRefs.footerSVG);
        switcherRefs.modalSignature.classList.add('dark-theme__text-color');
        changeTextColorByClass(switcherRefs.modalCharacteristics);
}


function removeDarkThemeStyles() {
      switcherRefs.gallery.classList.remove('dark-theme__text-color');
        switcherRefs.modalSignature.classList.remove('dark-theme__text-color');
        
        removeAttributeStyle(switcherRefs.body);
        removeAttributeStyle(switcherRefs.header);
        removeAttributeStyle(switcherRefs.footer);
        removeAttributeStyleFromArray(switcherRefs.footerLinks);
        removeAttributeStyleFromArray(switcherRefs.footerSVG);
        removeDarkThemeClass(switcherRefs.footerP);
        removeDarkThemeClass(switcherRefs.footerHeadings);
        removeAttributeStyle(switcherRefs.modalForm);
        removeAttributeStyle(switcherRefs.modalBtn);
        removeAttributeStyle(switcherRefs.modalSvg);
        removeDarkThemeClass(switcherRefs.modalCharacteristics);
}

// function getThemeFromLocalStorage() {
//     if (savedPageTheme === darkTheme) {
//         switcherRefs.switcher.children[0].removeAttribute('checked');
//     }
    
// }


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


