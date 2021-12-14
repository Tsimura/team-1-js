import localStorage from "./local-storage";
const switcherRefs = {
     switcher: document.querySelector('.switch'),
    body: document.body,
}
const PAGE_THEME = 'page-theme';
const savedPageTheme = localStorage.load(PAGE_THEME);
const darkTheme = 'dark'
const lightTheme = 'light'


getThemeFromLocalStorage();

switcherRefs.switcher.addEventListener('change', onSwitch);



function onSwitch(evt) {
    
    evt.currentTarget.children[1].classList.toggle('is-hidden');
    evt.currentTarget.children[2].classList.toggle('is-hidden');

 
    if (switcherRefs.switcher.children[0].checked) {
        localStorage.remowe(PAGE_THEME)
        switcherRefs.body.setAttribute('data-theme', 'dark');
        localStorage.save(PAGE_THEME, darkTheme)
      
        
        
    } else {
        localStorage.remowe(PAGE_THEME)
        switcherRefs.body.setAttribute('data-theme', 'light');
        localStorage.save(PAGE_THEME, lightTheme)
      
    }
      
}

function getThemeFromLocalStorage() {
    if (savedPageTheme === darkTheme) {
        const settings = {
            bodyStyle: switcherRefs.body.setAttribute('data-theme', 'dark'),
            darkBg: switcherRefs.switcher.children[1].classList.add('is-hidden'),
            lightBg: switcherRefs.switcher.children[2].classList.remove('is-hidden'),
            checkBoxValue: switcherRefs.switcher.children[0].checked=true,

        }
        return settings;
    }
   return switcherRefs.body.setAttribute('data-theme', 'light');
}