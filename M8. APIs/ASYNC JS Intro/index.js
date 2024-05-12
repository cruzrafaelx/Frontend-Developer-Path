
let deckId
const newDeck = document.getElementById("new-deck")
const newCards = document.getElementById("new-cards")
const imgContainer = document.getElementById("img-container")
const cardSlotOne = document.getElementById("card-slot-1")
const cardSlotTwo = document.getElementById("card-slot-2")
const scoreCom = document.getElementById("score-com")
const scoreMe = document.getElementById("score-me")
const winner = document.getElementById("winner")
const remaining = document.querySelector(".remaining")
const name = document.querySelector(".name")

let compScore = 0 
let meScore = 0


newDeck.addEventListener("click", (e) => {
      e.preventDefault()
      handleClick()
})
newCards.addEventListener("click", (e) =>{
      e.preventDefault()
      handleNewCards() 
})

// Get new deck
function handleClick(){
      fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
            .then(res => res.json())
            .then(data => deckId = data.deck_id)
      
      newCards.disabled = false
      newCards.classList.remove("not-allowed")
      newDeck.disabled = true 
      newDeck.classList.add("not-allowed")


}

//Draw new 2 cards
function handleNewCards(){
      fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                  // console.log(typeof data.cards[0].value)

                  if(!data.remaining){
                        // assignment statement
                        newDeck.disabled = !newDeck.disabled
                        newCards.disabled = !newCards.disabled
                  }

                  cardSlotOne.classList.remove("placeholder")
                  cardSlotTwo.classList.remove("placeholder")
                  // show images of the cards in the DOM
                  cardSlotOne.innerHTML = `
                  <img src="${data.cards[0].image}" class="img-one"">
                  `
                  cardSlotTwo.innerHTML = `
                  <img src="${data.cards[1].image}" class="img-two">
                  `    
                  remaining.innerHTML = `<h1>Remaining cards: ${data.remaining}</h1>`

                  highestCard(data.cards[0].value, data.cards[1].value)
                  
            })
}

//determine which card has a higher value
function highestCard(card1, card2){

      let index1 = ""
      let index2 = "" 
      let decks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

      for(let deck of decks){
            if (deck === card1){
                  index1 = decks.indexOf(deck)
            }
      }

      for(let deck of decks){
            if (deck === card2){
                  index2 = decks.indexOf(deck)
            }
      }

      if(index1 > index2){
            
            compScore++
            winner.innerHTML = `<h1>COMPUTER WINS!</h1>`
            scoreCom.innerHTML = `<h1  class="score">Computer: ${compScore}</h1>`
      } 
      
      else if(index1 == index2){
            winner.innerHTML = `<h1 class="winner">WAR!</h1>`
      }

      else{
            meScore++
            winner.innerHTML = `<h1>YOU WIN!</h1>`
            scoreMe.innerHTML = `<h1  class="score">Me: ${meScore}</h1>`
      }
}