
import { films } from "./trending_films";

import { getYouTube } from "./youTube"
import { createFilmoteka } from "./trending_films";
// import { getFilms } from "./getFilms";
// import { makeGenres } from "./makeGenres"
// import { genreId } from "./makeGenres"
import storage from './local-storage'


import axios from "axios";
// import Notiflix from 'notiflix';
import * as basicLightbox from 'basiclightbox'

let localWatched = storage.load('watchedArray') || []
let localQueue = storage.load('queueArray') || []
let moviId = '';


const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

films.addEventListener('click', handleModalCardOpen);
  
function handleModalCardOpen(event) {
    event.preventDefault()
  if (event.target.nodeName !== 'IMG') return;
  moviId = event.target.id;
  // console.log(moviId);
  modalWindowAPI(moviId).then(markUpModal).catch(error => console.log(error))
  // console.log('Модалка с карточкой фильма открыта');
  // getGanres(moviId).then(markUpModal).catch(error => console.log(error))
  // console.log(getGanres(moviId).then(markUpModal));


  // instance.show();
  
}


async function modalWindowAPI(moviId) {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${moviId}?api_key=${KEY_API}&language=en-US`);
      // console.log(data )
 
      return data;
     
        
    } catch (error) {
        error => console.log(error);
    }     
}

function getGanres(data) {
    const array = data.genres.flat(2)
  const arrayNames = [];
    for (const arr of array) {
      arrayNames.push(arr.name)
      console.log(arrayNames);
      return arrayNames;
    } 
 }


// Функция Максима------------------------------------------------

// function makeGenres(numbers) {
//     const genreName = genreId.filter(data => {
//         for (let number of numbers) {
//             if (data.id === number) {
//                 return data
//             }
//         }
//     })
//     const genreNumbers = genreName.map(data => data.name)
//     if (genreNumbers.length >= 3) {
//         const prune = genreNumbers.slice(0, 2)
//         const newGenres = [...prune, `Other`]
//         return newGenres.join(", ")
//     } else {
//         return genreNumbers.join(", ")
//     }
// }

// const genreId = [
// {"id": 28, "name": "Action" },
// {"id":12,"name":"Adventure"},
// {"id":16,"name":"Animation"},
// {"id":35,"name":"Comedy"},
// {"id":80,"name":"Crime"},
// {"id":99,"name":"Documentary"},
// {"id":18,"name":"Drama"},
// {"id":10751,"name":"Family"},
// {"id":14,"name":"Fantasy"},
// {"id":36,"name":"History"},
// {"id":27,"name":"Horror"},
// {"id":10402,"name":"Music"},
// {"id":9648,"name":"Mystery"},
// {"id":10749,"name":"Romance"},
// {"id":878,"name":"Science Fiction"},
// {"id":10770,"name":"TV Movie"},
// {"id":53,"name":"Thriller"},
// {"id":10752,"name":"War"},
// { "id": 37, "name": "Western" }]


function markUpModal({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, genres, id }) {
  
  const genresArr = [...genres];
  const arrayNames = [];
  for (const genre of genresArr) {
    arrayNames.push(genre.name);
  }

    basicLightbox
      .create(
        `<div class="modal">
     <div class="film-card-modal-window">
     <button class="close-modal-window-btn" data-modal-card-close>
<svg class="icon-close-modal">
    <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
    </use>
</svg>
    </button>
<img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
    <div class="modal-window-signature">
    <h2 class="film-title-modal-window">${title}</h2>
    <div class="window-characteristics">
    <ul class="modal-window-characteristics">
    <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
    <li class="modal-window-popularity list">Popularity</li>
    <li class="modal-winwow-original-title list">Original Title</li>
    <li class="modal-window-gener list">Genre</li>
    </ul>

    <ul class="modal-window-characteristics-value">
    <li class="modal-window-vote-value list"><span class="modal-window-vote__span">${vote_average}</span>/&nbsp;&nbsp;${vote_count}</li>
    <li class="modal-window-popularity-value list">${popularity}</li>
    <li class="modal-winwow-original-title-value list">${original_title}</li>
    <li class="modal-window-gener-value list">${arrayNames}</li>
</ul>
</div>
<h3 class="modal-window-about">About</h3>
<p class="modal-window-description">${overview}</p>
<div class="btn-menu-module-card">
<button id="${id}" class="btn-watched-modal-window">${localWatched.includes(id) ? `remove from watched` : `add to watched`}</button>
<button id="${id}" class="btn-queue-modal-window">${localQueue.includes(id) ? `remove from queue` : `add to queue`}</button>
         </div>
        </div>
    </div>
</div>`).show();
  }

  
// function markUpModal({ poster_path, title, release_date, vote_average, vote_count, popularity, original_title, overview, id, genre_ids }) {
//   getYouTube(title, release_date).then(modal)
//   function modal(data) { 
//     const videoOnYouTube = data.items[0].id.videoId
//   basicLightbox
//       .create(
//         `<div class="modal">
//      <div class="film-card-modal-window">
//      <button class="close-modal-window-btn" data-modal-card-close>
// <svg class="icon-close-modal">
//     <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
//     </use>
// </svg>
//     </button>
// <img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
//     <div class="modal-window-signature">
//     <h2 class="film-title-modal-window">${title}</h2>
//     <div class="window-characteristics">
//     <ul class="modal-window-characteristics">
//     <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
//     <li class="modal-window-popularity list">Popularity</li>
//     <li class="modal-winwow-original-title list">Original Title</li>
//     <li class="modal-window-gener list">Genre</li>
//     </ul>
//     <ul class="modal-window-characteristics-value">
//     <li class="modal-window-vote-value list"><span class="modal-window-vote__span">${vote_average}</span>/&nbsp;&nbsp;${vote_count}</li>
//     <li class="modal-window-popularity-value list">${popularity}</li>
//     <li class="modal-winwow-original-title-value list">${original_title}</li>
//     <li class="modal-window-gener-value list">{makeGenres(genre_ids)}</li>
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">${overview}</p>
// <div class="btn-menu-module-card">
// <button id="${id}" class="btn-watched-modal-window">${localWatched.includes(id) ? `remove from watched` : `add to watched`}</button>
// <button id="${id}" class="btn-queue-modal-window">${localQueue.includes(id) ? `remove from queue` : `add to queue`}</button>
//          </div>
//         </div>
//         <div>
//          <iframe class="youtube" src="https://www.youtube.com/embed/${videoOnYouTube}"
//         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>
//     </div>
// </div>`).show();
// } 
// }




// const options = {
//   onShow: () => {
//     window.addEventListener('keydown', handleKeydown);
//     // data.map({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, id })
    
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', handleKeydown);
//     console.log('Модалка с карточкой фильма закрыта кликом вне области модалки');   
//   },
// };




// const instance = basicLightbox.create(`
// <div class="modal">
//     <div class="film-card-modal-window">
//         <button class="close-modal-window-btn" data-modal-card-close>
//             <svg class="icon-close-modal">
//                 <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
//                 </use>
//             </svg>
//         </button>
//         <img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500{data[poster_path]}" alt="Фото фільму">
//     <div class="modal-window-signature">
//     <h2 class="film-title-modal-window">{data.title}</h2>
//     <div class="window-characteristics">
//     <ul class="modal-window-characteristics">
//     <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
//     <li class="modal-window-popularity list">Popularity</li>
//     <li class="modal-winwow-original-title list">Original Title</li>
//     <li class="modal-window-gener list">Genre</li>
//     </ul>
//     <ul class="modal-window-characteristics-value">
//     <li class="modal-window-vote-value list"><span class="modal-window-vote__span">{data.vote_average}</span>/&nbsp;&nbsp;${vote_count}</li>
//     <li class="modal-window-popularity-value list">{data.popularity}</li>
//     <li class="modal-winwow-original-title-value list">{data.original_title}</li>
//     <li class="modal-window-gener-value list">{makeGenres(genre_ids)}</li>
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">{data.overview}</p>
//             <div class="btn-menu-module-card">
//                 <button id="{data.id}" class="btn-watched-modal-window">add to Watched</button>
//                 <button id="{data.id}" class="btn-queue-modal-window">add to queue</button>
//             </div>
//         </div>
//     </div>
//  </div>`, options);