// import axios from 'axios';
// import { makeGenres } from './makeGenres';
// import Notiflix from 'notiflix';
// import { lazyLoad } from './lazyLoad';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import * as withLoader from './spinner';

// const films = document.querySelector(`#gallery`);
// // пагинация....................................................
// let page = 1;
// let totalPages = 0;
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
// mediaPagination();
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container, options);
// page = pagination.getCurrentPage();

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';
// async function getFilms(page) {
//   try {
//     const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&page=${page}&total_pages`);
//     totalPages = data.total_pages;
//     console.log('data', data);
//     console.log('totalPages', totalPages);
//     console.log(page > totalPages);
//     // console.log('hasNextPage', hasNextPage);
//     console.log(page);
//     if (page === totalPages) {
//       Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`, {
//         timeout: 1000,
//       });
//     }
//     return {
//       data,
//       totalPages,
//       // hasNextPage: page > totalPages,
//     };
//   } catch (error) {
//     error => console.log(error);
//   }
// }
// console.log('page', page);
// console.log('totalPages', totalPages);
// export function createData(page, totalPages) {
//   setTimeout(() => {
//     return getFilms(page, totalPages)
//       .then(({ data }) => {
//         console.log(data.results);
//         createFilmoteka(data.results);
//       })
//       .then(withLoader.removeLoader())
//       .catch(error => console.log(error));
//   }, 2000);
// }
// createData(page, totalPages);
// export function createFilmoteka(data) {
//   // reset();
//   console.log('data', data);
//   console.log('data', data);
//   const createFilmoteka = data
//     .map(
//       ({ poster_path, original_title, release_date, genre_ids, id, vote_average }) =>
//         `<li id="galleryModal" class="hp__gallery_el">
//   <a href="#" id="openModal" class='card-links link'>
//      ${
//        poster_path
//          ? `<img class="hp__gallery_img" id="${id}" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
//          : `<img class="hp__gallery_img" id="${id}" src="" data-lazy="${poster}" loading="lazy" alt="Poster is missing"`
//      }>
//       <div class="hp__title-genre_wrapper">
//       <h2 class="film_title">${original_title}</h2><span class="hp__vote_span">${vote_average}</span>
//       </div>
//       <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
//       </a>
//     </li>`,
//     )
//     .join('');
//   films.insertAdjacentHTML('beforeend', createFilmoteka);
//   const img = document.querySelectorAll('#gallery img');
//   lazyLoad(img);
// }
// function reset() {
//   return (films.innerHTML = '');
// }

// pagination.on('afterMove', ({ page }) => {
//   withLoader.addLoader();
//   mediaPagination();

//   reset();
//   createData(page);
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
// function mediaPagination() {
//   if (window.innerWidth <= 480) {
//     options.visiblePages = 4;
//   } else {
//     options.visiblePages = 7;
//   }
// }
// // варіант з функцією  ///////////////////////////////////////////////////////////////
// import axios from 'axios';
// import { makeGenres } from './makeGenres';
// import Notiflix from 'notiflix';
// import { lazyLoad } from './lazyLoad';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
// import * as withLoader from './spinner';

// const films = document.querySelector(`#gallery`);

// let page = 1;
// let totalPages = 0;

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';
// async function getFilms(page) {
//   try {
//     const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&page=${page}&total_pages`);
//     totalPages = data.total_pages;
//     console.log('data', data);
//     console.log('totalPages', totalPages);
//     console.log(page > totalPages);
//     // console.log('hasNextPage', hasNextPage);
//     console.log(page);
//     if (page === totalPages) {
//       Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`, {
//         timeout: 1000,
//       });
//     }
//     return {
//       data,
//       totalPages,
//       // hasNextPage: page > totalPages,
//     };
//   } catch (error) {
//     error => console.log(error);
//   }
// }
// console.log('page', page);
// console.log('totalPages', totalPages);
// export function createData(page, totalPages) {
//   setTimeout(() => {
//     return getFilms(page, totalPages)
//       .then(({ data }) => {
//         console.log(data.results);
//         createFilmoteka(data.results);
//       })
//       .then(withLoader.removeLoader())
//       .catch(error => console.log(error));
//   }, 2000);
// }
// createData(page, totalPages);
// export function createFilmoteka(data) {
//   // reset();
//   console.log('data', data);
//   console.log('data', data);
//   const createFilmoteka = data
//     .map(
//       ({ poster_path, original_title, release_date, genre_ids, id, vote_average }) =>
//         `<li id="galleryModal" class="hp__gallery_el">
//   <a href="#" id="openModal" class='card-links link'>
//      ${
//        poster_path
//          ? `<img class="hp__gallery_img" id="${id}" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
//          : `<img class="hp__gallery_img" id="${id}" src="" data-lazy="${poster}" loading="lazy" alt="Poster is missing"`
//      }>
//       <div class="hp__title-genre_wrapper">
//       <h2 class="film_title">${original_title}</h2><span class="hp__vote_span">${vote_average}</span>
//       </div>
//       <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
//       </a>
//     </li>`,
//     )
//     .join('');
//   films.insertAdjacentHTML('beforeend', createFilmoteka);
//   const img = document.querySelectorAll('#gallery img');
//   lazyLoad(img);
//   // пагинация........ CALL PAGINATION...............................................
//   paginationTrend();
//   // ................................................
// }
// // ......f() PAGINATION..............................
// function paginationTrend() {
//   const options = {
//     totalItems: 1000,
//     visiblePages: '',
//     centerAlign: true,
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   };
//   mediaPagination();
//   const container = document.getElementById('pagination');
//   // ...INICIAL......................................................
//   const paginationTrend = new Pagination(container, options);
//   // .............................................................

