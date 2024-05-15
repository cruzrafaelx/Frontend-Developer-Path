
const author = document.getElementById("author")


//Get random photo from unsplash api
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beach')
.then(res => res.json())
.then(data => {
      
      console.log(data)

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
      
