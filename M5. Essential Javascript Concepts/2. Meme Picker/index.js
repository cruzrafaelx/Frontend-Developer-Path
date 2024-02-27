import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")
const getImgBtn = document.getElementById("get-image-btn")
const gifsOnlyBox = document.getElementById('gifs-only-option')



//Function to create an array of emotions from the above array
function getEmotionsArray(cats){

    let emotionsArray =[]

    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }

    return emotionsArray
}

getImgBtn.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(){


    //saves the value of the checked radio into the const checkedRadio when the Get Image button is clicked 
    if (document.querySelector('input[type="radio"]:checked')){
       const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
       
       //Checks if the gif checkbox has been checked.
       const isGif = gifsOnlyBox.checked

        //Filters out the cats images matching to the chosen emotion by user and if the animated gifs only box has been selected.
        const matchingCatsArray = catsData.filter(function(cat){
        if(isGif){
            return cat.isGif && cat.emotionTags.includes(selectedEmotion)
        } else{
            return cat.emotionTags.includes(selectedEmotion)
        }
        
    })

    return matchingCatsArray
    }   
}


emotionRadios.addEventListener("change", highlightCheckedOption)

// function that highlights the text and the radio of the clicked radio
function highlightCheckedOption(e){
    
    // removes the highlight class from each element with the radio class
    const radiosArray = document.getElementsByClassName('radio')
    for(let radio of radiosArray){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
    
}


//Separation of concerns
function renderEmotionsRadios(cats){
    const emotions  = getEmotionsArray(cats)
    let radioItems = ""

    for(let emotion of emotions){

        radioItems += `
        
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
        </div>
        
        `
    }

    return emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)


