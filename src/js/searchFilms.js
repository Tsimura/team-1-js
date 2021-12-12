import { getFilms } from './getFilms';
import Notiflix from 'notiflix';
import { createFilmoteka } from "./trending_films";
import * as withLoader from './spinner';
import axios from "axios";
import { keys } from "./getFilms"


export async function searchFilms(searchForm, page) { 
  try {
    const { data } = await axios.get(`${keys.BASE_URL}/search/movie?${keys.API_KEY}&language=en-US&query=${searchForm}&page=1&include_adult=false`)
    console.log(searchForm.length)
    if (data.results.length === 0) {
      Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
      getFilms(page)
        .then(createFilmoteka)
        .then(withLoader.removeLoader())
        .catch(error => console.log(error));
    } else { 
     return data
    }
  } catch (error) { 
    error => console.log(error)
  }
}