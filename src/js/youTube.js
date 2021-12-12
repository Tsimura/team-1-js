// AIzaSyDI4Ixc_tDB33sez9hADQIenRDniMJ2dik
import axios from "axios";

const API_KEY = `AIzaSyBWrdrofQIQMGM0ATxYf8H53VQiProilT4`

export async function getYouTube(title, release_date) {
    const searching = `${title} ${release_date.substr(0, 4)} oficial trailer`
    try {
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searching}&type=video&key=${API_KEY}`)
        return data
    } catch (error) { 
        error => console.log(error)
    } 
}



// export function getYouTube(title, release_date) {
//     const searching = `${title} ${release_date.substr(0, 4)} oficial trailer`
//     console.log(searching)
//     const API_KEY = `AIzaSyDI4Ixc_tDB33sez9hADQIenRDniMJ2dik`
//     return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searching}&type=video&key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//              throw new Error(`Error fetching data`)
//             }
//             return response.json()
//         })
// }