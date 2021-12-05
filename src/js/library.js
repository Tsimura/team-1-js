import storage from './local-storage';
import articles from './trending_films';

const films = document.querySelector(`#gallery`);
const buttonModalAddToWatched = document.querySelector('.button_watched')
const buttonModalAddToQueue = document.querySelector('.button_queue')

let watchedArray = []
let queueArray = []

// myLibraryLink.addEventListener('click', showFilms)

films.addEventListener('click', addFilmsToWathedInLocal);
films.addEventListener('click', addFilmsToQueueInLocal);
buttonModalAddToWatched.addEventListener('click', addFilmsToWathedInLocal)
buttonModalAddToQueue.addEventListener('click', addFilmsToQueueInLocal)

// Функция добавляет просмотренные фильмы в локальное хранилище

function addFilmsToWathedInLocal(e) {
  if (e.target.className !== 'button_watched') {
    return;
  }
    const idBtn = Number(e.target.id);
    watchedArray = storage.load('watchedArray') || [];
    watchedArray.push(idBtn);

    return storage.save('watchedArray', watchedArray);

}

const localWatched = storage.load('watchedArray')

function showFilms() {
    films.innerHTML = ``
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
  
  const localQueue = storage.load('queueArray')
  console.log(localQueue);

  function showFilms() {
    films.innerHTML = ``
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
    films.insertAdjacentHTML('beforeend', articles(film))
  }