import storage from './local-storage';


const films = document.querySelector(`#gallery`);
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');

//

let watchedArray = [];
let queueArray = [];

buttonWatched.addEventListener('click', showFilmsWatched);
buttonQueue.addEventListener('click', showFilmsQueue);


// myLibraryLink.addEventListener('click', showFilms)

// films.addEventListener('click', addFilmsToWathedInLocal);
// films.addEventListener('click', addFilmsToQueueInLocal);
// buttonModalAddToWatched.addEventListener('click', addFilmsToWathedInLocal)
// buttonModalAddToQueue.addEventListener('click', addFilmsToQueueInLocal)

// Функция добавляет просмотренные фильмы в локальное хранилище

function addFilmsToWathedInLocal(e) {
  if (e.target.className !== 'button_watched') {
    return;
  }
  const idBtn = Number(e.target.id);
  const i = watchedArray.indexOf(idBtn);
  if ((i = -1)) {
    watchedArray.push(idBtn);
  } else {
    watchedArray.splice(i, 1);
  }
  watchedArray = storage.load('watchedArray') || [];
  // watchedArray.push(idBtn);

  return storage.save('watchedArray', watchedArray);
}

const localWatched = storage.load('watchedArray');

function showFilmsWatched() {
  films.innerHTML = ``;
  for (let item of localWatched) {
    fetchItem(item).then(film => {
      renderFilms(film);
    });
    console.log(item);
  }
}

// Функция добавляет в очередь фильмы в локальное хранилище

function addFilmsToQueueInLocal(e) {
  if (e.target.className !== 'button_queue') {
    return;
  }
  const idBtn = Number(e.target.id);
  queueArray = storage.load('queueArray') || [];
  queueArray.push(idBtn);
  return storage.save('queueArray', queueArray);
}

const localQueue = storage.load('queueArray');
console.log(localQueue);

function showFilmsQueue() {
  films.innerHTML = ``;
  for (let item of localQueue) {
    fetchItem(item).then(film => {
      renderFilms(film);
    });
    console.log(item);
  }
}

function fetchItem(item) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${item}?api_key=221ed015def0321f18a85f3fc7b4d6fa`,
  ).then(response => response.json());
}

// Функция рисует картотеку с фильмами
function renderFilms(film) {
  films.insertAdjacentHTML('beforeend', articles(film));
}

function articles({ poster_path, original_title, release_date, genre_ids }) {
  const poster = `http://static.everypixel.com/ep-pixabay/0597/0608/0831/32386/5970608083132386502-mistake.png`;
  return `<div id="gallery" class="hp__gallery_el">
      <div class="hp__gallery_img-wrapper">
      ${
        poster_path
          ? `<img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"`
          : `<img class="hp__gallery_img" src="${poster}" alt=""`
      }></div>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${genre_ids} | <span>${release_date.substr(0, 4)}</span></p>
    </div>`;
}

