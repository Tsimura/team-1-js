const films = document.querySelector(`#gallery`);
const chooseFromPagination = document.querySelector(`#pagination`);
let numberOfPage = 1;
const filmPerPage = 20;
const AllPages = 1000;
let firstCurrentPage = 1;
let lastCurrentPage = Number(chooseFromPagination.childNodes[11].textContent);
console.log(Number(lastCurrentPage));
let prevew = document.querySelector('ul > li:first-child');
console.log(prevew);
const firstPageEl = document.querySelector(`.first`);
console.log(chooseFromPagination.childNodes[3]);
console.log(chooseFromPagination.childNodes);
console.log(chooseFromPagination.childNodes[11]);
console.log(firstPageEl.textContent);
console.log(firstPageEl);
const nextPageEl = document.querySelector(`.next`);
console.log(chooseFromPagination);
console.log(nextPageEl);
chooseFromPagination.addEventListener('click', onClick);
function reset() {
  console.log('сброс');
  films.innerHTML = '';
}
function onClick(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'A') {
    return;
  }
  if (e.target.textContent !== 1) {
    reset();
  }

  const currentPage = document.querySelector('.active');
  currentPage.classList.remove('active');
  if (currentPage) {
    console.log(currentPage);
    currentPage.classList.remove('active');
  }
  e.target.classList.add('active');
  console.log(e.target.classList.contains('next'));
  const isNextPage = e.target.classList.contains('next');
  numberOfPage = e.target.textContent;

  if (isNextPage) {
    console.log(e.target.classList.value);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.currentTarget);
    const newPage = document.createElement('button');
    newPage.textContent = `${lastCurrentPage + 1}`;
    chooseFromPagination.childNodes.className;
    // let notes = null;
    //     for (let i = 0; i < chooseFromPagination.childNodes.length; i++) {
    //   chooseFromPagination.childNodes[i].className
    //   // if (chooseFromPagination.childNodes[i].className == 'filmname') {
    //   //   notes = elements.childNodes[i];
    //   //   break;
    //   }
    // }
    lastCurrentPage += 1;
    firstCurrentPage += 1;
    console.log(e.target.textContent === firstCurrentPage);

    // nextPageEl.befor();

    nextPageEl.before(newPage);
    // chooseFromPagination.removeChild(chooseFromPagination.firstPageEl);
    // firstPageEl.parentNode.removeChild(firstPageEl);
    chooseFromPagination.childNodes[3].remove();
    // chooseFromPagination.removeChild(firstPageEl);
    // firstPageEl.remove();
    console.log(e.target.classList.value);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.currentTarget);
    return getFilms(numberOfPage)
      .then(createFilmoteka)
      .catch(error => console.log(error));
    // list.removeChild(list.firstChild);
    // app.removeChild(app.firstChild);
    // app.firstChild.remove();
    // lastCurrentPage;
  }
  const previousPageEl = document.querySelector(`.previous`);

  const isPreviousPageEl = e.target.classList.contains('isPreviousPageEl');

  if (isPreviousPageEl) {
    // console.log(e.target.classList.value);
    // console.log(e.target);
    // console.log(e.target.textContent);
    // console.log(e.currentTarget);
    const newFirstPage = document.createElement('button');
    newFirstPage.textContent = `${firstCurrentPage}`;

    firstCurrentPage -= 1;
    // lastCurrentPage += 1;
    // console.log(e.target.textContent === firstCurrentPage);

    // nextPageEl.befor();

    previousPageEl.before(newFirstPage);
    console.log(chooseFromPagination.childNodes[11]);
    chooseFromPagination.childNodes[11].remove();

    // firstPageEl.remove();
    // lastCurrentPage;
  }

  console.log(numberOfPage);
  console.log(chooseFromPagination);
  // console.log(e.currenTarget.elements);
  console.log(numberOfPage);
  return getFilms(numberOfPage)
    .then(createFilmoteka)
    .catch(error => console.log(error));
}
getFilms(numberOfPage)
  .then(createFilmoteka)
  .catch(error => console.log(error));
// getFilms()
//   .then(createFilmoteka)
//   .catch(error => console.log(error));

// getAxiosTag(surchtags, page).then(photos => {
//     renderPhotos(photos.hits);
// {
//   for (var i = 0, len = data.length; i < len; i++) {
//     data[i].href = data[i].href;
//   }
// }
const genreId = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

function getFilms() {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
  return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${numberOfPage}`).then(response => {
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

function makeGenres(numbers) {
  const genreName = genreId.filter(data => {
    for (let number of numbers) {
      if (data.id === number) {
        return data;
      }
    }
  });
  const genreNumbers = genreName.map(data => data.name);
  if (genreNumbers.length >= 3) {
    const prune = genreNumbers.slice(0, 2);
    const newGenres = [...prune, `Other`];
    return newGenres.join(', ');
  } else {
    return genreNumbers.join(', ');
  }
}

function articles({ poster_path, original_title, release_date, genre_ids }) {
  return `<div id="gallery" class="hp__gallery_el">
      <div class="hp__gallery_img-wrapper"><img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" ></div>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${genre_ids} | <span>${release_date.substr(0, 4)}</span></p>

    </div>`;
}
