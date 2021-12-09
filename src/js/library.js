import storage from './local-storage';
import card from '../templates/card-library'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '221ed015def0321f18a85f3fc7b4d6fa';


const films = document.querySelector('#gallery');
const buttonWatched = document.querySelector('.header-library__button--watched');
const buttonQueue = document.querySelector('.header-library__button--queue');

let watchedArray = [];
let queueArray = [];
let localQueue = storage.load('queueArray');
console.log(localQueue);
let localWatched = storage.load('watchedArray');
console.log(localWatched);


buttonWatched.addEventListener('click', showFilmsWatched);
buttonQueue.addEventListener('click', showFilmsQueue);

films.addEventListener('click', addFilmsToWathedInLocal);
films.addEventListener('click', addFilmsToQueueInLocal);

// Функция добавляет просмотренные фильмы в локальное хранилище

function addFilmsToWathedInLocal(e) {
  if (!e.target.className.includes("button-watched-modal-window")) {
    return;
  }
  const idBtn = Number(e.target.id);
  const i = watchedArray.indexOf(idBtn);
  if (i === -1) {
    watchedArray = storage.load('watchedArray') || [];
    watchedArray.push(idBtn);
    e.target.innerHTML = `REMOVE FROM WATCHED`
    e.target.classList.remove('button--active')

  } 
  else {
    watchedArray.splice(i, 1);
    e.target.innerHTML = `ADD TO WATCHED`
    e.target.classList.add('button--active')
  }
  return storage.save('watchedArray', watchedArray);

}

// Функция добавляет в очередь фильмы в локальное хранилище

function addFilmsToQueueInLocal(e) {
  if (!e.target.className.includes("button-queue-modal-window")) {
    return;
  }
  const idBtn = Number(e.target.id);
  const i = queueArray.indexOf(idBtn);

  if (i === -1) {
    queueArray = storage.load('queueArray') || [];
    queueArray.push(idBtn);
    e.target.innerHTML = `REMOVE FROM QUEUE`
    e.target.classList.remove('button--active')


  } 
  else {
    queueArray.splice(i, 1);
    e.target.innerHTML = `ADD TO QUEUE`
    e.target.classList.add('button--active')

  }
  return storage.save('queueArray', queueArray);
}

// Рисует карточки с просмотренными фильмами в библиотеке (вкладка "просмотренные")

export function showFilmsWatched() {
  films.innerHTML = ``;
  localWatched = storage.load('watchedArray')
  if (!localWatched || (!localWatched[0] && !localWatched[1])) {
    return `Упс еще ничего нет`
  } 
  for (let id of localWatched) {
    fetchById(id).then(film => {
      renderFilms(film);
    });
    console.log(id);
}}

// Рисует карточки с просмотренными фильмами в библиотеке (вкладка "в очереди")


function showFilmsQueue() {
  films.innerHTML = ``;
  localQueue = storage.load('queueArray')

  if (!localWatched || (!localWatched[0] && !localWatched[1])) {
    console.log(`Упс еще ничего нет`);
  } else {  for (let id of localQueue) {
   fetchById(id).then(result => {
      renderFilms(result);
      console.log(result);

    });
  }
}}

// Запрос на бэк за айди фильмов

async function fetchById(id) {

  try {
    const {data} = await axios.get(`movie/${id}?api_key=${API_KEY}`) ;
    const result = {
      ...data,
      year: data.release_date?data.release_date.substr(0, 4):''
    };
    return result
  } catch (error) {
    console.log(`ERROR`)
  }
}

// Функция рисует картотеку с фильмами

function renderFilms(data) {
  films.insertAdjacentHTML('beforeend', card(data));
}

// Функция проверяет есть ли такое ID в storage

function idInStorage(id, list) {
  let arrList = [];
  let localListJson = storage.load(list);
  if (localListJson) {
    arrList = [...localListJson];
  }
  const listSet = new Set(arrList);
  return listSet.has(id);}
