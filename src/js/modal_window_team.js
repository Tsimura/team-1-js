(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', toggleModalEsc);

  function toggleModal() {
    if (refs.modal.classList.contains('is-hidden')) {
      console.log('Модалка з командою відкрита');
      refs.modal.classList.remove('is-hidden');
    } else {
      console.log('Модалка з командою закрита');
      refs.modal.classList.add('is-hidden');
    }
  }
  function toggleModalEsc(e) {
    if (e.keyCode === 27) {
      console.log('Модалка з командою закрита кнопкою "Esc"');
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();
