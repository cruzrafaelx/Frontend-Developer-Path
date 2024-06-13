import React from 'react'

export default function Meme(){
      
      //Meme state: controls the texts and the image url

      const [meme, setMeme] = React.useState({

            topText: "One does not simply",
            bottomText: "Walk into Mordor",
            randomImages: "http://i.imgflip.com/1bij.jpg"
      })

      //memeImages state: holds all the memes data coming from the fetched API using the useEffect() below.

      const [memeImages, setMemeImages] = React.useState([])

      //Fetches meme data from the API and passes this to the memeImages state setter

      React.useEffect(()=>{
            console.log("Effect ran")
            fetch('https://api.imgflip.com/get_memes') //Fetch memes
            .then(res => res.json()) //parse JSON
            .then(data => setMemeImages(data.data.memes)) //set state
      },[0])


      function handleMemeButton(e){
                  
            e.preventDefault()
            
            //Generate Random Image

            const randomNum = Math.floor(memeImages.length * Math.random())
            const url = memeImages[randomNum].url
            
            setMeme(previousImage => {
                  return{
                        ...previousImage,
                        randomImages: url
                  }
            })

      }

       //Generate Top and Bottom Text
      function handleChange(e){

              const {value, name} = e.target

              setMeme(prevSetMeme => ({
                  ...prevSetMeme,
                  [name]: value
              }))


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
                                          placeholder="shut up"
                                          name="topText"
                                          value={meme.topText}
                                          onChange={handleChange}
                                    />
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
                                          placeholder="and take my money"
                                          name="bottomText"
                                          value={meme.bottomText}
                                          onChange={handleChange}
                                    />
                              </div>

                        </div>
                        <button onClick={handleMemeButton} className="btn">Get a new meme</button>
                  </form>

                  

                  <div className="meme">
                        <img className="meme-img" src={meme.randomImages}></img>
                        <h2 className="meme-text top">{meme.topText}</h2>
                        <h2 className="meme-text bottom">{meme.bottomText}</h2>
                   </div>
                  
            </div>
      )
}