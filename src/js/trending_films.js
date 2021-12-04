import { makeGenres } from "./makeGenres"
import { getFilms } from "./getFilms"

const films = document.querySelector(`#gallery`)
const input = document.querySelector(`#search-form`)

input.addEventListener(`submit`, onSearch)

let searchForm = ` `

getFilms().then(createFilmoteka).catch(error => console.log(error))

function createFilmoteka(resp) {
    console.log(resp)
    resp.results.map((data) => {
       return films.insertAdjacentHTML(`beforeend`, articles(data))    
    })
}

function articles({ poster_path, original_title, release_date, genre_ids }) {
    return  `<div id="gallery" class="hp__gallery_el">
      <div class="hp__gallery_img-wrapper"><img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" ></div>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
    </div>`
}
    
function onSearch(evt) {
  searchForm = evt.currentTarget.elements.searchQuery.value
  evt.preventDefault()
  clearContainer()
    if (searchForm.length === 0) {
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


// width="274px" height="398px"

