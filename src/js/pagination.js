// код с файла ///////////////////////////////////////////
import axios from 'axios';
let page = 1;
let totalPages;
export async function getFilms(page) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`);

    totalPages = data.total_pages;
    console.log('data', data);
    console.log('totalPages', totalPages);
    console.log(page > totalPages);
    console.log(hasNextPage);
    return {
      data,
      hasNextPage: page > totalPages,
    };
  } catch (error) {
    error => console.log(error);
  }
}
// new 11.12///////////////////////////////////////////
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { createData } from './createFilmoteka';
import { reset } from './createFilmoteka';

import * as withLoader from './spinner';

let page = 1;
const mediaQuery = window.matchMedia('(max-width: 768px)');

// import { getFilms } from './getFilms';


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

console.log(mediaPagination());
const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
page = pagination.getCurrentPage();
createData(page, totalPages);
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
// еще раз попробовать использовать этот код
// / let widthMatch = window.onresize('(min-width = 480px)');
// console.log(widthMatch);
// widthMatch.addEventListener('change', mediaPagination);
// function mediaPagination() {
//   if (window.innerWidth.matches) {
//     options.visiblePages = 4;
//   } else {
//     options.visiblePages = 7;
//   }
// }
// widthMatch(window.innerWidth);

// // оновлення без перезавантаження !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var currentLocation = window.location.href;
// console.log(currentLocation);
// document.querySelector('body').innerHTML = currentLocation;
//     // end перевірити чи працює !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// window.location.href;
//  визуалочка.....................................
// getFilms(page)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// console.log(totalPages);
// getFilms(page)
//   .then(totalPages => console.log(totalPages))
//   .catch(error => console.log(error));
