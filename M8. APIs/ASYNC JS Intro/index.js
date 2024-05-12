
let deckId
const newDeck = document.getElementById("new-deck")
const newCards = document.getElementById("new-cards")
const imgContainer = document.getElementById("img-container")


newDeck.addEventListener("click", () => handleClick() )
newCards.addEventListener("click", () => handleNewCards())

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
                  console.log(data.remaining)

                  if(!data.remaining){
                        newDeck.disabled = false
                  }

                  imgContainer.innerHTML = `
                  <img src="${data.cards[0].image}">
                  <img src="${data.cards[1].image}">
                  `
            })
}
