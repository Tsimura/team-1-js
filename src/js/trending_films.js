const films = document.querySelector(`#gallery`)

const genreId = [
{"id": 28, "name": "Action" },
{"id":12,"name":"Adventure"},
{"id":16,"name":"Animation"},
{"id":35,"name":"Comedy"},
{"id":80,"name":"Crime"},
{"id":99,"name":"Documentary"},
{"id":18,"name":"Drama"},
{"id":10751,"name":"Family"},
{"id":14,"name":"Fantasy"},
{"id":36,"name":"History"},
{"id":27,"name":"Horror"},
{"id":10402,"name":"Music"},
{"id":9648,"name":"Mystery"},
{"id":10749,"name":"Romance"},
{"id":878,"name":"Science Fiction"},
{"id":10770,"name":"TV Movie"},
{"id":53,"name":"Thriller"},
{"id":10752,"name":"War"},
{ "id": 37, "name": "Western" }]

function getFilms() {
    const BASE_URL = `https://api.themoviedb.org/3`
    const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`
    return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}`)
        .then(response => {
            if (!response.ok) {
             throw new Error(`Error fetching data`)
            }
            return response.json()
        })
}

getFilms().then(createFilmoteka).catch(error => console.log(error))

function createFilmoteka(resp) {
    console.log(resp)
    resp.results.map((data) => {
       return films.insertAdjacentHTML(`beforeend`, articles(data))    
    })
}

function makeGenres(numbers) {
    const genreName = genreId.filter(data => {
        for (let number of numbers) {
            if (data.id === number) {
                return data
            }
        } 
    })
    const genreNumbers = genreName.map(data => data.name)
    if (genreNumbers.length >= 3) {
        const prune = genreNumbers.slice(0, 2)
        const newGenres = [...prune, `Other`]
        return newGenres.join(", ")
    } else {
        return genreNumbers.join(", ")
    }
}

function articles({ poster_path, original_title, release_date, genre_ids }) {

    return  `<div id="gallery" class="hp__gallery_el">
      <div class="hp__gallery_img-wrapper"><img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" ></div>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${genre_ids} | <span>${release_date.substr(0, 4)}</span></p>

    </div>`
}
    
// width="274px" height="398px"

