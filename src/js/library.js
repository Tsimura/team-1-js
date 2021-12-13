import storage from './local-storage';
import card from '../templates/card-library';
import axios from 'axios';
import popcornImg from '../image/posters/popcorn.png';
import Notiflix from 'notiflix';
import { paginationWatched } from './pagination';
import { lazyLoad } from './lazyLoad';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '221ed015def0321f18a85f3fc7b4d6fa';
const body = document.querySelector('body');

const films = document.querySelector('#gallery');
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');

let watchedArray = [];
let queueArray = [];
let localQueue = storage.load('queueArray');
let localWatched = storage.load('watchedArray');

buttonWatched.addEventListener('click', showFilmsWatched);
buttonQueue.addEventListener('click', showFilmsQueue);

body.addEventListener('click', addFilmsToWathedInLocal);
body.addEventListener('click', addFilmsToQueueInLocal);

// Функция добавляет просмотренные фильмы в локальное хранилище

function addFilmsToWathedInLocal(e) {
  if (!e.target.className.includes('btn-watched-modal-window')) {
    return;
  }
  watchedArray = storage.load('watchedArray') || [];
  const idBtn = Number(e.target.id);
  let i = watchedArray.indexOf(idBtn);

  if (i === -1) {
    watchedArray.push(idBtn);
    e.target.innerHTML = `REMOVE FROM WATCHED`;
    Notiflix.Notify.success(`You have added a movie to the watched`, {
      position: 'center-top',
    });
  } else {
    watchedArray.splice(i, 1);
    e.target.innerHTML = `ADD TO WATCHED`;
    Notiflix.Notify.warning(`You have removed a movie from the list of watched`, {
      position: 'center-top',
    });
  }
  return storage.save('watchedArray', watchedArray);
}

// Функция добавляет в очередь фильмы в локальное хранилище

function addFilmsToQueueInLocal(e) {
  if (!e.target.className.includes('btn-queue-modal-window')) {
    return;
  }
  queueArray = storage.load('queueArray') || [];
  const idBtn = Number(e.target.id);
  const i = queueArray.indexOf(idBtn);

  if (i === -1) {
    queueArray.push(idBtn);
    e.target.innerHTML = `REMOVE FROM QUEUE`;
    Notiflix.Notify.success(`You have added a movie to the queue`, { position: 'center-top' });
  } else {
    queueArray.splice(i, 1);
    e.target.innerHTML = `ADD TO QUEUE`;
    Notiflix.Notify.warning(`You have removed a movie from the list of queue`, {
      position: 'center-top',
    });
  }
  return storage.save('queueArray', queueArray);
}

// Рисует карточки с просмотренными фильмами в библиотеке (вкладка "просмотренные")

export function showFilmsWatched(localWatched) {
  films.innerHTML = ``;
  localWatched = storage.load('watchedArray');
  if (!localWatched || (!localWatched[0] && !localWatched[1])) {
    films.style.cssText = `grid-template-columns: repeat(1, 1fr); widht: 100%; height: 100%; margin: 0 auto; justify-items: center;`;
    films.innerHTML = `<img class="img-for-library" src='' data-lazy='${popcornImg}' loading="lazy">`;
    return Notiflix.Notify.info(`Oops, you haven't added anything to the watched ones yet.`, {
      position: 'center-top',
    });
  }
  Notiflix.Notify.success(`You have ${localWatched.length} movies on your list of watched`, {
    position: 'center-top',
  });

  for (let id of localWatched) {
    fetchById(id).then(film => {
      renderFilms(film);
    });
  }
  // пагинация................................................
  paginationWatched(localWatched);
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

// Рисует карточки с просмотренными фильмами в библиотеке (вкладка "в очереди")

function showFilmsQueue() {
  films.innerHTML = ``;
  localQueue = storage.load('queueArray');

  if (!localQueue || (!localQueue[0] && !localQueue[1])) {
    films.style.cssText = `grid-template-columns: repeat(1, 1fr); widht: 100%; height: 100%; margin: 0 auto; justify-items: center;`;
    films.innerHTML = `<img class="img-for-library" src='' data-lazy='${popcornImg}' loading="lazy">`;
    return Notiflix.Notify.info(`Oops, you haven't added anything to the queue ones yet.`, {
      position: 'center-top',
    });
  }
  Notiflix.Notify.success(`You have ${localQueue.length} movies on your list of queue`, {
    position: 'center-top',
  });
  for (let id of localQueue) {
    fetchById(id).then(result => {
      renderFilms(result);
    });
  }
  const img = document.querySelectorAll('#gallery img');
  lazyLoad(img);
}

// Запрос на бэк за айди фильмов

async function fetchById(id) {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    const result = {
      ...data,
      year: data.release_date ? data.release_date.substr(0, 4) : '',
    };
    return result;
  } catch (error) {
    console.log(`ERROR`);
  }
}

// Функция рисует картотеку с фильмами

function renderFilms(data) {
  films.insertAdjacentHTML('beforeend', card(data));
}
export function reset() {
  return (films.innerHTML = ``);
}
