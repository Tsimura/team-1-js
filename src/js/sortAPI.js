import axios from "axios";
import { makeGenres } from './makeGenres';
import createFilmoteka from './trending_films';
import Notiflix from 'notiflix';
import * as withSpinner from './spinner';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

async function sortAPI(year, sortBy, genre) {
    try {
        const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&language=en-EN&sort_by=${sortBy}&vote_count.gte=1000&include_adult=false&page=1&primary_release_year=${year}&with_genres=${genre}`)
        if (data.results.length === 0) {
           return Notiflix.Notify.failure('No results matching your request. Choose other parameters', { timeout: 1000 });
            // console.log('test');
            // data;
        } else {
            return data;
        }
    } catch (error) {
        error => console.log(error);
    }
}


async function fetchTrending() {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=221ed015def0321f18a85f3fc7b4d6fa&page=1`);
        return data;
    } catch (error) {
        error => console.log(error);
    }
}

// sortAPI().then(data => console.log(data.results))

// sortAPI().then(data => console.log(data)).catch(error => console.log(error));
const gallery = document.querySelector('#gallery')
const filtBtnWrap = document.querySelector('.filterButtonWrapper');
const sortBy = document.querySelector('#sortby');
const genreBtn = document.querySelector('#genre');
const filterYear = document.querySelector('#year');
const resetBtn = document.querySelector('.filter__resetButton')

resetBtn.addEventListener('click', e => {
    sortBy.value = '';
    genreBtn.value = '';
    filterYear.value = '';
    fetchTrending().then(data => {
        clearGallery();
        trendingMarkup(data)
    }).catch(error => console.log(error));

})

filtBtnWrap.addEventListener('change', e => {
    clearGallery();
    withSpinner.addLoader();
    console.log(sortBy.value);
    console.log(genreBtn.value);
    console.log(filterYear.value);
    setTimeout(() => {
        sortAPI(filterYear.value, sortBy.value, genreBtn.value).then(data => {
        makeFilterMarkup(data);
    }).then(withSpinner.removeLoader).catch(error => {
        console.log(error);
        fetchTrending().then(data => trendingMarkup(data)).then(withSpinner.removeLoader);
    })
    },2000)
    

})

function makeFilterMarkup(data) {
    const filterMarkup = data.results.map(({ poster_path, original_title, release_date, genre_ids, id }) =>
        `<div id="gallery" class="hp__gallery_el">
      ${poster_path
            ? `<img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"`
            : `<img class="hp__gallery_img" src="${poster}" alt="Poster is missing"`
        }>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      <ul class="modal-list__buttons list">
      <li>
      <button id="${id}" class='button-watched-modal-window button--active button'>add to watched</button></li>
      <li>
      <button id="${id}" type='button' class='button-queue-modal-window button button--active'>add to queue</button></li>
      </ul>
    </div>`).join('');
    gallery.insertAdjacentHTML('beforeend', filterMarkup);

}



function clearGallery() {
    return gallery.innerHTML = '';
}

function trendingMarkup(data) {
    const trendingMarkup = data.results.map(({ poster_path, original_title, release_date, genre_ids, id }) =>
            `<div id="gallery" class="hp__gallery_el">
      ${poster_path
            ? `<img class="hp__gallery_img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"`
            : `<img class="hp__gallery_img" src="${poster}" alt="Poster is missing"`
        }>
      <h2 class="film_title">${original_title}</h2>
      <p class="film_genre">${makeGenres(genre_ids)} | <span>${release_date.substr(0, 4)}</span></p>
      <ul class="modal-list__buttons list">
      <li>
      <button id="${id}" class='button-watched-modal-window button--active button'>add to watched</button></li>
      <li>
      <button id="${id}" type='button' class='button-queue-modal-window button button--active'>add to queue</button></li>
      </ul>
    </div>`).join('');
    gallery.insertAdjacentHTML('beforeend', trendingMarkup)
}