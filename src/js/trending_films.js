import { getFilms } from './getFilms';
import { makeGenres } from './makeGenres';
import Notiflix from 'notiflix';
import poster from '../image/posters/poster.jpg';
import { lazyLoad } from './lazyLoad';
import { searchFilms } from './searchFilms';
import * as withLoader from './spinner';

export const films = document.querySelector(`#gallery`);
const input = document.querySelector(`#search-form`);

input.addEventListener(`submit`, onSearch);

let searchForm = ` `;
let page = 1;
// let totalItems;
// вставила код зі зміно ..................................
export function createData(page) {
  setTimeout(() => {
    return getFilms(page)
      .then(createFilmoteka)
      .then(withLoader.removeLoader())
      .catch(error => console.log(error));
  }, 2000);
}

// ......................................................
// закомітила код, вище  новий........................
// export function createData(page) {
//   setTimeout(() => {
//     return getFilms(page)
//       .then(createFilmoteka)
//       .catch(error => console.log(error));
//   }, 2000);
// }
// ...................................................
// createData(page);

export function createFilmoteka(resp) {
  console.log(resp);
  // ..................................
  console.log(resp.page);
  console.log(resp.total_pages);
  console.log(resp.total_results);
  if (resp.total_pages === resp.page) {
    Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
  }
  // ..................................
  resp.results.map(data => {
    return films.insertAdjacentHTML(`beforeend`, articles(data));
  });
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
  paginationSearch.on();
}

export function articles({
  poster_path,
  original_title,
  release_date,
  genre_ids,
  id,
  vote_average,
}) {
  return `<div id="galleryModal" class="hp__gallery_el">
  <a href="#" id="openModal" class='card-links link'>
     ${
       poster_path
         ? `<img class="hp__gallery_img" id="${id}" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
         : `<img class="hp__gallery_img" id="${id}" src="" data-lazy="${poster}" loading="lazy" alt="Poster is missing"`
     }>
      <div class="hp__title-genre_wrapper">
      <h2 class="film_title">${original_title}</h2><span class="hp__vote_span">${vote_average}</span>
      </div>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      </a>
    </div>`;
}

function onSearch(evt) {
  searchForm = evt.currentTarget.elements.searchQuery.value;
  console.log(searchForm);
  evt.preventDefault();
  reset();
  withLoader.addLoader();
  if (searchForm.length === 0) {
    Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
    setTimeout(() => {
      getFilms(page)
        .then(createFilmoteka)
        .then(withLoader.removeLoader())
        .catch(error => console.log(error));
      return;
    }, 2000);
  }
  setTimeout(() => {
    searchFilms(searchForm, page)
      .then(createFilmoteka)
      .then(withLoader.removeLoader)
      .catch(error => console.log(error));
  }, 2000);
}

export function reset() {
  return (films.innerHTML = ``);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const options = {
//   totalItems: 1000,
//   visiblePages: '',
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// const container = document.getElementById('pagination');
// const paginationSearch = new Pagination(container, options);
// page = paginationSearch.getCurrentPage();
// paginationSearch.on('afterMove', ({ page }) => {
//   reset();
//   createData(page);
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
