
const postTitle = document.getElementById("post-title")
const postBody = document.getElementById("post-body")
const submitBtn = document.getElementById("submit-btn")
const postContainer = document.getElementById("post-container")

let postsArr = []

//Render new blog
function renderPost(){

      let html = ''

      for(post of postsArr){
            html += `
            <div class="card">
                  <h3>${post.title}</h3> 
                  <p>${post.body}</p>
            </div>
            `       
      }
      postContainer.innerHTML = html
}

//Event Listener for Submit Button
submitBtn.addEventListener("click", (e) => {

      e.preventDefault()
      handleSubmitBtn()
})

//Submit new Blog
function handleSubmitBtn(){
      if(postTitle.value && postBody.value){
            postsArr.unshift(
                  {
                        title: `${postTitle.value}`,
                        body: `${postBody.value}`
                  }
            )
            
      } else {
            alert("Both fields should be filled out!")
      }
      
      fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
            method: "POST", 
            body: JSON.stringify(postsArr[0]),
            headers: {"Content-Type": "application/JSON"}
            }
      )
            .then(res => res.json())
            .then(post => 
                  renderPost(),
                  postTitle.value = "",
                  postBody.value = ""  
            )
}


//Display first 5 blogs on the DOM
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then(res => res.json())
      .then(data => {
            postsArr = data.slice(0, 5)
            renderPost()
            
      })

      