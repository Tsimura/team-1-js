import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const films = document.querySelector(`#gallery`);

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();
console.log(page);

getFilms(page)
  .then(createFilmoteka)
  .catch(error => console.log(error));

pagination.on('afterMove', ({ page }) =>
  getFilms(page)
    .then(createFilmoteka)
    .catch(error => console.log(error)),
);
getFilms(page).then(({ total }) => {
  console.log(page);
  console.log(total);
  pagination.reset(total);
});
function getFilms(page) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
  return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`).then(response => {
    if (!response.ok) {
      throw new Error(`Error fetching data`);
    }
    return response.json();
  });
}

function createFilmoteka(resp) {
  console.log(resp);
  console.log(resp.results);
  console.log(resp.results.length);

  resp.results.map(data => {
    return films.insertAdjacentHTML(`beforeend`, articles(data));
  });
}

function articles({ poster_path, original_title, release_date, genre_ids }) {
  return `<div id="gallery" class="hp__gallery_el">
      <div class="hp__gallery_img-wrapper"><img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" ></div>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${genre_ids} | <span>${release_date.substr(0, 4)}</span></p>

    </div>`;
}
