const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
// let key = null;

function toggleModal(e) {
  if (refs.modal.classList.contains('is-hidden')) {
    // key = document.addEventListener('keydown', toggleModalEsc);
    console.log('Модалка з командою відкрита');

    refs.modal.classList.remove('is-hidden');
  } else {
    console.log('Модалка з командою закрита');
    refs.modal.classList.add('is-hidden');
  }
}
// function toggleModalEsc(e) {
//   if (e.keyCode === 27) {
//     refs.modal.classList.add('is-hidden');
//     key.removeEventListener();
//     console.log('Модалка з командою закрита кнопкою "Esc"');
//   }
// }
