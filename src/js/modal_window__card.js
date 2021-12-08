import { films } from "./trending_films";
import { articles } from "./trending_films";
// import { getFilms } from "./getFilms";
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
      // getFilms().then(createModalCard)
    
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