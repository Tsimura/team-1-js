const modalTittle = document.querySelector('modal_window__card');
const modalButton = document.querySelector('modal-window-title');



  const refs = {
    openModalCardBtn: document.querySelector('[data-modal-card-open]'),
    closeModalCardBtn: document.querySelector('[data-modal-card-close]'),
    modalCard: document.querySelector('[data-modal-card]'),
  };

  refs.openModalCardBtn.addEventListener('click', handleModalCard);
  refs.closeModalCardBtn.addEventListener('click', handleModalCardClose);
  document.addEventListener('keydown', handleModalCardEsc);

  function handleModalCard() {
    if (refs.modalCard.classList.contains('is-hidden')) {
      openModalCart();
    } else {
      closeModalCart();
    }
  }
  
function handleModalCardClose(event) {
  if (!refs.modalCard.classList.contains('is-hidden')) {
      console.log(event.keyCode)
    closeModalCart();
    handleModalCardEsc();
    } else {
      openModalCart();
    }
}
  
function handleModalCardEsc(event) {
  if (event.keyCode === 27) {
    closeModalCart();
  } else {
    refs.closeModalCardBtn.removeEventListener();
  }
}

function openModalCart() {
    console.log('Модалка с карточкой фильма открыта');
      refs.modalCard.classList.remove('is-hidden');
}
function closeModalCart() {
  console.log('Модалка с карточкой фильма закрыта');
  refs.modalCard.classList.add('is-hidden');
}

