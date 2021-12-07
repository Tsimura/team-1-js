// AIzaSyDI4Ixc_tDB33sez9hADQIenRDniMJ2dik
// const video = document.querySelector(`#youTube`)
// const name = `spider-man`
// const year = `2021`
// const searching = `${name} ${year} oficial trailer`

// function getRuFilms() {
//     const API_KEY = `AIzaSyDI4Ixc_tDB33sez9hADQIenRDniMJ2dik`
//     return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searching}&type=video&key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//              throw new Error(`Error fetching data`)
//             }
//             return response.json()
//         })
// }
// getRuFilms().then(createVideo)


// function createVideo(resp) {
//     resp.items.map((data) => {
//         return video.innerHTML = `<iframe width="1000" height="500" src="https://www.youtube.com/embed/${data.id.videoId}"
//          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     })
// }

