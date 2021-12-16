// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { films } from './library';
// import { reset } from './library';

// // // пагинация для Librery paginationWatched .........................
// let page;
// let visiblePages = 7;
// const itemsPerPage = 2;

// console.log(localWatched);
// console.log(localWatched.length);
// if (localWatched.length <= itemsPerPage) {
//   page = 1;
//   // paginationWatched.off(container, showFilmsWatched(localWatched));
// }
// page = Math.floor(localWatched.length / itemsPerPage);
// console.log(page);
// console.log(localWatched);
// if (visiblePages > page) {
//   visiblePages = page;
// }
// console.log(page);
// const options = {
//   page,
//   itemsPerPage,
//   centerAlign: true,
//   visiblePages,
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

// const container = document.getElementById('pagination');
// // const paginationWatched = new Pagination(container, options);

// paginationWatched.getCurrentPage();
// paginationWatched.on('afterMove', localWatched => {
//   reset();
//   // pagination.classList.add('is-hidden');
//   localWatched = storage.load('watchedArray');
//   films.removeAttribute('style');

//   if (!localWatched || (!localWatched[0] && !localWatched[1])) {
//     films.style.cssText = `grid-template-columns: repeat(1, 1fr); widht: 100%; height: 100%; margin: 0 auto; justify-items: center;`;
//     films.innerHTML = `<img class="img-for-library" src='${popcornImg}'  loading="lazy">`;
//     return Notiflix.Notify.info(`Oops, you haven't added anything to the watched ones yet.`, {
//       position: 'center-top',
//     });
//   }
//   Notiflix.Notify.success(`You have ${localWatched.length} movies on your list of watched`, {
//     position: 'center-top',
//   });

//   for (let id of localWatched) {
//     fetchById(id).then(film => {
//       renderFilms(film);
//     });
//   }
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // end пагинация для Librery paginationWatched.....................................................

// // пагинация paginationSuarch.....................................................
// const options = {
//   page,
//   totalItems,
//   visiblePages: 5,
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
// // const paginationSearch = new Pagination(container, options);
// // page = paginationSearch.getCurrentPage();
// paginationSearch.on('afterMove', evt => {
//   const page = evt.page;
//   consol.log(evt.page);
//   mediaPagination();
//   window.scrollTo({ top: 0, behavior: 'smooth' });
//   searchForm = evt.currentTarget.elements.searchQuery.value;
//   // console.log(searchForm);
//   evt.preventDefault();
//   reset();
//   withLoader.addLoader();
//   paginationBtn.classList.add(`visually-hidden`);
//   if (searchForm.length === 0) {
//     Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
//     setTimeout(() => {
//       getFilms(page)
//         .then(createFilmoteka)
//         .then(withLoader.removeLoader())
//         .then(paginationBtn.classList.remove(`visually-hidden`))
//         .catch(error => console.log(error));
//       return;
//     }, 2000);
//   }
// });

// function mediaPagination() {
//   if (window.innerWidth <= 480) {
//     options.visiblePages = 4;
//   } else {
//     options.visiblePages = 7;
//   }
// }

// paginationSearch.off(container, evt => {
//   const page = evt.page;
//   consol.log(evt.page);
//   mediaPagination();
//   window.scrollTo({ top: 0, behavior: 'smooth' });
//   searchForm = evt.currentTarget.elements.searchQuery.value;
//   // console.log(searchForm);
//   evt.preventDefault();
//   reset();
//   withLoader.addLoader();
//   paginationBtn.classList.add(`visually-hidden`);
//   if (searchForm.length === 0) {
//     Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
//     setTimeout(() => {
//       getFilms(page)
//         .then(createFilmoteka)
//         .then(withLoader.removeLoader())
//         .then(paginationBtn.classList.remove(`visually-hidden`))
//         .catch(error => console.log(error));
//       return;
//     }, 2000);
//   }
// });

// // end пагинация paginationSuarch.....................................................

// // const options = {
// //   totalItems: 1000,
// //   visiblePages: '',
// //   centerAlign: true,
// //   template: {
// //     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
// //     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
// //     moveButton:
// //       '<a href="#" class="tui-page-btn tui-{{type}}">' +
// //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //       '</a>',
// //     disabledMoveButton:
// //       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
// //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //       '</span>',
// //     moreButton:
// //       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
// //       '<span class="tui-ico-ellip">...</span>' +
// //       '</a>',
// //   },
// // };
// // mediaPagination();
// // // const paginationTrend = new Pagination(container, options);
// // page = paginationTrend.getCurrentPage();

// // paginationTrend.on('afterMove', ({ page, totalPages }) => {
// //   reset();
// //   mediaPagination();
// //   withLoader.addLoader();
// //   paginationBtn.classList.add('visually-hidden');
// //   window.scrollTo({ top: 0, behavior: 'smooth' });
// //   setTimeout(() => {
// //     return getFilms(page, totalPages)
// //       .then(({ data }) => {
// //         createFilmoteka(data.results);
// //       })
// //       .then(withLoader.removeLoader())
// //       .then(paginationBtn.classList.remove('visually-hidden'))
// //       .catch(error => console.log(error));
// //   }, 2000);
// // });

// // // paginationTrend.off(container, ({ page, totalPages }) => {
// // //   reset();
// // //   mediaPagination();
// // //   withLoader.addLoader();
// // //   paginationBtn.classList.add('visually-hidden');
// // //   window.scrollTo({ top: 0, behavior: 'smooth' });
// // //   setTimeout(() => {
// // //     return getFilms(page, totalPages)
// // //       .then(({ data }) => {
// // //         createFilmoteka(data.results);
// // //       })
// // //       .then(withLoader.removeLoader())
// // //       .then(paginationBtn.classList.remove('visually-hidden'))
// // //       .catch(error => console.log(error));
// // //   }, 2000);
// // // });

// // function mediaPagination() {
// //   if (window.innerWidth <= 480) {
// //     options.visiblePages = 4;
// //   } else {
// //     options.visiblePages = 7;
// //   }
// // }
