import { menuArray } from "./data.js";

const orderView = document.getElementById("order-view")

let orderList = []

document.addEventListener("click", e => {

    if(e.target.dataset.add){
        handleAddButton(e.target.dataset.add)
    }

})

document.addEventListener("click", e => {

    if(e.target.dataset.remove){
        handleRemoveButton()
    }
})



function handleRemoveButton(){
    
    orderList.pop()
    renderOrders()

    if(orderList.length == 0){
        orderView.classList.add("invisible")
    }
}

function handleAddButton(n){
      
        let food = menuArray.filter(item => {
          return item.id == n
    })[0]

    orderList.push(food)
    console.log(orderList)

    if(orderList.length >= 1){
        orderView.classList.remove("invisible")
    }

    renderOrders()
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
                <p>${food.price}</p> 
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
    document.getElementById("total-price").innerHTML = result[1]
}

 function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
 }

 render()


