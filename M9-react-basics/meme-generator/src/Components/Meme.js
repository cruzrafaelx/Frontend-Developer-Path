import memesData from "../memesData"
import React from 'react'

export default function Meme(){
      

      const [meme, setMeme] = React.useState({

            topText: "",
            bottomText: "",
            randomImages: "http://i.imgflip.com/1bij.jpg"
      })

      const [allMemeImages, setAllMemeImages] = React.useState(memesData)


      function handleMemeButton(e){
                  
            e.preventDefault()

            const memesArray = allMemeImages.data.memes
            const randomNum = Math.floor(memesArray.length * Math.random())
            const url = memesArray[randomNum].url
            
            setMeme(previousImage => {
                  return{
                        ...previousImage,
                        randomImages: url
                  }
            })
      }


      return(
            <div>
                  <form className="form">
                        <div className="input-container">
                              <div className="container">
                                    <label 
                                          htmlFor="left-input" className="label"> 
                                          Top Text
                                    </label>
                                    <input 
                                          id="left-input"  
                                          className="input" 
                                          type="text"
                                          placeholder="shut up">
                                    </input>
                              </div>
                              
                              <div className="container">
                                    <label 
                                          htmlFor="right-input" className="label">
                                          Bottom Text
                                    </label>
                                    <input 
                                          id="right-input" 
                                          className="input" 
                                          type="text"
                                          placeholder="and take my money">
                                    </input>
                              </div>
                        </div>
                        <button onClick={handleMemeButton} className="btn">Get a new meme</button>
                  </form>

                  <img className="meme-img" src={meme.randomImages}></img>
                  
            </div>
      )
}