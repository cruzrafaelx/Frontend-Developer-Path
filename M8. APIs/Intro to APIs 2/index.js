fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then(res => res.json())
      .then(data => {
            const postArr = data.splice(0, 5)
            
            let newArr = ``
            function postLoop(){
                  
                  for(post of postArr){
                        newArr += `
                        <div class="card">
                              <h3>${post.title}</h3> 
                              <p>${post.body}</p>
                        </div>`
                  }
                  return newArr
            }
            document.getElementById("post-container").innerHTML = postLoop()
      })

      