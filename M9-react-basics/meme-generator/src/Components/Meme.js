import memesData from "../memesData"


export default function Meme(){

      function handleMemeButton(e){
                  
            e.preventDefault()

            const arrayLength = memesData.data.memes.length
            const randomNum = Math.floor(arrayLength * Math.random())
      
            console.log(memesData.data.memes[randomNum].url)
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
                  
            </div>
      )
}