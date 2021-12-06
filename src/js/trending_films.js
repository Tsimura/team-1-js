
import { getFilms } from "./getFilms"
import { makeGenres } from "./makeGenres"
import Notiflix from 'notiflix';

export const films = document.querySelector(`#gallery`)
const input = document.querySelector(`#search-form`)

input.addEventListener(`submit`, onSearch)


let searchForm = ` `

getFilms().then(createFilmoteka).catch(error => console.log(error))

function createFilmoteka(resp) {
    console.log(resp)
    if (resp.results.length === 0) {
        Notiflix.Notify.failure("Search result not successful. Enter the correct movie name and ")
        getFilms().then(createFilmoteka).catch(error => console.log(error))
    } else {
       resp.results.map((data) => {
       return films.insertAdjacentHTML(`beforeend`, articles(data))    
    })
    }
}

export function articles({ poster_path, original_title, release_date, genre_ids }) {
    const poster = `http://static.everypixel.com/ep-pixabay/0597/0608/0831/32386/5970608083132386502-mistake.png`
    return  `<div id="gallery" class="hp__gallery_el">
      ${poster_path ? `<img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"` : `<img class="hp__gallery_img" src="${poster}" alt="Poster is missing"`}>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
    </div>`
}
    

function onSearch(evt) {
    searchForm = evt.currentTarget.elements.searchQuery.value
    evt.preventDefault()
    clearContainer()
    if (searchForm.length === 0) {
        Notiflix.Notify.failure("Search result not successful. Enter the correct movie name and ")
        getFilms().then(createFilmoteka).catch(error => console.log(error))
        return
    }
    searchFilms(searchForm).then(createFilmoteka).catch(error => console.log(error))
}

function clearContainer() {
  return films.innerHTML = ``
}

function searchFilms(searchForm) {
    const BASE_URL = `https://api.themoviedb.org/3`
    const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`
    return fetch(`${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${searchForm}&page=1&include_adult=false`)
        .then(response => {
            if (!response.ok) {
             throw new Error(`Error fetching data`)
            }
            return response.json()
        })
}

