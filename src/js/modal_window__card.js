import { films } from "./trending_films";

  const refs = {
    openModalCardBtn: document.querySelector('[data-modal-card-open]'),
    closeModalCardBtn: document.querySelector('[data-modal-card-close]'),
    modalCard: document.querySelector('[data-modal-card]'),
  };

  films.addEventListener('click', handleModalCard);
  refs.closeModalCardBtn.addEventListener('click', handleModalCardClose);
  document.addEventListener('keydown', handleModalCardEsc);

  function handleModalCard() {
    if (refs.modalCard.classList.contains('is-hidden')) {
      openModalCard();
    } else {
      closeModalCard();
    }
  }
  
function handleModalCardClose(event) {
  if (!refs.modalCard.classList.contains('is-hidden')) {
      console.log(event.keyCode)
    closeModalCard();
     } else {
      openModalCard();
    }
}
  
function handleModalCardEsc(event) {
  if (event.keyCode === 27) {
    closeModalCard();
    document.removeEventListener('keydown', handleModalCardEsc);
    
  } document.addEventListener('keydown', handleModalCardEsc);
  
}

function openModalCard() {
    console.log('Модалка с карточкой фильма открыта');
      refs.modalCard.classList.remove('is-hidden');
}
function closeModalCard() {
  console.log('Модалка с карточкой фильма закрыта');
  refs.modalCard.classList.add('is-hidden');
}


import { articles } from "./trending_films";