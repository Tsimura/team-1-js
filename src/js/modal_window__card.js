import { films } from "./trending_films";
import storage from './local-storage'
import axios from "axios";
import * as basicLightbox from 'basiclightbox'
// import './sass/main.scss';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let moviId = '';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

films.addEventListener('click', handleModalCardOpen);
  
function handleModalCardOpen(event) {
    event.preventDefault()
  if (event.target.nodeName !== 'IMG') return;
  moviId = event.target.id;
  modalWindowAPI(moviId).then(markUpModal).catch(error => console.log(error))
}
  
async function modalWindowAPI(moviId) {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${moviId}?api_key=${KEY_API}&language=en-US`)
        
      // console.log(data);
      return data;
     
        
    } catch (error) {
        error => console.log(error);
    }
}

function getGanres(data) {
    const array = data.genres.flat(2)
    const arrayNames = []
    for (const arr of array) {
      arrayNames.push(arr.name)
      console.log(arrayNames);
      return arrayNames;
    } 
 }



function markUpModal({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, genre, id }) {
  let localWatched = storage.load('watchedArray') || []
  let localQueue = storage.load('queueArray') || []
  const instance = basicLightbox
    .create(
      `<div class="modal">
     <div class="film-card-modal-window">
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
    <li class="modal-window-gener-value list">{getGanres(genre)}</li>
</ul>
</div>
<h3 class="modal-window-about">About</h3>
<p class="modal-window-description">${overview}</p>
<div class="btn-menu-module-card">
<button id="${id}" class="btn-watched-modal-window">${localWatched.includes(id) ? `remove from watched` : `add to watched`}</button>
<button id="${id}" class="btn-queue-modal-window">${localQueue.includes(id) ? `remove from queue` : `add to queue`}</button>
         </div>
        </div>
         <div>
       <iframe class="youtube" src="https://www.youtube.com/embed/nuFgqJcrxB8" title="YouTube video player" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>`, {
      onShow: () => {
        window.addEventListener('keydown', handleKeydown);
        console.log('Модалка с карточкой фильма открыта');
        
      },
      onClose: () => {
        window.removeEventListener('keydown', handleKeydown);
       
      },
    });

  instance.show()

  function handleKeydown({ key }) {
    switch (key) {
        case 'Escape':
        instance.close();
        console.log('Модалка с карточкой фильма закрыта кликом по кнопке "ESC"');
        break;
    
      default:
        alert('Что-то пошло не так!');
    }

  }

  // new SimpleLightbox('.hp__gallery_el a', {
  //   captionDelay: 250,
  //   close: true,

  //  });
//   basicLightbox.option({
//     'disableScrolling': false,

// })
  
          
        //  console.log('Модалка с карточкой фильма закрыта кликом вне области модалки');
  //  console.log('Модалка с карточкой фильма закрыта кликом по кнопке "Х"');
  
}
