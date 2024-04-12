import { menuArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const orderView = document.getElementById("order-view")

let orderList = []

//Event Listeners

//add button listener
document.addEventListener("click", e => {

    if(e.target.dataset.add){
        handleAddButton(parseInt(e.target.dataset.add))
    }

})

//remove button listener
document.addEventListener("click", e => {

    //Use parseInt to convert the value of dataset to an integer. 
    if(e.target.dataset.remove){
        handleRemoveButton(e.target.dataset.remove)
    }
})

//complete order button listener
document.getElementById("order-btn").addEventListener("click", (e) =>{
    document.querySelector(".form-container").classList.remove("invisible")
})

//pay button listener


//Handle Add Button
function handleAddButton(n){
      
        let food = menuArray.filter(item => {
          return item.id == n
    })[0]

    //through {...Spread Operator}, the orderList will be a shallow copy of the menuArray
    //This ensures that changes done to the orderList will not be reflected to the menuArray

    orderList.push({...food})
    let lastIndex = orderList.length - 1
    orderList[lastIndex].id = uuidv4()

    if(orderList.length >= 1){
        orderView.classList.remove("invisible")
    }

    renderOrders()
}

//Handle Remove Button
function handleRemoveButton(n){
    
    const targetButton = orderList.find(order => order.id === n)

    const index = orderList.indexOf(targetButton)

    orderList.splice(index, 1)

    renderOrders()
    removeOrderView()
   
}

function removeOrderView(){
    if(orderList.length == 0){
        orderView.classList.add("invisible")
    }
}


function getOrders(){
    
    let htmlOrders = ``
    let sumPrice = 0

    orderList.forEach(food =>{

        htmlOrders += `
        <section class="order-line flex">
                <section class="flex order-line-left">
                    <h3 class="food-name">${food.name}</h3>
                    <button class="rmv-btn" data-remove="${food.id}">remove</button>
                </section>
            <section class="order-line-right">
                <p>€${food.price}</p> 
            </section>   
        </section>
        `
       sumPrice += food.price
    })

   return [htmlOrders, sumPrice]
}


let htmlFeed = ``


 function getFeedHtml(){
 
      menuArray.forEach(item => {

            htmlFeed += `
            <section class="flex sub-container ">
      
                <section class="first-sec">
                    <p class="food-item">${item.emoji}</p>
                </section>
        
                <section class="second-sec">
                    <section class="food-item-desc">
                        <h3 class="food-name">${item.name}</h3>
                        <p class="ingredients">${item.ingredients.join(", ")}</p>
                        <p class="price">€${item.price}</p>
                    </section>
                
                    <button class="add-btn" data-add="${item.id}">+</button>
                </section>
            </section>
            `
      })
      return htmlFeed
 }


function renderOrders(){
    const result = getOrders()
    document.getElementById("order-section").innerHTML = result[0]
    document.getElementById("total-price").innerHTML =`€${result[1]}` 
}

 function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
 }

 render()


