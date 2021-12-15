const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', openModalWindow);
refs.closeModalBtn.addEventListener('click', closeModalWindow);

function openModalWindow(e) {
  window.addEventListener('keydown', closeModalWindowEsc);
  refs.modal.classList.remove('is-hidden');
}

function closeModalWindow() {
  refs.modal.classList.add('is-hidden');
  window.removeEventListener('keydown', closeModalWindowEsc);
}

function closeModalWindowEsc(e) {
  if (e.keyCode === 27) {
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', closeModalWindowEsc);
  }
}
