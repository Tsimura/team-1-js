import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilms } from './getFilms';
import { createFilmoteka } from './trending_films';
import { films } from './trending_films';

export function createData(page) {
  return getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}
let page = 1;
const options = {
  totalItems: 1000,
  visiblePages: 7,
  centerAlign: true,
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
page = pagination.getCurrentPage();

createData(page);

pagination.on('afterMove', ({ page }) => {
  reset();
  createData(page);
  // .getFilms(page)
  // .then(createFilmoteka)
  // .catch(error => console.log(error));
});

function reset() {
  return (films.innerHTML = ``);
}

// var pagination = new tui.Pagination('pagination', {
//     totalItems: 500,
//     template: {
//         page: '<a href="#" class="tui-page-btn">{{page}}p</a>',
//         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
//         moveButton:
//             '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
//                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
//             '</a>',
//         disabledMoveButton:
//             '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
//                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
//             '</span>',
//         moreButton:
//             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
//                 '<span class="tui-ico-ellip">...</span>' +
//             '</a>'
//     }
// });

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
