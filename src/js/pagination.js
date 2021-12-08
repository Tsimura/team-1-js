import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { showFilmsWatched } from './library';
import { getFilms } from './getFilms';
import { makeGenres } from './makeGenres';
import { createFilmoteka } from './trending_films';
// const films = document.querySelector(`#gallery`);

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();
console.log(page);

getFilms(page)
  .then(createFilmoteka)
  .catch(error => console.log(error));

pagination.on('afterMove', ({ page }) =>
  getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error)),
);
getFilms(page).then(({ total }) => {
  console.log(page);
  console.log(total);
  pagination.reset(total);
});
// function getFilms(page) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`).then(response => {
//     if (!response.ok) {
//       throw new Error(`Error fetching data`);
//     }
//     return response.json();
//   });
// }

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
