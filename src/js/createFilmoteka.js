import Notiflix from 'notiflix';
import poster from '../image/posters/poster.jpg';
import { lazyLoad } from './lazyLoad';
import { makeGenres } from './makeGenres';
import { getFilms } from './getFilms';
import { articles } from './trending_films';
const films = document.querySelector(`#gallery`);

export function createData(page) {
  return getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}
export function createFilmoteka(resp) {
  // console.log(resp);
  // console.log(resp.total_pages);
  // console.log(resp.page);
  if (resp.total_pages < resp.page) {
    Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
  }
  if (resp.results.length === 0) {
    Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
    createData(page);
  } else {
    resp.results.map(data => {
      return films.insertAdjacentHTML(`beforeend`, articles(data));
    });
  }
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

export function reset() {
  return (films.innerHTML = ``);
}
