const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTUwOTRhOTYzMDhmOGYxY2IyOWFkNzVjZTlhOGNjZiIsInN1YiI6IjY2NDFlMDdjZmU1ZTczNmJkZTBjNDg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8nsHUvjgkHNEfB9C6-uRU9-hdJg6s8JGseV6QH3FJNY'
      }
    };

const myMovContainer = document.getElementById("myMov-container")
const popMoviesURL =  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const posterURL = 'https://image.tmdb.org/t/p/w500'
let addedMoviesArray = []

console.log(addedMoviesArray)

//Get added movies from the localStorage 
function getMoviesFromLocalStorage(){

      for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i)
            let item = localStorage.getItem(key)
            let parsedItem = JSON.parse(item)
            addedMoviesArray.push(parsedItem)
      }
      console.log(addedMoviesArray)
      console.log(localStorage.length)
      renderAddedMovies()
}

getMoviesFromLocalStorage()



async function renderAddedMovies(){
      const res = await fetch(popMoviesURL, options)
      const data = await res.json()
            console.log(data.results)

            let html = ''
            
            // if(addedMoviesArray.length = 0){
            //       myMovContainer.innerHTML = html
            // } 

            for(let i=0; i < addedMoviesArray.length ; i++){

            //Deconstruction of the resolved promise
            const {title, poster_path, vote_average, overview, genre_ids, id} = addedMoviesArray[i]
                  
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
                                          <button class="remove-btn" data-remove="${id}">- Remove</button>
                                          
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
                        myMovContainer.innerHTML = html
                        
                        
                        const removeBtn = document.querySelectorAll(".remove-btn")
                        
                        removeBtn.forEach(btn => {
                              btn.addEventListener("click", async (e) => {
                                    let movie = await getTargetMovie(e.target.dataset.remove)
                                    console.log(movie.id)
                                    removeMovie(movie.id)
                                    
                              })
                        })   
                                        
                   })                      
            }
           console.log(addedMoviesArray)
      }







//Compare id of clicked movie with movies array- returns the match
async function getTargetMovie(movieId){
      const res = await fetch(popMoviesURL, options)
      const data = await res.json()

      const targetMovie = data.results.find(result => {
           return movieId == result.id
      })

      return targetMovie
}


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


//Remove movie from local storage
function removeMovie(movieId){

      let modifiedArray = []

      localStorage.removeItem(movieId)

      for(let i=0; i < localStorage.length;i++){
            key = localStorage.key(i)
            item = localStorage.getItem(key)
            parsedItem = JSON.parse(item)
            modifiedArray.push(parsedItem)
      }

      addedMoviesArray = modifiedArray

      if (addedMoviesArray.length === 0) {
            // If there are no movies left, clear the HTML content
            myMovContainer.innerHTML = '';
        } else {
            // If there are still movies left, render them
            renderAddedMovies();
        }
}



//POINTERS:
//The array should be modified as well when the local storage has been modified.
//At some point, the remove button does not work anymore. ???