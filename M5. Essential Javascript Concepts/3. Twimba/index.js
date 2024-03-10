import { tweetsData } from "./data.js"

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")
const heartIcon = document.getElementsByClassName("fa-heart")



tweetBtn.addEventListener("click", function(){

  console.log(tweetInput.value)

})

// Identifies which icon was click
document.addEventListener("click", function(e){

  if(e.target.dataset.like){
    handleLikeClick(e.target.dataset.like)
    
  }

  else if(e.target.dataset.retweet){
    handleRetweetClick(e.target.dataset.retweet)
  }

  else if(e.target.dataset.reply){
    handleReplyClick(e.target.dataset.reply)
  }
  
})



// Identifies an object in the tweetsData array and increment or decrement the number of likes and calls the render function
function handleLikeClick(tweetId){

  const targetTweetObj = tweetsData.filter(function(tweet){
    return tweet.uuid === tweetId
    
  })[0]
  
  if(!targetTweetObj.isLiked){
    targetTweetObj.likes++

  } else {
    targetTweetObj.likes--
  }

  targetTweetObj.isLiked = !targetTweetObj.isLiked
  
  render()
  
}

function handleRetweetClick(tweetId){

  const targetTweetObj = tweetsData.filter(function(tweet){
    
      return tweet.uuid === tweetId
  })[0]

  if(!targetTweetObj.isRetweeted){
    targetTweetObj.retweets++
  } else{
    targetTweetObj.retweets--
  }

  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
  
  render()
  
}

//hides and shows the replies by toggling the css class 'hidden'
function handleReplyClick(replyId){
  document.getElementById(`replies-${replyId}`).classList.toggle('hidden')

}

function getFeedHtml(){

  let feedHtml = `` 
  
  tweetsData.forEach( function(tweet){
    let linkIconClass = ''

    if(tweet.isLiked){
      linkIconClass = 'liked'
    } 

    let retweetIconClass = ''
  
    if(tweet.isRetweeted){
      retweetIconClass = 'retweeted'
    }

    let repliesHtml = ''

    // renders the replies to tweets
    if(tweet.replies.length > 0){
      tweet.replies.forEach(function(reply){
        repliesHtml += `
        <div class="tweet-reply">
          <div class="tweet-inner">
          <img src="${reply.profilePic}" class="profile-pic">
              <div>
                  <p class="handle">${reply.handle}</p>
                  <p class="tweet-text">${reply.tweetText}</p>
              </div>
          </div>
        </div>
       `
      })
      
    }

    feedHtml +=  `

    <div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                      ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${linkIconClass}" data-like="${tweet.uuid}"></i>
                      ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass} " data-retweet="${tweet.uuid}"></i>
                      ${tweet.retweets} 
                    </span>
                </div>   
            </div>            
        </div>
  
        <div id="replies-${tweet.uuid}">
          ${repliesHtml}
        </div>   
    </div>
    
    `
  })

  return feedHtml
}

    


function render(){

  document.getElementById("feed").innerHTML = getFeedHtml()
}

render()
  


