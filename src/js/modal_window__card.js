import { films } from "./trending_films";
import { createFilmoteka } from "./trending_films";
import { onSearch } from "./trending_films";
import { articles } from "./trending_films";
import { getFilms } from "./getFilms";
import { makeGenres } from "./makeGenres"
import { genreId } from "./makeGenres"
import { genreNumbers } from "./makeGenres"

import axios from "axios";
import Notiflix from 'notiflix';

import * as basicLightbox from 'basiclightbox'

let moviId = '';


const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

films.addEventListener('click', handleModalCardOpen);
  
function handleModalCardOpen(event) {
  if (event.target.nodeName !== 'IMG') return;
  moviId = event.target.id;
  // console.log(moviId);
  modalWindowAPI(moviId).then(markUpModal()).catch(error => console.log(error))
  console.log('Модалка с карточкой фильма открыта');
  
  event.preventDefault()
  // instance.show();
  
}
async function modalWindowAPI(moviId) {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${moviId}?api_key=${KEY_API}&language=en-US`)
      
      console.log('data:', data);
      console.log('data.poster_path:', data.poster_path);
      console.log('data.title:', data.title);
      console.log('data.vote_count:', data.vote_count);
      console.log('data.popularity:', data.popularity);
      console.log('data.original_title:', data.original_title);
      console.log('data.overview:', data.overview);
      console.log('data.id:', data.id);
      
      return data;
          
        
    } catch (error) {
        error => console.log(error);
    }
}

function markUpModal() {
  films.onclick = ({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, id }) => {
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
    
</ul>
</div>
<h3 class="modal-window-about">About</h3>
<p class="modal-window-description">${overview}</p>
<div class="btn-menu-module-card">
<button id="${id}" class="btn-watched-modal-window">add to Watched</button>
<button id="${id}" class="btn-queue-modal-window">add to queue</button>
         </div>
        </div>
    </div>
</div>`).show();
  }
}


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

// function markUpModal(data) {
//   const markUp = data.map(({ poster_path, title, vote_average, vote_count, popularity, original_title, overview }) =>
//     `
// <div class="modal">
//     <div class="film-card-modal-window">
//         <button class="close-modal-window-btn" data-modal-card-close>
//             <svg class="icon-close-modal">
//                 <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
//                 </use>
//             </svg>
//         </button>
//         <img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
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
//             <div class="btn-menu-module-card">
//                 <button id="${id}" class="btn-watched-modal-window">add to Watched</button>
//                 <button id="${id}" class="btn-queue-modal-window">add to queue</button>
//             </div>
//         </div>
//     </div>
// </div>`
//   )
//   .join('');

// films.insertAdjacentHTML('beforeend', markUp)
// markUp.show()
  
// }
// modalWindowAPI(moviId).then(data => console.log(data.results))
// modalWindowAPI().then(data => console.log(data)).catch(error => console.log(error));


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



// function handleKeydown({key}) {
//   switch (key) {
//    case 'Escape':
//       instance.close();
//       console.log('Модалка с карточкой фильма закрыта кнопкой "ESC"');
//       window.removeEventListener('keydown', handleKeydown);
//       break;
    
//     default:
//       alert('Что-то пошло не так!');
//   }
// }


// function setOriginalUrl(url) {
//   instance.element().querySelector("moviId").src = url;
//   console.log(url);
//   return;
// }
//       console.log('Модалка с карточкой фильма закрыта кнопкой "Х"');

// /* <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li> */

