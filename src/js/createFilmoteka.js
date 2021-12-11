// закомічен імпорт функцій із цього файлу, можно копіювати до себе на сторінку
// import { createData } from './createFilmoteka';
// import { createFilmoteka } from './createFilmoteka';
// import {films} from './createFilmoteka'
// import {articles} from './createFilmoteka'

import Notiflix from 'notiflix';
import poster from '../image/posters/poster.jpg';
import { lazyLoad } from './lazyLoad';
import { makeGenres } from './makeGenres';
import { getFilms } from './getFilms';
import * as withLoader  from './spinner';
const films = document.querySelector(`#gallery`);
export function createData(page) {
  setTimeout(() => {
     return getFilms(page)
       .then(createFilmoteka)
       .then(withLoader.removeLoader())
    .catch(error => console.log(error));
  },2000)
 
}

export function createFilmoteka(resp) {
  console.log(resp);
  if (resp.results.length === 0) {
    Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
    createData(page);
  } else {
    resp.results.map(data => {
      return films.insertAdjacentHTML(`beforeend`, articles(data));
    });
  }
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

export function articles({ poster_path, original_title, release_date, genre_ids, id }) {
  return `<div id="gallery" class="hp__gallery_el">
      ${
        poster_path
          ? `<img class="hp__gallery_img" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
          : `<img class="hp__gallery_img" src="" data-lazy="${poster}"  loading="lazy" alt="Poster is missing"`
      }>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      <ul class="modal-list__buttons list">
      <li>
      <button id="${id}" class='button-watched-modal-window button--active button'>add to watched</button></li>
      <li>
      <button id="${id}" type='button' class='button-queue-modal-window button button--active'>add to queue</button></li>
      </ul>
    </div>`;
}
export function reset() {
  return (films.innerHTML = ``);
}
