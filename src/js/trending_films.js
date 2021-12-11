import { getFilms } from './getFilms';
import { makeGenres } from './makeGenres';
import Notiflix from 'notiflix';
import poster from '../image/posters/poster.jpg';
import { lazyLoad } from './lazyLoad';
import { searchFilms } from "./getFilms";

export const films = document.querySelector(`#gallery`);
const input = document.querySelector(`#search-form`);

input.addEventListener(`submit`, onSearch);

let searchForm = ` `;
let page = 1;
export function createData(page) {
  return getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}
createData(page);

export function createFilmoteka(resp) {
  console.log(resp);
    resp.results.map(data => {
    return films.insertAdjacentHTML(`beforeend`, articles(data));
    });
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

export function articles({ poster_path, original_title, release_date, genre_ids, id }) {
  return `<div id="galleryModal" class="hp__gallery_el">

  <a href="#" id="openModal" class='card-links link'>
     ${
       poster_path
         ? `<img class="hp__gallery_img" id="${id}". src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
         : `<img class="hp__gallery_img" id="${id}". src="" data-lazy="${poster}" loading="lazy" alt="Poster is missing"`
     }>

      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      <ul class="modal-list__buttons list">
      <li>
      <button id="${id}" class='button-watched-modal-window button--active button'>add to watched</button></li>
      <li>
      <button id="${id}" type='button' class='button-queue-modal-window button button--active'>add to queue</button></li>
      </ul>
      </a>
    </div>`;
}

function onSearch(evt) {
  searchForm = evt.currentTarget.elements.searchQuery.value;
  console.log(searchForm)
  evt.preventDefault();
  clearContainer();
  if (searchForm.length === 0) {
    Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
    getFilms(page)
      .then(createFilmoteka)
      .catch(error => console.log(error));
      return;
  }
  searchFilms(searchForm, page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}

function clearContainer() {
  return (films.innerHTML = ``);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
