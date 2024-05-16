
const author = document.getElementById("author")
const crypto = document.getElementById("crypto")
const time = document.getElementById("time")
const weather = document.getElementById("weather")
const fact = document.getElementById("fact")


//Get random photo from unsplash api
try{

      const res1 = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beach')
      const data1 = await res1.json()
      
      const defaultImg = data1.urls.full
      const imageUrl = data1.links.download
      document.body.style.backgroundImage = `url('${imageUrl})`
      
      author.innerHTML = `
      By: ${data1.user.first_name +' '+ data1.user.last_name}
      `
} catch(err){
      document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1594235206348-f03d8c4ebda0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU4MDY5MDh8&ixlib=rb-4.0.3&q=85")`

      author.innerHTML = `
      By: Süleyman Coskun
      `
}

      

//Get data of a crypto coin
try{
            
      const res2 = await fetch("https://api.coingecko.com/api/v3/coins/ethereum")
            
      if(!res2.ok){
            throw Error("Something went wrong")
      }

      const data2 = await res2.json()

      console.log(data2)

      crypto.innerHTML = `
      <div class="crypto-logo">
            <img src="${data2.image.large}" alt="coin logo">
            <p>${data2.name}</p>
      </div>

      <div class="crypto-price">
            <i class="fa-solid fa-euro-sign"></i>
            <p>${data2.market_data.current_price.eur}</p>
      </div>

      <div class="crypto-high">
            <i class="fa-solid fa-arrow-up"></i>
            <p>${data2.market_data.high_24h.eur}</p>
      </div>

      <div class="crypto-low">
            <i class="fa-solid fa-arrow-down"></i>
            <p>${data2.market_data.low_24h.eur}</p>
      </div>

      `
}catch(err){
      console.log(err)
}


//Get current time
function getTime(){
      let timeNow = ""
      const date = new Date()
      timeNow += date.toLocaleTimeString("de", {timeStyle: "medium"})
      time.innerHTML = `${timeNow}`
}

setInterval(getTime, 1000)

//get user coordinates using Geolocation Web API and weather data 
navigator.geolocation.getCurrentPosition(async position => {
      try{
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            const res3 = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)

            const data3 = await res3.json()
            
            if(!res3.ok){
                  throw Error("Weather data not available")
            }

            console.log(data3)
            const icon = data3.weather[0].icon

            //Display weather icon
            weather.innerHTML = `
            <div class="weather-top">
                  <img src= https://openweathermap.org/img/wn/${icon}@2x.png alt="weather icon">
                  <p>${data3.main.temp.toFixed(0)}°C</p>
            </div>
            <p>${data3.name}</p>
            `
      }catch(err){
            console.log(err)
      }
})

//Get random fact function
async function getFact(){

      try{
               
            const res4 = await fetch('https://api.api-ninjas.com/v1/facts', 
            {
                  headers: { 'X-Api-Key': 'mFZunLq1qeqBhLlZi6kwWg==GPzltp8DEtyKGxqA'},
                  contentType: 'application/json'
            })

            const data4 = await res4.json()

            fact.innerHTML = `${data4[0].fact}`
      }catch(err){
            console.log(err)
      }  
}

getFact()
setInterval(getFact, 15000)