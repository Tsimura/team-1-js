export const spinner = document.querySelector('.spinner');
const gallery = document.querySelector('#gallery');


export function addLoader() {
    
    spinner.classList.add('visible');
    spinner.classList.remove('invisible');
}

export function removeLoader() {
    spinner.classList.add('invisible');
    spinner.classList.remove('visible');
}