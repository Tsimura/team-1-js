import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

async function sortAPI(year, sortBy, genre) {
    try {
        const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&language=en-EN&sort_by=${sortBy}&vote_count.gte=50&include_adult=false&page=1&primary_release_year=${year}&with_genres=${genre}`)
        return data;
    } catch (error) {
        error => console.log(error);
    }
}

sortAPI().then(data => console.log(data.results))

// sortAPI().then(data => console.log(data)).catch(error => console.log(error));

const filtBtnWrap = document.querySelector('.filterButtonWrapper');
const sortBy = document.querySelector('#sortby');
const genreBtn = document.querySelector('#genre');
const filterYear = document.querySelector('#year');

filtBtnWrap.addEventListener('change', e => {
    console.log(sortBy.value);
    console.log(genreBtn.value);
    console.log(filterYear.value);
    sortAPI(filterYear.value, sortBy.value, genreBtn.value).then(data => console.log(data.results)).catch(error => console.log(error));

})
