import { menuArray } from "./data.js";

const orderView = document.getElementById("order-view")


document.addEventListener("click", function(e) {

    if(e.target.dataset.add){
        handleAddButton(e.target.dataset.add)
    }

})

function handleAddButton(n){
      
        let food = menuArray.filter(item => {
          return item.id == n
    })[0]

}





let htmlFeed = ``

 function render(){

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

document.getElementById("feed").innerHTML = render()

