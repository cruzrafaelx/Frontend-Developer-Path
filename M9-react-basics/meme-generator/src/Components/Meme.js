export default function Meme(){
      return(
            <div>
                  <form className="form">
                        <div className="input-container">
                              <div className="top-container">
                                    <label className="top-label">Top Text</label>
                                    <input className="top-input" type="text"></input>
                              </div>
                              
                              <div className="btm-container">
                                    <label className="btm-label">Bottom Text</label>
                                    <input className="btm-input" type="text"></input>
                              </div>
                        </div>
                        <button className="btn">Get a new meme</button>
                  </form>
                  
            </div>
      )
}