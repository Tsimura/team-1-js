import axios from "axios";
import Notiflix from 'notiflix';
import { createFilmoteka } from "./trending_films";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;

export async function getFilms(page) {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`)
    return data
  } catch (error) { 
    error => console.log(error)
  }     
  };

export async function searchFilms(searchForm, page) { 
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${searchForm}&page=1&include_adult=false`)
    console.log(searchForm.length)
    if (data.results.length === 0) {
      Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
      getFilms(page)
        .then(createFilmoteka)
        .catch(error => console.log(error));
    } else { 
     return data
    }
  } catch (error) { 
    error => console.log(error)
  }
}

// export function getFilms(page) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`).then(response => {
//     if (!response.ok) {
//       throw new Error(`Error fetching data`);
//     }
//     return response.json();
//   });
// }



//  export function searchFilms(searchForm) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   return fetch(
//     `${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${searchForm}&page=1&include_adult=false`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(`Error fetching data`);
//     }
//     return response.json();
//   });
// }