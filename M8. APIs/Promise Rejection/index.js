
const author = document.getElementById("author")
const crypto = document.getElementById("crypto")
const time = document.getElementById("time")


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

      //function to add 0 to single digit numbers
      const currTime = num => num < 10 ? '0' + num : num

      const now = new Date()
      const hours = currTime(now.getHours())
      const minutes = currTime(now.getMinutes())
      const seconds = currTime(now.getSeconds())

      time.innerHTML = `
      ${hours}:${minutes}
      `
}

getTime()

