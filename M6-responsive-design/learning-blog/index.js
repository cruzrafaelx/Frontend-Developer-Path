import { blogs } from "./data.js"

let isClicked = false

const mainMenu = document.querySelector(".main-menu")
const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")

openMenu.addEventListener("click", e => {
      e.preventDefault()
      show()
})


closeMenu.addEventListener("click", e => {
      e.preventDefault()
      close()
})


function show(){
      mainMenu.style.display = "flex";
      mainMenu.style.top = "0";
}

function close(){
      mainMenu.style.top = "-1000%";
}

document.querySelector(".view-btn").addEventListener("click", function(e){
      isClicked = !isClicked
      render()
})

function firstRender(){
      
      let feedHtml = ``     

      if(isClicked){
            for(let i = 0; i < blogs.length; i++){
                  const blog = blogs[i]
                  feedHtml +=  `
                       <article class="article flex">
                        <img src="${blog.image}">
                        <div class="art-text-container">
                              <p>${blog.date}</p>
                              <h1>${blog.name}</h1>
                              <p>${blog.description}</p>
                        </div>
                       </article>
                       `
            }

            document.querySelector(".view-btn").innerText = "View less"

      }


      else{
            for(let i = 0; i <= 2; i++){
                  const blog = blogs[i]
                  feedHtml +=  `
                       <article class="article flex">
                        <img src="${blog.image}">
                        <div class="art-text-container">
                              <p>${blog.date}</p>
                              <h1>${blog.name}</h1>
                              <p>${blog.description}</p>
                        </div>
                       </article>
                       `
            }
            
            document.querySelector(".view-btn").innerText = "View more"
      }
      
      return feedHtml
      
}

function render() {
      document.querySelector(".article-container").innerHTML = firstRender()
     
}

render()

