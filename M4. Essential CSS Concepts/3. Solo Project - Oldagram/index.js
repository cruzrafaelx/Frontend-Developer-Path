import { posts } from "./data.js"


document.addEventListener("click", function(e){
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})


function handleLikeClick(postId){
   const targetPost = posts.filter(function(post){
        return postId === post.uuid
   })[0]
    
   if(!targetPost.isLiked){
    targetPost.likes++
   }
   else if(targetPost.isLiked){
    targetPost.likes--
   }

   targetPost.isLiked = !targetPost.isLiked

   render()
}





function getFeedHtml(){

    
    let feedHtml = ``

    posts.forEach(function(post){

        feedHtml += `    
        <section class="container prof-header">
            <div>
                <img src="${post.avatar}" class="avatar">
            </div>
            <div>
                <p class="prof-name text-bold">${post.name}</p>
                <p class="prof-location">${post.location}</p>
            </div>
        </section>
        
        <section class="container">
            <img src="${post.post}" class="post">
        </section>
    
        <section class="container comment-sec">
            <div class="icon-set">
                <i class="fa-solid fa-heart icon" data-like="${post.uuid}"></i>
                <i class="fa-regular fa-comment icon"></i>
                <i class="fa-regular fa-paper-plane icon"></i>
            </div>
            <div>
                <p class="text-bold">${post.likes} likes</p>
            </div>
            <div class="comments">
                <p class="text-bold">${post.username}</p>
                <p>${post.comment}</p>
            </div>
        </section>
        `
    })
    return feedHtml
}

render()

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml();
}
