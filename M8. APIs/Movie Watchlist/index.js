const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTUwOTRhOTYzMDhmOGYxY2IyOWFkNzVjZTlhOGNjZiIsInN1YiI6IjY2NDFlMDdjZmU1ZTczNmJkZTBjNDg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8nsHUvjgkHNEfB9C6-uRU9-hdJg6s8JGseV6QH3FJNY'
      }
    };

const popMoviesURL =  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

function getMovies(url, options){
      fetch(url, options).then(res => res.json()).then(data => console.log(data))
}
    
getMovies(popMoviesURL, options)