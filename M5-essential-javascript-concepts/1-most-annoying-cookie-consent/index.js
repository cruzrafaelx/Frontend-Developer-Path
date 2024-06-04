const consentForm = document.getElementById("consent-form")
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalBtns = document.getElementById("modal-choice-btns")

//Allows the consent form to appear after 1.5 seconds of page refresh.
setTimeout(function(){
  modal.style.display = "block"
}, 3000)

//Makes the consent form disappear when close button gets clicked
modalCloseBtn.addEventListener("click", function(){
  modal.style.display = "none"
})

//Prevents the consent form from refreshing when accept button gets pressed
consentForm.addEventListener("submit", function(e){
  e.preventDefault();


  const loginFormData = new FormData(consentForm) 
  const name = loginFormData.get('fullname')
  
  
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
  </div>
  `
setTimeout(function(){

  document.getElementById("uploadText").innerText = "Making the sale..."

},4000)

setTimeout(function(){
  document.getElementById("modal-inner").innerHTML = `
  <h2>Condragulations <span class="modal-display-name">${name}</span>! </h2>
  <p>We just sold the rights to your eternal soul.</p>
  <div class="idiot-gif">
  <img src="images/rupaul.gif" class="rupaul">
  </div>
  `
},5000)

setTimeout(function(){
  modalCloseBtn.disabled = false
}, 10000)
 
})

declineBtn.addEventListener("mouseover", function(){
  modalBtns.classList.toggle('reverse')
})
