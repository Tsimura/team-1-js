const myLibraryButton = document.querySelector('#my-library');
const homeButton = document.querySelector('#home');
const form = document.querySelector('#search-form');
const listButton = document.querySelector('.header-library__list');
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');
const header = document.querySelector('header');

console.log(buttonWatched);

myLibraryButton.addEventListener('click', () => {
  header.classList.add('header-libary');

  form.classList.add('is-hidden');
  listButton.classList.remove('is-hidden');
  listButton.classList.add('list');
});

homeButton.addEventListener('click', () => {
  header.classList.remove('header-libary');

  form.classList.remove('is-hidden');
  listButton.classList.add('is-hidden');
});

listButton.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (buttonWatched.classList.contains('button--active')) {
    buttonWatched.classList.remove('button--active');
    buttonQueue.classList.add('button--active');
  } else {
    buttonWatched.classList.add('button--active');
    buttonQueue.classList.remove('button--active');
  }
});
