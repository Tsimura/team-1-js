const switcherRefs = {
    switcher: document.querySelector('.switch'),
    darkTheme: document.querySelector('dark-theme'),
    lightTheme: document.querySelector('light-theme'),
    body: document.querySelector('body'),
    filmHeadings: document.getElementsByClassName('film_title'),
    header: document.querySelector('.header'),
    
}
console.log(switcherRefs.header.style)
switcherRefs.switcher.addEventListener('change', onSwitch);
function onSwitch(evt) {
    
    evt.currentTarget.children[2].classList.toggle('is-hidden');
    evt.target.removeAttribute('checked');
    evt.currentTarget.children[1].classList.toggle('is-hidden');
 
    if (!switcherRefs.switcher.children[0].checked) {
        switcherRefs.body.style.backgroundImage = ' linear-gradient(0deg, rgb(101, 21, 139) 25%, rgb(17, 17, 26) 73%)';
        console.log(switcherRefs.filmHeadings[0].style);
        switcherRefs.header.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/descktop-index.c45719dd.jpg)';
        for (let i = 0; i <= switcherRefs.filmHeadings.length; i += 1){
            switcherRefs.filmHeadings[i].style.color = '#fff';
        }
    
    } else{
        switcherRefs.body.style.backgroundColor = '#fff';
        switcherRefs.body.style.backgroundImage = 'none';
       for (let i = 0; i <= switcherRefs.filmHeadings.length; i += 1){
            switcherRefs.filmHeadings[i].style.color = '#000';
        }
    }
}

