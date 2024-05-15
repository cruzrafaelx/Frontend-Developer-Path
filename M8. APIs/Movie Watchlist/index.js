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

let addedMovies = []



async function getMovies(url, options){
      const res = await fetch(url, options)
      const data = await res.json()
            console.log(data.results)

            let html = ''
            
            for(let i=0; i < data.results.length; i++){

            //Deconstruction of the resolved promise
            const {title, poster_path, vote_average, overview, genre_ids, id} = data.results[i]
                  
                  //Call getGenres function
                  getGenres(genre_ids[0], genre_ids[1], genre_ids[2])
                   .then((res) => {
                        
                        html += `
                        <div class="mov-box">
                              <div class="mov-poster">
                                    <img src="${posterURL + poster_path}">
                                    <div class="poster-bg">
                                          <div class="ratings">
                                          <img src="imgs/starr.png" alt="star">
                                          <h2>${vote_average.toFixed(2)}</h2>
                                          </div>
                                          <button class="add-btn" data-add="${id}">+Watchlist</button>
                                          
                                    </div>
                              </div>
                        
                              <div class="mov-desc">
                                    <div class="desc-top">
                                          <h4>${title}</h4>
                                          
                                    </div>
                                    <div class="desc-mid">
                                          <p>${res.join(', ')}</p>
                                          
                                    </div>
                                    <div class="desc-bot">
                                          <p>${overview}</p>
                                    </div>
                              </div>
                        </div>
                        
                        `
                        movContainer.innerHTML = html

                        const addBtn = document.querySelectorAll(".add-btn")
                        
                        addBtn.forEach(btn => {
                              btn.addEventListener("click", async (e) => {
                                    let movie = await addMovie(e.target.dataset.add)
                                    console.log(movie)
                                    addedMovies.push(movie)

                              })
                        })                       

                   })        
                           
            }
            
      }


// addedMovies.forEach(promise => {
//       promise.then(result => {
//             console.log(result)
//       })
// })


//Compare id of clicked movie with movies array- returns the match
async function addMovie(movieId){
      const res = await fetch(popMoviesURL, options)
      const data = await res.json()
      
      const {results} = data

      const targetMovie = results.find(result => {
           return movieId == result.id
      })

      return targetMovie
}


getMovies(popMoviesURL, options)

//Function to get the genres using the genres_id
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
}



