const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters.length) //91

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passwordLength = parseInt(prompt("Please enter the desired password length: "))
//parseInt - turns type of items into a Number

function generatePassword(){

  let randomPasswordA = []
  let randomPasswordB = []

  for (let i = 0; i < passwordLength ; i++){
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomPasswordA.push(characters[randomIndex])
    let passwordA = (randomPasswordA.toString()).replace(/,/g, '')
    password1.textContent = passwordA
  }
  
  for (let i = 0; i < passwordLength ; i++){
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomPasswordB.push(characters[randomIndex])
    let passwordB = (randomPasswordB.toString()).replace(/,/g, '')
    password2.textContent = passwordB
  }50

  //.replace(/,/g, '') - replaces certain characters from a string with another character
}

copyBttn1.onclick = function(){
  //Select Text

  //Copy text
  document.execCommand("Copy")
}
