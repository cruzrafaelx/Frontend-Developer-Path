import { tweetsData } from "./data.js"
//CDN that generates a UUID use uuidv4() to generate a UUID
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// Identify which icon was clicked
document.addEventListener("click", function(e){

  if(e.target.dataset.like){
    console.log(e.target.dataset)
    handleLikeClick(e.target.dataset.like)
    
  }

  else if(e.target.dataset.retweet){
    console.log(e.target.dataset)
    handleRetweetClick(e.target.dataset.retweet)
  }

  else if(e.target.dataset.reply){
    console.log(e.target.dataset)
    handleReplyClick(e.target.dataset.reply)
  }

  else if(e.target.id === "tweet-btn"){
    handleTweetBtnClick()
  }

  else if(e.target.id === "post-btn"){
    
    handlePostBtnClick(e.target.dataset.post)
    
  }

  
})

// change color of like icon and increment or decrement number of likes
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

// change color of retweet icon and increment or decrement number of tweets
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

// add new tweet
function handleTweetBtnClick(){

  const tweetInput = document.getElementById("tweet-input")

  if(tweetInput.value){
  tweetsData.unshift(
  {
    handle: `@Scrimba`,
    profilePic: `images/scrimbalogo.png`,
    likes: 0,
    retweets: 0,
    tweetText: tweetInput.value,
    replies: [],
    isLiked: false,
    isRetweeted: false,
    uuid: uuidv4()
})
  tweetInput.value = ''
} else {
  alert("Tweets can't be empty!")
}
  render()
 
}

//hide and show the replies 
function handleReplyClick(replyId){
  document.getElementById(`replies-${replyId}`).classList.toggle('hidden')

 
}

//post a reply
function handlePostBtnClick(tweetId){
  
  // const targetTweetObj = tweetsData.filter(function(tweet){
  //      return tweet.uuid === tweetId
  // })[0]

  const postValue = document.getElementsByClassName("reply-input").value
  console.log(postValue)

  // if(postValue){
  // targetTweetObj.replies.unshift(
  //   {
  //     handle: "@Scrimba",
  //     profilePic: "images/scrimbalogo.png",
  //     tweetText: `${postValue}`
  //   } 
  // )}

  // else if(!postValue){
  //   alert("Replies can't be empty!")
  // }
  
  // render()
  
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

      repliesHtml += `
      <div class="tweet-input-area">
        <img src="images/scrimbalogo.png" class="profile-pic">
        <textarea class="reply-input" placeholder="Write a reply"></textarea>
      </div>
      <button id="post-btn" data-post="${tweet.uuid}">Post</button>
      `
    


    // render the tweets
    feedHtml +=  `

    <div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    <i class="fa-solid fa-comment-dots" data-reply="${tweet.uuid}"></i>
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

    

render()
function render(){

  document.getElementById("feed").innerHTML = getFeedHtml()
}


  


