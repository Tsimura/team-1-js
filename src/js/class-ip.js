import axios from "axios";

const API_KEY_BASE = 'api_key=221ed015def0321f18a85f3fc7b4d6fa';
const URL_BASE = 'https://api.themoviedb.org/3';

export default class BaseFetchToIP {
    constructor() {
        this.page = 1;
        this.poster_path = poster_path;
        this.title = title;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.popularity = popularity;
        this.original_title = original_title;
        this.overview = overview;
        this.id = id;
    }

     async getFetchPhotos(getId) {
        
        
        const url = `${URL_BASE}/movie/${getId}?api_key=${API_KEY_BASE}&language=en-US`;
        try {
            const { response } = await axios.get(url);
            this.page += 1;
            console.log(response.data);
            return await response.data;
            
        }
        catch (error) {
            console.log(error)
        }
    }
    resetPage() {
        this.page = 1;
    }


    get poster_path() {
    return this.poster_path;
  }

  set poster_pat(newPoster_path) {
    this.poster_path = newPoster_path;
    }


    get title() {
    return this.title;
  }

  set title(newTitle) {
    this.poster_path = newTitle;
    }
    

    get vote_average() {
    return this.vote_average;
  }

  set vote_average(newVote_average) {
    this.vote_average = newVote_average;
    }
    

    get vote_count() {
    return this.vote_count;
  }

  set vote_count(newVote_count) {
    this.vote_count = newVote_count;
    }
    

     get popularity() {
    return this.popularity;
  }

  set popularity(newPopularity) {
    this.popularity = newPopularity;
    }
    

    get original_title() {
    return this.original_title;
  }

  set original_title(newOriginal_title) {
    this.original_title = newOriginal_title;
    }
    

    get overview() {
    return this.overview;
  }

  set overview(newOverview) {
    this.overview = newOverview;
    }
    

        get id() {
    return this.id;
  }

  set id(newId) {
    this.id = newId;
  }
}

// const baseFetchToIP = new BaseFetchToIP

// 1-й вариант
import { films } from "./trending_films";
import { articles } from "./trending_films";
// import { getFilms } from "./getFilms";
// import { makeGenres } from "./makeGenres"

  const refs = {
   closeModalCardBtn: document.querySelector('[data-modal-card-close]'),
      modalCard: document.querySelector('[data-modal-card]'),
    modalSection: document.querySelector('.modal-window-section')
  };

  films.addEventListener('click', handleModalCardOpen);
refs.closeModalCardBtn.addEventListener('click', handleModalCardClose);
  
let getId = '';

  function handleModalCardOpen(event) {
    if (refs.modalCard.classList.contains('is-hidden')) {
      document.addEventListener('keydown', handleModalCardEsc);
      refs.modalCard.classList.remove('is-hidden');
      console.log('Модалка с карточкой фильма открыта');
      // getFilms().then(createModalCard)
        if (event.target.nodeName !== 'IMG') return;
        getId = event.target.id;
        console.log(getId);
    
  } return;
}
    
function handleModalCardClose() {
  if (!refs.modalCard.classList.contains('is-hidden')) {
      refs.modalCard.classList.add('is-hidden');
      console.log('Модалка с карточкой фильма закрыта кнопкой "Х"');
      
  }
  return;
}
  
function handleModalCardEsc(event) {
  if (event.keyCode === 27) {
    refs.modalCard.classList.add('is-hidden');
    console.log('Модалка с карточкой фильма закрыта кнопкой "ESC"');
    document.removeEventListener('keydown', handleModalCardEsc);
    // document.removeEventListener('mousedown', handleModalCardClickClose);
  } return;
}

// function createModalCard({ poster_path, title, vote_average, vote_count, popularity, original_title, overview, id }) {
//     return `<div class="backdrop is-hidden" data-modal-card>
//     <div class="film-card-modal-window">
//         <button class="close-modal-window-btn" data-modal-card-close>
//             <svg class="icon-close-modal">
//                 <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
//                 </use>
//             </svg>
//         </button>
//         <img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Photo film">
//         <div class="modal-window-signature">
//             <h2 class="film-title-modal-window">${title}</h2>
//             <div class="window-characteristics">
//                 <ul class="modal-window-characteristics">
//                     <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
//                     <li class="modal-window-popularity list">Popularity</li>
//                     <li class="modal-winwow-original-title list">Original Title</li>
//                     <li class="modal-window-gener list">Genre</li>
//                     </ul>
//                 <ul class="modal-window-characteristics-value">
//                     <li class="modal-window-vote-value list">
//                         <span class="modal-window-vote__span">${vote_average}</span>/&nbsp;&nbsp;${vote_count}</li>
//                     <li class="modal-window-popularity-value list">${popularity}</li>
//                     <li class="modal-winwow-original-title-value list">${original_title}</li>
//                     <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li>
//                     </ul>
//                 </div>
//             <h3 class="modal-window-about">About</h3>
//             <p class="modal-window-description">${overview}</p>
//             <div class="btn-menu-module-card">
//                 <button id="${id}" class="btn-watched-modal-window">add to Watched</button>
//                 <button id="${id}" class="btn-queue-modal-window">add to queue</button>
//     </div>
//     </div>
//     </div>`
//  }
//   refs.modalSection.innerHTML = createModalCard;
