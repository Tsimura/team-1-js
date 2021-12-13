import axios from 'axios';
import { makeGenres } from './makeGenres';
// import createFilmoteka from './trending_films';
import Notiflix from 'notiflix';
import * as withSpinner from './spinner';
import { lazyLoad } from './lazyLoad';
// import { fetchTrending } from './sortAPI';
import * as withLoader from './spinner';
const films = document.querySelector(`#gallery`);
import { paginationTrend } from './pagination';
import { buttonWatched } from './library';
import { showFilmsWatched } from './library';

let page = 1;
let totalPages;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

async function getFilms(page) {
  try {
    const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&page=${page}&total_pages`);
    totalPages = data.total_pages;
    page = data.page;
    console.log('data', data);
    console.log('totalPages', totalPages);
    console.log(page > totalPages);
    // console.log('hasNextPage', hasNextPage);
    console.log(page);
    return {
      data,
      // hasNextPage: page > totalPages,
    };
  } catch (error) {
    error => console.log(error);
  }
}
export function createData(page) {
  setTimeout(() => {
    return getFilms(page)
      .then(data => {
        reset();
        createFilmoteka(data);
      })
      .then(withLoader.removeLoader())
      .catch(error => console.log(error));
  }, 2000);
}
createData(page);
// ...............................................
// paginationTrend();
export function createFilmoteka({ data }) {
  console.log('data', data);
  console.log('data', data.results);
  console.log('totalPages', totalPages);
  console.log(page > totalPages);
  // console.log('hasNextPage', hasNextPage);
  console.log(page);
  const createFilmoteka = data.results
    .map(
      ({ poster_path, original_title, release_date, genre_ids, id }) =>
        `<div id="galleryModal" class="hp__gallery_el">
  <a href="#" id="openModal" class='card-links link'>
     ${
       poster_path
         ? `<img class="hp__gallery_img" id="${id}" src="" data-lazy="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}"`
         : `<img class="hp__gallery_img" id="${id}" src="" data-lazy="${poster}" loading="lazy" alt="Poster is missing"`
     }>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      </a>
    </div>`,
    )
    .join('');
  films.insertAdjacentHTML('beforeend', createFilmoteka);
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

function reset() {
  return (films.innerHTML = '');
}

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
// // createData(page, totalPages);
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
// зайвий код з ідеями.....................
// ......!!!!!!!!....................
// trendAPI(page).then(data => render(data));
// function render(data) {
//   console.log(page);
//   console.log(totalPages);
// }
// .................................
// trendAPI(page)
//   .then(data => {
//     console.log(data);
//     console.log(data);
//     makeTrendMarkup(data);
//   })
//   .then(withSpinner.removeLoader)
//   .catch(error => {
//     console.log(error);
//   });
// ..........................
// function createPage() {
//   setTimeout(() => {
//     return trendAPI(page)
//       .then(data => {
//         console.log(data);
//         console.log(data);
//         makeTrendMarkup(data);
//       })
//       .then(withSpinner.removeLoader)
//       .catch(error => {
//         console.log(error);
//       });
//   }, 2000);
// }
// ............................
// async function fetchTrending() {
//   try {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/week?api_key=221ed015def0321f18a85f3fc7b4d6fa&page=1`,
//     );
//     return data;
//   } catch (error) {
//     error => console.log(error);
//   }
// }

// fetchTrending()
//   .then(data => trendingMarkup(data))
//   .then(withSpinner.removeLoader);
//    .............................
