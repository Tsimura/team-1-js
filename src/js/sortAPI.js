import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = '221ed015def0321f18a85f3fc7b4d6fa';

async function sortAPI(language, year, descAsc) {
    try {
        const { data } = await axios.get(`discover/movie?api_key=${KEY_API}&language=en-EN&sort_by=vote_average.desc&vote_count.gte=50&include_adult=false&page=1&primary_release_year=2020&with_genres=35`)
        return data;
    } catch (error) {
        error => console.log(error);
    }
}

sortAPI().then(data => console.log(data.results))

// sortAPI().then(data => console.log(data)).catch(error => console.log(error));

