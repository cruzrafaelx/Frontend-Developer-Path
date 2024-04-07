import { posts } from "./data.js"

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
                <img src="images/icon-heart.png" class="icon">
                <img src="images/icon-comment.png" class="icon">
                <img src="images/icon-dm.png" class="icon">
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

console.log(getFeedHtml())

document.getElementById("feed").innerHTML = getFeedHtml();