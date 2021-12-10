import axios from "axios";

export async function getFilms(page) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`)
    return data
  } catch (error) { 
    error => console.log(error)
  }     
  };



// export async function getFilms(page) {
//   const BASE_URL = `https://api.themoviedb.org/3`;
//   const API_KEY = `api_key=221ed015def0321f18a85f3fc7b4d6fa`;
//   return fetch(`${BASE_URL}/trending/movie/week?${API_KEY}&page=${page}`).then(response => {
//     if (!response.ok) {
//       throw new Error(`Error fetching data`);
//     }
//     return response.json();
//   });
// }