let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = '' //deletes the value of input after every submission.
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

tabBtn.addEventListener("click", function(){
  //Grab URL of the current tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

  })  
})

deleteBtn.addEventListener("click", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function render(leads){
  let listItems = ""
  for(let i = 0; i < leads.length; i++){
    listItems += 
    `<li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>
    `
  }
  ulEl.innerHTML = listItems
}


//Another version of rendering leads

// function renderLead(){
//   let listItem = "<li>" + inputEl.value + "</li>"
//   ulEl.innerHTML += listItem
// }


//document.createElement("li")
//variable.append()
//.innerHTML - let's you add HTML elements to the DOM from Javascript
//.value - accesses the input value from an input box


//Local Storage
// Local Storage only supports strings. To pass an array into the local storage, you should use JSON.stringify().
// and to get an item, use JSON.parse()




//falsy values
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN