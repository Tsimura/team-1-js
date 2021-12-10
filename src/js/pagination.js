// new 10.12///////////////////////////////////////////
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { createData } from './createFilmoteka';
import { reset } from './createFilmoteka';
let page = 1;
const options = {
  totalItems: 1000,
  visiblePages: 4,
  centerAlign: true,
  // firstItemClassName: 'tui-first-child',
  // lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
// const {
//   template: { moreButton },
// } = options;
// console.log(moreButton);
// console.log(options.template);
// console.log(options.visiblePages);
const mediaQuery = window.matchMedia('(min-width: 768px)');
if (mediaQuery.matches) {
  options.visiblePages = 7;
  console.log(options.visiblePages);
}
const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
page = pagination.getCurrentPage();
createData(page);
pagination.on('afterMove', ({ page }) => {
  reset();
  createData(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// end new 10.12///////////////////////////////////////////
// // 10.12///////////////////////////////////////////
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// // import { getFilms } from './getFilms';
// // import { createFilmoteka } from './trending_films';
// // import { films } from './trending_films';
// import { getFilms } from './getFilms';
// import { makeGenres } from './makeGenres';
// import Notiflix from 'notiflix';
// import poster from '../image/posters/poster.jpg';
// import { lazyLoad } from './lazyLoad';
// const films = document.querySelector(`#gallery`);
// export function createData(page) {
//   return getFilms(page)
//     .then(createFilmoteka)
//     .catch(error => console.log(error));
// }
// let page = 1;
// const options = {
//   totalItems: 1000,
//   visiblePages: 7,
//   centerAlign: true,
// };
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container, options);
// page = pagination.getCurrentPage();
// createData(page);
// pagination.on('afterMove', ({ page }) => {
//   reset();
//   createData(page);
//   // getFilms(page)
//   // .then(createFilmoteka)
//   // .catch(error => console.log(error));
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// function reset() {
//   return (films.innerHTML = ``);
// }
// // createData(page);
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
//   const img = document.querySelectorAll('#gallery img');
//   lazyLoad(img);
// }

// function articles({ poster_path, original_title, release_date, genre_ids, id }) {
//   return `<div id="gallery" class="hp__gallery_el">
//       ${
//         poster_path
//           ? `<img class="hp__gallery_img" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
//           : `<img class="hp__gallery_img" src="${poster}" data-lazy="  alt="Poster is missing"`
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
// // end 10.12///////////////////////////////////////////

// ............................................
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { getFilms } from './getFilms';
// import { createFilmoteka } from './trending_films';
// import { films } from './trending_films';

// let page = 1;
// const options = {
//   totalItems: 1000,
//   visiblePages: 4,
//   centerAlign: true,
//   // firstItemClassName: 'tui-first-child',
//   // lastItemClassName: 'tui-last-child',
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
// // const {
// //   template: { moreButton },
// // } = options;
// // console.log(moreButton);
// // console.log(options.template);
// // console.log(options.visiblePages);
// const mediaQuery = window.matchMedia('(min-width: 768px)');
// if (mediaQuery.matches) {
//   options.visiblePages = 7;
//   console.log(options.visiblePages);
// }
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container, options);
// page = pagination.getCurrentPage();

// createData(page);

// pagination.on('afterMove', ({ page }) => {
//   reset();
//   createData(page);
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// export function createData(page) {
//   return getFilms(page)
//     .then(createFilmoteka)
//     .catch(error => console.log(error));
// }

// function reset() {
//   return (films.innerHTML = ``);
// }

// /////////////////////////////////////////////////
//  work
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { getFilms } from './getFilms';
// import { createFilmoteka } from './trending_films';
// import { films } from './trending_films';

// export function createData(page) {
//   return getFilms(page)
//     .then(createFilmoteka)
//     .catch(error => console.log(error));
// }
// let page = 1;
// const options = {
//   totalItems: 1000,
//   visiblePages: 7,
//   centerAlign: true,
// };
// console.log(options.visiblePages);
// // const mediaQuery = window.matchMedia('(min-width: 320px)');
// // if (mediaQuery.matches) {
// //   options.visiblePages = 4;
// //   console.log(options.visiblePages);
// // }
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container, options);
// page = pagination.getCurrentPage();

// createData(page);

// pagination.on('afterMove', ({ page }) => {
//   reset();
//   createData(page);
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// function reset() {
//   return (films.innerHTML = ``);
// }
