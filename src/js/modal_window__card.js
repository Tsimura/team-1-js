import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import { films } from "./trending_films";
// import { articles } from "./trending_films";
import { getFilms } from "./getFilms"
// import { makeGenres } from "./makeGenres"

  const refs = {
    closeModalCardBtn: document.querySelector('[data-modal-card-close]'),
    modalCard: document.querySelector('[data-modal-card]'),
  };

  films.addEventListener('click', handleModalCardOpen);
  refs.closeModalCardBtn.addEventListener('click', handleModalCardClose);

  function handleModalCardOpen() {
    if (refs.modalCard.classList.contains('is-hidden')) {
      document.addEventListener('keydown', handleModalCardEsc);
      refs.modalCard.classList.remove('is-hidden');
      console.log('Модалка с карточкой фильма открыта');
      getFilms().then(createModalCard)
    
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

const createModalCard = films
  .map(({ poster_path, original_title, vote_average, vote_count, title, popularity, genre_ids, overview }) => {
    return `<img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
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
    // <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li>
</ul>
</div>
<h3 class="modal-window-about">About</h3>
<p class="modal-window-description">${overview}</p>`
  })
  .join('');

films.insertAdjacentHTML('beforeend', createModalCard)
// createModalCard.show()

new SimpleLightbox('.gallery a', {
    nav: true,   
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: true,

   });