import { showFilmsWatched } from './library';
import { getFilms } from './getFilms';
import { makeGenres } from './makeGenres';
// додала импорт.....................................
import { createFilmoteka } from './trending_films';
// ...........................................................................
const films = document.querySelector(`#gallery`);
const myLibraryButton = document.querySelector('#my-library');
const homeButton = document.querySelector('#home');
const form = document.querySelector('#search-form');
const listButton = document.querySelector('.header-library__list');
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');
const header = document.querySelector('header');

console.log(buttonWatched);

myLibraryButton.addEventListener('click', () => {
  showFilmsWatched();
  header.classList.add('header-libary');

  form.classList.add('is-hidden');
  listButton.classList.remove('is-hidden');
  listButton.classList.add('list');
});

homeButton.addEventListener('click', () => {
  header.classList.remove('header-libary');
  form.classList.remove('is-hidden');
  listButton.classList.add('is-hidden');
  // homeButton.classList.add('current');
  // const isActive = homeButton.classList.contains('current');

  clearContainer();
  return getFilms()
    .then(createFilmoteka)
    .catch(error => console.log(error));
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

// =====================================================================================================
// закомітила  function createFilmoteka(resp)..........................................
// function createFilmoteka(resp) {
//   console.log(resp);
//   if (resp.results.length === 0) {
//     Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
//     getFilms()
//       .then(createFilmoteka)
//       .catch(error => console.log(error));
//   } else {
//     resp.results.map(data => {
//       return films.insertAdjacentHTML(`beforeend`, articles(data));
//     });
//   }
// }
// ...........................................................................
// закомітила  function articles..........................................
// function articles({ poster_path, original_title, release_date, genre_ids, id }) {
//   return `<div id="gallery" class="hp__gallery_el">
//       ${
//         poster_path
//           ? `<img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"`
//           : `<img class="hp__gallery_img" src="${poster}" alt="Poster is missing"`
//       }>
//       <h2 class="film_title">${original_title}</h2>
//       <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
//       <ul class="modal-list__buttons list">
//       <li>
//       <button id="${id}" class='button-watched-modal-window button--active button'>add to watched</button></li>
//       <li>
//       <button id="${id}" type='button' class='button-queue-modal-window button button--active'>add to queue</button></li>
//       </ul>
//     </div>`;
// }
// ...........................................................................
function clearContainer() {
  return (films.innerHTML = ``);
}
