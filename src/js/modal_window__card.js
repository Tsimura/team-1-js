import storage from './local-storage'
import axios from "axios";
import * as basicLightbox from 'basiclightbox'
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let moviId = '';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

// const closeBtn = document.querySelector('.btn_close_modal')
const newFilms = document.querySelector(`#gallery`);

newFilms.addEventListener('click', handleModalCardOpen);
  
function handleModalCardOpen(event) {
    event.preventDefault()
  if (event.target.nodeName !== 'IMG') return;
  moviId = event.target.id;
  modalWindowAPI(moviId).then(markUpModal).catch(error => console.log(error))
  // closeBtn.addEventListener('click', handleCloseModalCardBtn)
}
  
async function modalWindowAPI(moviId) {
    try {
       const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${moviId}?api_key=${KEY_API}&language=en-US`)
       return data;
       } catch (error) {
        error => console.log(error);
    }
}

function markUpModal({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, genres, id }) {
  let localWatched = storage.load('watchedArray') || []
  let localQueue = storage.load('queueArray') || []
  const genresArr = [...genres];
  const arrayNames = [];
  for (const genre of genresArr) {
    arrayNames.push(genre.name);
  }
  const instance = basicLightbox
    .create(
      `<div class="modal">
     <div class="film-card-modal-window">
     <button class="close-modal-window-btn">х
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
    <li class="modal-window-gener-value list">${arrayNames.join(', ')}</li>
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
       console.log('Модалка с карточкой фильма закрыта кликом вне области модалки')
      },
    });

  instance.show()

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



// function handleKeydown({key}) {
//     if (key === Escape) {
//     console.log('Модалка з командою закрита кнопкою "Esc"');
//     // window.removeEventListener('keydown', handleKeydown);
//     } else {
//       console.log('Модалка с карточкой фильма закрыта кликом вне области модалки');
//   }
//   }



  
  

  function handleKeydown({ key }) {
      switch (key) {
        case 'Escape':
        instance.close();
          console.log('Модалка с карточкой фильма закрыта кликом по кнопке "ESC"');
          window.removeEventListener('keydown', handleKeydown);
        break;
        default:
        alert('Что-то пошло не так!');
    } 

  }

  // function handleCloseModalCardBtn() {
  //   instance.close()
  //   closeBtn.removeEventListener('click', handleCloseModalCardBtn)
  // }

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
