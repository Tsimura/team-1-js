import { films } from "./trending_films";
import { onSearch } from "./trending_films";
import { articles } from "./trending_films";
import { getFilms } from "./getFilms";
import { makeGenres } from "./makeGenres"
import { genreId } from "./makeGenres"
import { genreNumbers } from "./makeGenres"

import * as basicLightbox from 'basiclightbox'

// films.onclick = ({ poster_path, original_title, vote_average, vote_count, title, popularity, overview }) => {
// 	basicLightbox
// 		.create(
// 			`<div class="module">
//     <div class="film-card-modal-window">
//     <button class="close-modal-window-btn" data-modal-card-close>
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
    
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">${overview}</p>
// <div class="btn-menu-module-card">
// <button class="btn-watched-modal-window">add to Watched</button>
// <button class="btn-queue-modal-window">add to queue</button>
// </div>
// </div>

// </section>
//     </div>`, options);


// films.addEventListener('click', hendleFilmsClick);
    
// function hendleFilmsClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') return;
//   instance.element()
//   console.log(instance.element())
//   instance.show();
// }
// films.onclick = ({ poster_path, original_title, vote_average, vote_count, title, popularity, overview }) => {
// 	basicLightbox
// 		.create(
// 			`<div class="module">
//       <section class="modal-window-section">

// 		<div class="film-card-modal-window">
//     <button class="close-modal-window-btn" data-modal-card-close>
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
    
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">${overview}</p>
// <div class="btn-menu-module-card">
// <button class="btn-watched-modal-window">add to Watched</button>
// <button class="btn-queue-modal-window">add to queue</button>
// </div>
// </div>
// </section>

//     </div>`)
// 		.show();
// };

// {/* <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li> */}

let currentCardFilm = '';
let currentCardTitle = '';

   films.addEventListener('click', handleModalCardOpen);

  
function handleModalCardOpen(event) {
  console.log('Модалка с карточкой фильма открыта');
console.dir(event.target)

  
  currentCardFilm = event.target.currentSrc;
  currentCardTitle = event.target.alt;
  console.log(event.target.currentSrc)
  console.log('currentCardFilm', currentCardFilm)
  instance.show();
  instance.element()
  console.log(instance.element())
}
  

const options = {
  onShow: () => {
    window.addEventListener('keydown', handleKeydown);
        
  },
  onClose: () => {
    window.removeEventListener('keydown', handleKeydown);
    console.log('Модалка с карточкой фильма закрыта кликом вне области модалки');   
  },
};



const instance = basicLightbox.create(`
<div class="modal">
    <div class="film-card-modal-window">
        <button class="close-modal-window-btn" data-modal-card-close>
            <svg class="icon-close-modal">
                <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
                </use>
            </svg>
        </button>
        <img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500{currentCardFilm}" alt="Photo film">
        <div class="modal-window-signature">
            <h2 class="film-title-modal-window">{currentCardTitle}</h2>
            <div class="window-characteristics">
                <ul class="modal-window-characteristics">
                    <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
                    <li class="modal-window-popularity list">Popularity</li>
                    <li class="modal-winwow-original-title list">Original Title</li>
                    <li class="modal-window-gener list">Genre</li>
                    </ul>
                <ul class="modal-window-characteristics-value">
                    <li class="modal-window-vote-value list">
                        <span class="modal-window-vote__span">{vote_average}</span>/&nbsp;&nbsp;{vote_count}</li>
                    <li class="modal-window-popularity-value list">{popularity}</li>
                    <li class="modal-winwow-original-title-value list">{original_title}</li>
                    <li class="modal-window-gener-value list">{makeGenres(genre_ids)}</li>
                    </ul>
                </div>
            <h3 class="modal-window-about">About</h3>
            <p class="modal-window-description">{overview}</p>
            <div class="btn-menu-module-card">
                <button class="btn-watched-modal-window">add to Watched</button>
                <button class="btn-queue-modal-window">add to queue</button>
            </div>
        </div>
    </div>
</div>`, options);



function handleKeydown({key}) {
  switch (key) {
    // case 'ArrowRight':
    //   currentIndex += 1;
    
    //   if (currentIndex >= galleryItems.length) {
    //     currentIndex = 0;
    //   }
    
  //     setOriginalUrl(galleryItems[currentIndex].original);
  //     break;
  //   case 'ArrowLeft':
  //     currentIndex -= 1;
    
  //     if (currentIndex <= 0) {
  //       currentIndex = galleryItems.length - 1;
  //     }
    
  //     setOriginalUrl(galleryItems[currentIndex].original);
  //     break;
    
    case 'Escape':
      instance.close();
      console.log('Модалка с карточкой фильма закрыта кнопкой "ESC"');
      window.removeEventListener('keydown', handleKeydown);
      break;
    
    default:
      alert('Что-то пошло не так!');
  }
}

// function handleModalCardOpen(event) {
    // if (refs.modalCard.classList.contains('is-hidden')) {
    //   document.addEventListener('keydown', handleModalCardEsc);
    //   refs.modalCard.classList.remove('is-hidden');
    //   console.log('Модалка с карточкой фильма открыта');
      // console.log(event.target)
      // console.dir(event.target)
      // let clickWindow = event.target;
      // getFilms(clickWindow).then(createMod)
       
// }



//       console.log('Модалка с карточкой фильма закрыта кнопкой "Х"');
  
//     console.log('Модалка с карточкой фильма закрыта кнопкой "ESC"');


