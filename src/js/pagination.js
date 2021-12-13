// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { buttonWatched } from './library';
// // import { films } from './library';
// // const films = document.querySelector('#gallery');
// import { reset } from './library';

// // пагинация для Librery .........................
// export function paginationWatched(localWatched) {
//   let page;
//   let visiblePages = 3;
//   console.log(localWatched);
//   console.log(localWatched.length);
//   if (localWatched.length <= 2) {
//     page = 1;
//   }
//   page = Math.floor(localWatched.length / 2);
//   console.log(page);
//   console.log(localWatched);
//   if (visiblePages > page) {
//     visiblePages = page;
//   }
//   const options = {
//     // page,
//     itemsPerPage: 2,
//     // centerAlign: true,
//     visiblePages,
//   };

//   // const container = document.getElementById('tui-pagination-container');
//   //   const container = document.getElementById('pagination');
//   const container = document.getElementById('tui-pagination-container');
//   const pagination = new Pagination(container, options);

//   pagination.getCurrentPage();
//   pagination.on('afterMove', page => {
//     // films.innerHTML = ``;
//     reset();
//     showFilmsWatched(localWatched);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// }
