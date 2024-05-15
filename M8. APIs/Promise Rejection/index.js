

//Get random photo from unsplash api
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(res => res.json())
.then(data => {
      
      const imageUrl = data.links.download
      document.body.style.backgroundImage = "url('" + imageUrl +"')"
})