//   // ...PAGINATION ON..............................................
//   paginationTrend.on('afterMove', event => {
//     const currentPage = event.page;
//     withLoader.addLoader();
//     mediaPagination();
//     reset();
//     createData(currentPage);
//     console.log(currentPage);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
//   pagination.off('afterMove', ({ page }) => {
//     createData(page);
//   });
//   // paginationTrend.on('afterMove', ({ page }) => {
//   //   withLoader.addLoader();
//   //   mediaPagination();

//   //   reset();
//   //   createData(page);
//   //   window.scrollTo({ top: 0, behavior: 'smooth' });
//   // });
//   // ..............................................................
//   // ............f() for media.................
//   function mediaPagination() {
//     if (window.innerWidth <= 480) {
//       options.visiblePages = 4;
//     } else {
//       options.visiblePages = 7;
//     }
//   }
//   // // ...PAGINATION OFF.....можно использовать эту .......................................
//   // paginationTrend.off(container, ({ page }) => {
//   //   return createData(page);
//   // });

//   // //  ......  или эту. ......................
//   // paginationTrend.off(container, createData());

//   // // .............................................................
// }
// // .END PAGINATION..........................................

// //.......... RESET........................................................
// function reset() {
//   return (films.innerHTML = '');
// }
// версія що працює.без функції.......................................................................
import axios from 'axios';
import { makeGenres } from './makeGenres';
import Notiflix from 'notiflix';
import { lazyLoad } from './lazyLoad';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as withLoader from './spinner';

const films = document.querySelector(`#gallery`);

let page = 1;
let totalPages = 0;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';
async function getFilms(page) {
  try {
    const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&page=${page}&total_pages`);
    totalPages = data.total_pages;
    console.log('data', data);
    console.log('totalPages', totalPages);
    console.log(page > totalPages);
    // console.log('hasNextPage', hasNextPage);
    console.log(page);
    if (page === totalPages) {
      Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`, {
        timeout: 1000,
      });
    }
    return {
      data,
      totalPages,
      // hasNextPage: page > totalPages,
    };
  } catch (error) {
    error => console.log(error);
  }
}
console.log('page', page);
console.log('totalPages', totalPages);
export function createData(page, totalPages) {
  setTimeout(() => {
    return getFilms(page, totalPages)
      .then(({ data }) => {
        console.log(data.results);
        createFilmoteka(data.results);
      })
      .then(withLoader.removeLoader())
      .catch(error => console.log(error));
  }, 2000);
}
createData(page, totalPages);
export function createFilmoteka(data) {
  // reset();
  console.log('data', data);
  console.log('data', data);
  const createFilmoteka = data
    .map(
      ({ poster_path, original_title, release_date, genre_ids, id, vote_average }) =>
        `<li id="galleryModal" class="hp__gallery_el">
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
    </li>`,
    )
    .join('');
  films.insertAdjacentHTML('beforeend', createFilmoteka);
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
  paginationTrend();
}
function reset() {
  return (films.innerHTML = '');
}

const options = {
  totalItems: 1000,
  visiblePages: '',
  centerAlign: true,
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
mediaPagination();
const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
page = pagination.getCurrentPage();

pagination.on('afterMove', ({ page }) => {
  withLoader.addLoader();
  mediaPagination();

  reset();
  createData(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
function mediaPagination() {
  if (window.innerWidth <= 480) {
    options.visiblePages = 4;
  } else {
    options.visiblePages = 7;
  }
}
