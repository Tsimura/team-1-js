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
    footerSVG: document.querySelectorAll('footer svg')

    
}
console.log(switcherRefs.footerSVG)

switcherRefs.switcher.addEventListener('change', onSwitch);
function onSwitch(evt) {
    
    evt.currentTarget.children[2].classList.toggle('is-hidden');
    evt.target.removeAttribute('checked');
    evt.currentTarget.children[1].classList.toggle('is-hidden');
 
    if (!switcherRefs.switcher.children[0].checked) {
        switcherRefs.body.style.backgroundImage = ' linear-gradient(0deg, rgb(101, 21, 139) 25%, rgb(17, 17, 26) 73%)';
        switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/descktop-index.c45719dd.jpg)';
        switcherRefs.footer.style.backgroundColor = '#000';
        switcherRefs.footerLinks.forEach(a => {
            return a.style.color='#fff';
        })
        switcherRefs.footerSVG.forEach(svg => {
            return svg.style.fill='#fff';
        })
        changeTextColor(switcherRefs.footerP);
        changeTextColor(switcherRefs.footerHeadings);
        
        
        console.log(window.screen.width)
       
        for (let i = 0; i <= switcherRefs.filmHeadings.length; i += 1){
            switcherRefs.filmHeadings[i].style.color = '#fff'
          
        }
    
    } else{
        switcherRefs.body.removeAttribute('style');
        switcherRefs.header.removeAttribute('style');
        switcherRefs.footer.removeAttribute('style');
        
       for (let i = 0; i <= switcherRefs.filmHeadings.length; i += 1){
            switcherRefs.filmHeadings[i].style.color = '#000'
        }
    }
}

function changeTextColor(arr) {
    arr.forEach(el => {
           
            return el.classList.add('dark-theme__text-color');
     })
}