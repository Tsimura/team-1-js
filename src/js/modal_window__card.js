import { films } from "./trending_films";
import { onSearch } from "./trending_films";
import { articles } from "./trending_films";
import { getFilms } from "./getFilms";
// import { makeGenres } from "./makeGenres"
// import { genreId } from "./makeGenres"
// import { genreNumbers } from "./makeGenres"

import * as basicLightbox from 'basiclightbox'

// const options = {
//   onShow: () => {
//     window.addEventListener('keydown', handleKeydown);
        
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', handleKeydown);
        
//   },
// };

// const instance = basicLightbox.create(`
//     <div class="module">
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
//     </div>`, options);


// films.addEventListener('click', hendleFilmsClick);
    
// function hendleFilmsClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') return;
//   instance.element()
//   console.log(instance.element())
//   instance.show();
// }
films.onclick = ({ poster_path, original_title, vote_average, vote_count, title, popularity, overview }) => {
	basicLightbox
		.create(
			`<div class="module">
    <div class="film-card-modal-window">
    <button class="close-modal-window-btn" data-modal-card-close>
<svg class="icon-close-modal">
    <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
    </use>
</svg>
    </button>
<img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
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
    
</ul>
</div>
<h3 class="modal-window-about">About</h3>
<p class="modal-window-description">${overview}</p>
<div class="btn-menu-module-card">
<button class="btn-watched-modal-window">add to Watched</button>
<button class="btn-queue-modal-window">add to queue</button>
</div>
</div>
    </div>`)
		.show();
};

{/* <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li> */}



 //   films.addEventListener('click', handleModalCardOpen);
// refs.closeModalCardBtn.addEventListener('click', handleModalCardClose);
  

  

// const options = {
//   onShow: () => {
//     window.addEventListener('keydown', handleKeydown);
        
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', handleKeydown);
        
//   },
// };



// const instance = basicLightbox.create(`
// <div class="modal">
//     <div class="film-card-modal-window">
//     <button class="close-modal-window-btn" data-modal-card-close>
// <svg class="icon-close-modal">
//     <use class="icon-close-modal-svg" href="./image/modal-window-card/symbol-defs.svg#icon-close-black">
//     </use>
// </svg>
//     </button>
// <img class="film-exemple-photo" src="./image/modal-window-card/mobil-modal-card-photo.jpg" alt="#">
// <div class="modal-window-signature">
// <h2 class="film-title-modal-window">A FISTFUL OF LEAD</h2>
// <div class="window-characteristics">
// <ul class="modal-window-characteristics">
//     <li class="modal-window-vote list">Vote&nbsp;/&nbsp;Votes</li>
//     <li class="modal-window-popularity list">Popularity</li>
//     <li class="modal-winwow-original-title list">Original Title</li>
//     <li class="modal-window-gener list">Genre</li>
// </ul>
// <ul class="modal-window-characteristics-value">
//     <li class="modal-window-vote-value list"><span class="modal-window-vote__span">7.3</span>/&nbsp;&nbsp;1260</li>
//     <li class="modal-window-popularity-value list">100.2</li>
//     <li class="modal-winwow-original-title-value list">A FISTFUL OF LEAD</li>
//     <li class="modal-window-gener-value list">Western</li>
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the
// gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the
// abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same
// bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve
// been double crossed – but by who and how?
// </p>
// <div class="btn-menu-module-card">
// <button class="btn-watched-modal-window">add to Watched</button>
// <button class="btn-queue-modal-window">add to queue</button>
// </div>
// </div>
// </div>`, options);

// films.insertAdjacentHTML('beforeend', instance);
// films.addEventListener('click', hendleGalleryClick);

// function hendleGalleryClick(event) {
//   event.preventDefault();
//   console.log(event.target)
//       console.dir(event.target)
// films.insertAdjacentHTML('beforeend', instance);
//   if (event.target.nodeName !== 'IMG') return;
 
  // const getUrlImage = event.target.dataset.source;
  // console.log(getUrlImage);
  // setOriginalUrl(event.target.dataset.source);
  // currentIndex = Number(event.target.dataset.id);
  
//   instance.show();

// }
    

// function handleKeydown({ key }) {
//   switch (key) {
  //   case 'ArrowRight':
  //     currentIndex += 1;
    
  //     if (currentIndex >= galleryItems.length) {
  //       currentIndex = 0;
  //     }
    
  //     setOriginalUrl(galleryItems[currentIndex].original);
  //     break;
  //   case 'ArrowLeft':
  //     currentIndex -= 1;
    
  //     if (currentIndex <= 0) {
  //       currentIndex = galleryItems.length - 1;
  //     }
    
  //     setOriginalUrl(galleryItems[currentIndex].original);
  //     break;
    
//     case 'Escape':
//       instance.close();
//       break;
    
//     default:
//       alert('Что-то пошло не так!');
//   }
// }

// function setOriginalUrl(url) {
//   instance.element().querySelector("img").src = url;
//   return;
//   }
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

// getFilms(page)
//   .then(createFilmoteka)
//   .catch(error => console.log(error));
  
// getFilms(page).then(({ total_pages }) => {
//   console.log(page);
//   console.log(total_pages);
//   pagination.reset(total_pages);
// });

// function createMod(resp) {
//     console.log(resp)
//        resp.results.map((data) => {
//        return moduleWindow.innerHTML = createModalCard(data)   
//     })
//     }

    
// function handleModalCardClose() {
//   if (!refs.modalCard.classList.contains('is-hidden')) {
//       refs.modalCard.classList.add('is-hidden');
//       console.log('Модалка с карточкой фильма закрыта кнопкой "Х"');
      
//   }
//   return;
// }
  
// function handleModalCardEsc(event) {
//   if (event.keyCode === 27) {
//     refs.modalCard.classList.add('is-hidden');
//     console.log('Модалка с карточкой фильма закрыта кнопкой "ESC"');
//     document.removeEventListener('keydown', handleModalCardEsc);
//   } return;
// }

// function showModalWindow() {
//   // films.innerHTML = ``;
//   // localWatched = storage.load('watchedArray')
//   // if (!localWatched || (!localWatched[0] && !localWatched[1])) {
//   //   return `Упс еще ничего нет`
//   // } 
//   // for (let id of localWatched) {
//     getFilms().then(createMod)  
//     console.log(id);
// }

// showModalWindow()
// function createModalCard({ poster_path, original_title, vote_average, vote_count, title, popularity, genre_ids, overview }) {
// return `<img class="film-exemple-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Фото фільму">
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
//     <li class="modal-window-gener-value list">${makeGenres(genre_ids)}</li>
// </ul>
// </div>
// <h3 class="modal-window-about">About</h3>
// <p class="modal-window-description">${overview}</p>`
  
// }



// moduleWindow.insertAdjacentHTML(`beforeend`, createModalCard)

// films.addEventListener(`submit`, handleFind);

// let findForm = ` `;

// function createModuleWin(event) {
//   if (!event.target.classList.contains('.hp__gallery_img')) {
//     return;
//  }
//     event.results.map(data => {
//       return moduleWindow.insertAdjacentHTML(`beforeend`, createModalCard(data));
//     });
 
// }

// function handleFind(event) {
//   findForm = evt.target.elements.searchQuery.value;
//   event.preventDefault();
//   // clearModuleWind();
//   if (findForm.length === 0) {
//        getFilms()
//       .then(createModuleWin)
//       .catch(error => console.log(error));
//     return;
//   }
//   searchFilms(findForm)
//     .then(createModuleWin)
//     .catch(error => console.log(error));
// }

// clearModuleWind() {
//   return (moduleWindow.innerHTML = ``);
// }



