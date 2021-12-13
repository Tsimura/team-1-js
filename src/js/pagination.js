import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import { buttonWatched } from './library';
import { films } from './library';
// const films = document.querySelector('#gallery');
import { reset } from './library';

// // пагинация для Librery .........................
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
    page,
    itemsPerPage: 2,
    centerAlign: true,
    visiblePages,
  };

  // const container = document.getElementById('tui-pagination-container');
  const container = document.getElementById('pagination');
  const pagination = new Pagination(container, options);

  pagination.getCurrentPage();
  pagination.on('afterMove', page => {
    reset();
    showFilmsWatched(localWatched);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// export function paginationTrend() {
//   let page = 1;
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
//   const pagination = new Pagination(container, options);
//   page = pagination.getCurrentPage();
//   // createData(page, totalPages);
//   pagination.on('afterMove', ({ page }) => {
//     withLoader.addLoader();
//     mediaPagination();

//     reset();
//     createData(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
//   function mediaPagination() {
//     if (window.innerWidth <= 480) {
//       options.visiblePages = 4;
//     } else {
//       options.visiblePages = 7;
//     }
//   }
// }
