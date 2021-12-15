import { showFilmsWatched } from './library';
import { getFilms } from './getFilms';
import { makeGenres } from './makeGenres';
import { articles } from './trending_films';
// додала импорт.....................................
import { createFilmoteka } from './trending_films';
import { searchFilms } from './getFilms';
import * as withLoader from './spinner';
import { reset } from './trending_films';
// ...........................................................................
// const films = document.querySelector(`.hp__gallery_wrapper`);
import { films } from './trending_films';
const myLibraryButton = document.querySelector('#my-library');
const homeButton = document.querySelector('#home');
const form = document.querySelector('#search-form');
const listButton = document.querySelector('.header-library__list');
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');
const header = document.querySelector('header');
const paginationBtn = document.querySelector('#pagination');

console.log(buttonWatched);

myLibraryButton.addEventListener('click', () => {
  showFilmsWatched();
  header.classList.add('header-libary');

  form.classList.add('is-hidden');
  listButton.classList.remove('is-hidden');
  listButton.classList.add('list');

  myLibraryButton.classList.add('current');

  if (homeButton.classList.contains('current')) {
    homeButton.classList.remove('current');
  }
  ifcurrent();
});

homeButton.addEventListener('click', () => {
  header.classList.remove('header-libary');
  form.classList.remove('is-hidden');
  listButton.classList.add('is-hidden');
  homeButton.classList.add('current');
  ifcurrent();
  reset();
  console.log(films.attributes);
  films.removeAttribute('style');

  if (myLibraryButton.classList.contains('current')) {
    myLibraryButton.classList.remove('current');

    withLoader.addLoader();

    setTimeout(() => {
      return getFilms(1)
        .then(createFilmoteka)
        .then(withLoader.removeLoader())
        .catch(error => console.log(error));
    }, 2000);
  }
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

// function clearContainer() {
//   return (films.innerHTML = ``);
// }

function ifcurrent() {
  if (homeButton.classList.contains('current')) {
    listButton.classList.add('visually-hidden');
    paginationBtn.classList.remove('visually-hidden');
  } else if (myLibraryButton.classList.contains('current')) {
    listButton.classList.remove('visually-hidden');
    pagination.classList.add('visually-hidden');
  }
  return;
}
