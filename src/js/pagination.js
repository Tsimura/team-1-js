import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { getFilms } from './getFilms';

import { createFilmoteka } from './trending_films';
const films = document.querySelector(`#gallery`);

const options = {
  totalItems: 1000,
  visiblePages: 7,
  page: 1,
  centerAlign: true,
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();

function reset() {
  return (films.innerHTML = ``);
}
getFilms(page)
  .then(createFilmoteka)
  .catch(error => console.log(error));

pagination.on('afterMove', function ({ page }) {
  reset();
  getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
});

// var pagination = new tui.Pagination('pagination', {
//   totalItems: 500,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}p</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// });
// const img = document.querySelectorAll('.gallery img');
// lazyLoad(img);
// function lazyLoad(targets) {
//   const options = {
//     rootMargin: '100px',
//   };
//   const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.lazy;
//         image.src = src;
//         observer.unobserve(image);
//       }
//     });
//   };
//   const io = new IntersectionObserver(onEntry, options);
//   targets.forEach(target => io.observe(target));
// }

// async function getFilms(page) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   return await fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`).then(response => {
//     if (!response.ok) {
//       throw new Error(`Error fetching data`);
//     }
//     return response.json();
//   });
// }
