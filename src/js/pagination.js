import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { buttonWatched } from './library';
// import { films } from './library';
// const films = document.querySelector('#gallery');
import { reset } from './library';
// paginationWatched(localWatched);
// добавлена ф-ия для подсчета количества страниц Librery для пагинации.........................

export function paginationWatched(localWatched) {
  let page;
  let visiblePages = 3;
  console.log(localWatched);
  console.log(localWatched.length);
  if (localWatched.length <= 2) {
    page = 1;
  }
  page = Math.floor(localWatched.length / 2);
  console.log(page);
  console.log(localWatched);
  if (visiblePages > page) {
    visiblePages = page;
  }
  const options = {
    // page,
    itemsPerPage: 2,
    // centerAlign: true,
    visiblePages,
  };

  // const container = document.getElementById('tui-pagination-container');
  //   const container = document.getElementById('pagination');
  const container = document.getElementById('tui-pagination-container');
  const pagination = new Pagination(container, options);

  pagination.getCurrentPage();
  pagination.on('afterMove', page => {
    // films.innerHTML = ``;
    reset();
    showFilmsWatched(localWatched);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// nj-nj gjikj yt nfr
// let page;
// export function paginationWatched(localWatched) {
//   console.log(localWatched);
//   console.log(localWatched.length);
//   if (localWatched.length <= 2) {
//     page = 1;
//   }
//   totalItems = localWatched.length;
//   page = Math.floor(localWatched.length / 2);
//   console.log(page);
//   console.log(localWatched);
//   const options = {
//     totalItems,
//     page,
//     itemsPerPage: 2,
//     centerAlign: true,
//     visiblePages: 3,
//   };
//   // const container = document.getElementById('tui-pagination-container');
//   //   const container = document.getElementById('pagination');
//   const container = document.getElementById('tui-pagination-container');
//   const pagination = new Pagination(container, options);

//   page = pagination.getCurrentPage();
//   pagination.on('afterMove', page => {
//     // films.innerHTML = ``;
//     showFilmsWatched(localWatched);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// }
// // код с файла ///////////////////////////////////////////
// import axios from 'axios';
// let page = 1;
// let totalPages;
// export async function getFilms(page) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   try {
//     const { data } = await axios.get(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`);

//     totalPages = data.total_pages;

//     console.log('data', data);
//     console.log('totalPages', totalPages);
//     console.log(page > totalPages);
//     console.log(hasNextPage);
//     return {
//       data,
//       hasNextPage: page > totalPages,
//     };
//   } catch (error) {
//     error => console.log(error);
//   }
// }
// new 11.12///////////////////////////////////////////
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { createData } from './create_filmoteka';
// import { createData } from './trending_films';

// import * as withLoader from './spinner';

// let page = 1;
// // const mediaQuery = window.matchMedia('(max-width: 768px)');

// import { getFilms } from './js/create_filmoteka';

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

// console.log(mediaPagination());
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container, options);
// page = pagination.getCurrentPage();
// createData(page, totalPages);
// pagination.on('afterMove', ({ page }) => {
// withLoader.addLoader();
// mediaPagination();

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
// function reset() {
//   return (films.innerHTML = ``);
// }

// // еще раз попробовать использовать этот код
// // / let widthMatch = window.onresize('(min-width = 480px)');
// // console.log(widthMatch);
// // widthMatch.addEventListener('change', mediaPagination);
// // function mediaPagination() {
// //   if (window.innerWidth.matches) {
// //     options.visiblePages = 4;
// //   } else {
// //     options.visiblePages = 7;
// //   }
// // }
// // widthMatch(window.innerWidth);

// // // оновлення без перезавантаження !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // var currentLocation = window.location.href;
// // console.log(currentLocation);
// // document.querySelector('body').innerHTML = currentLocation;
// //     // end перевірити чи працює !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // window.location.href;
// //  визуалочка.....................................
// // getFilms(page)
// //   .then(data => console.log(data))
// //   .catch(error => console.log(error));
// // console.log(totalPages);
// // getFilms(page)
// //   .then(totalPages => console.log(totalPages))
// //   .catch(error => console.log(error));
// /
