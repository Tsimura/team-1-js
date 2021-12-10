import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilms } from './getFilms';
import { createFilmoteka } from './trending_films';
import { films } from './trending_films';

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

export function createData(page) {
  return getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}

function reset() {
  return (films.innerHTML = ``);
}
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
// const mediaQuery = window.matchMedia('(min-width: 320px)');
// if (mediaQuery.matches) {
//   options.visiblePages = 4;
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

// function reset() {
//   return (films.innerHTML = ``);
// }
