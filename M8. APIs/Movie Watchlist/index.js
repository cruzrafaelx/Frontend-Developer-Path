const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTUwOTRhOTYzMDhmOGYxY2IyOWFkNzVjZTlhOGNjZiIsInN1YiI6IjY2NDFlMDdjZmU1ZTczNmJkZTBjNDg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8nsHUvjgkHNEfB9C6-uRU9-hdJg6s8JGseV6QH3FJNY'
      }
    };

const movContainer = document.getElementById("mov-container")
const popMoviesURL =  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const posterURL = 'https://image.tmdb.org/t/p/w500'


function getMovies(url, options){
      fetch(url, options).then(res => res.json()).then(data => {
            console.log(data.results)

            let html = ''
            
      
            for(let i=0; i < data.results.length; i++){


                  const {title, poster_path, vote_average, overview, genre_ids} = data.results[i]

                  //Array that contains the genres
                  let genreList = []

                  //Handle the promise of async function getGenres results
                   getGenres(genre_ids[0], genre_ids[1], genre_ids[2])
                   .then((result) => {
                        genreList.push(result[0], result[1], result[2])
                   })                   

                   
            
                  html += `
                  <div class="mov-box">
                  <img src="${posterURL + poster_path}">

                  <div class="mov-desc">
                        <div class="desc-top">
                              <h4>${title}</h4>
                              <p>${vote_average.toFixed(2)}</p>
                        </div>
                        <div class="desc-mid">
                              <p>${genreList[0], genreList[1], genreList[2]}</p>
                              <button>+Watchlist</button>
                              <p></p>
                        </div>
                        <div class="desc-bot">
                              <p>${overview}</p>
                        </div>
                  </div>
            </div>
                  
                  `
            }
          
            movContainer.innerHTML = html
      })
}
    
getMovies(popMoviesURL, options)


async function getGenres(param, param1, param2){
      
      let genresArray = []

      const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      const data = await res.json()
      const {genres} = data

      for(let i=0; i < genres.length; i++){

            if(param == genres[i].id){
                  genresArray.push(genres[i].name)
            }
            
            if(param1 == genres[i].id){
                  genresArray.push(genres[i].name)
            }

            if(param2 == genres[i].id){
                  genresArray.push(genres[i].name)
            }
      }

     return genresArray
     console.log(genresArray)

}

console.log(getGenres(878, 27, 28))