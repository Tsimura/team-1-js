const films = document.querySelector(`#gallery`)

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
    resp.results.map((data) => {
       return films.insertAdjacentHTML(`beforeend`, articles(data))    
    })
}

function articles({ poster_path, original_title, release_date, genre_ids }) {
    return  `<div id="gallery">
      <div><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" width="274px" height="398px"></div>
      <h2>${original_title}</h2>
      <p>${genre_ids} | <span>${release_date.substr(0, 4)}</span></p>
    </div>`
    }


