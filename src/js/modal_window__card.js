const modalTittle = document.querySelector('modal_window__card');
const modalButton = document.querySelector('modal-window-title');


(() => {
  const refs = {
    openModalCardBtn: document.querySelector('[data-modal-card-open]'),
    closeModalCardBtn: document.querySelector('[data-modal-card-close]'),
    modalCard: document.querySelector('[data-modal-card]'),
  };

  refs.openModalCardBtn.addEventListener('click', toggleModalCard);
  refs.closeModalCardBtn.addEventListener('click', toggleModalCard);
  document.addEventListener('keydown', toggleModalCardEsc);

  function toggleModalCard() {
    if (refs.modalCard.classList.contains('is-hidden')) {
      console.log('Модалка с карточкой фильма открыта');
      refs.modalCard.classList.remove('is-hidden');
    } else {
      console.log('Модалка с карточкой фильма закрыта');
      refs.modalCard.classList.add('is-hidden');
    }
  }
  function toggleModalCardEsc(event) {
    if (event.keyCode === 27) {
      console.log('Модалка с командой закрыта кнопкой "Esc"');
      refs.modalCard.classList.toggle('is-hidden');
    }
  }
})();
