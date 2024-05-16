
const author = document.getElementById("author")
const crypto = document.getElementById("crypto")
const time = document.getElementById("time")
const weather = document.getElementById("weather")
const fact = document.getElementById("fact")


//Get random photo from unsplash api
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beach')
.then(res => res.json())
.then(data => {

      const defaultImg = data.urls.full
      const imageUrl = data.links.download
      document.body.style.backgroundImage = `url('${imageUrl})`
      
      author.innerHTML = `
      By: ${data.user.first_name +' '+ data.user.last_name}
      `
    //The catch method will run if any errors are thrown to the .then() handlers
}).catch(err => {
      document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1594235206348-f03d8c4ebda0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU4MDY5MDh8&ixlib=rb-4.0.3&q=85")`

      author.innerHTML = `
      By: Süleyman Coskun
      `
})
      

//Get data of a crypto coin
fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then(res => {
            if(!res.ok){
                  throw Error("Something went wrong")
            }
            return res.json()
      })
      .then(data => {
            console.log(data)

            crypto.innerHTML = `
            <div class="crypto-logo">
                  <img src="${data.image.large}" alt="coin logo">
                  <p>${data.name}</p>
            </div>

            <div class="crypto-price">
                  <i class="fa-solid fa-euro-sign"></i>
                  <p>${data.market_data.current_price.eur}</p>
            </div>

            <div class="crypto-high">
                  <i class="fa-solid fa-arrow-up"></i>
                  <p>${data.market_data.high_24h.eur}</p>
            </div>

            <div class="crypto-low">
                  <i class="fa-solid fa-arrow-down"></i>
                  <p>${data.market_data.low_24h.eur}</p>
            </div>
            
            `
      })
      .catch(err => console.log(err))

//Get current time
function getTime(){
      let timeNow = ""
      const date = new Date()
      timeNow += date.toLocaleTimeString("de", {timeStyle: "medium"})
      time.innerHTML = `${timeNow}`
}

setInterval(getTime, 1000)

//get user coordinates using Geolocation Web API and weather data 
navigator.geolocation.getCurrentPosition(position => {
      
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)
      .then(res => {
            if(!res.ok){
                  throw Error("Weather data not available")
            }

            return res.json()
      }) 
      .then(data => {
            console.log(data)
            const icon = data.weather[0].icon

            //Display weather icon
            weather.innerHTML = `
            <div class="weather-top">
                  <img src= https://openweathermap.org/img/wn/${icon}@2x.png alt="weather icon">
                  <p>${data.main.temp.toFixed(0)}°C</p>
            </div>
            <p>${data.name}</p>
            `

      })
      .catch(err => console.error(err))
})

//Get random fact function
function getFact(){
      fetch('https://api.api-ninjas.com/v1/facts', 
      {
            headers: { 'X-Api-Key': 'mFZunLq1qeqBhLlZi6kwWg==GPzltp8DEtyKGxqA'},
            contentType: 'application/json'
      }
)
      .then(res => res.json())
      .then(data => {
            console.log(data[0].fact)

            fact.innerHTML = `${data[0].fact}`
      })
}

getFact()
setInterval(getFact, 15000)