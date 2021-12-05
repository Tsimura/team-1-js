const switcher = document.querySelector('.switch');
const darkTheme = document.querySelector('dark-theme');
const lightTheme = document.querySelector('light-theme');

switcher.addEventListener('change', onSwitch);

function onSwitch(evt) {

    evt.currentTarget.children[2].classList.toggle('is-hidden');
    evt.target.removeAttribute('checked');
    evt.currentTarget.children[1].classList.toggle('is-hidden');
}


