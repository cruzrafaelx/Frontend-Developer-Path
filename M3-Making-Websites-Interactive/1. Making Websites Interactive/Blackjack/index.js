
let thirdCard = 0
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = " "
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

//Key Value Pair
let player = {
  name : "Rafael",
  chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = ` ${player.name}: €${player.chips}`

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  
  renderGame()
}

function renderGame(){

  cardsEl.textContent = "Cards: "

  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += `${cards[i]} `
  }

  sumEl.textContent = `Sum: ${sum}`

  if (sum <= 20){
    message = "Do you want to draw a new card?"
  } else if (sum === 21){
    message = "Wohoo! You have got a Blackjack!"
    hasBlackJack = true
  } else{
    message = "You lost!"
    isAlive = false
  }

  messageEl.textContent = message

}


function newCard(){

  if(isAlive === true && hasBlackJack === false){
  let thirdCard = getRandomCard()
  sum += thirdCard
  cards.push(thirdCard)
  renderGame()
  }
}



function getRandomCard(){
  
  let randomNumber =  Math.ceil(Math.random()* 13) 

  if (randomNumber === 1){
    return 11
  } else if(randomNumber > 10){
    return 10
  } else {
    return randomNumber
  }
}
