import Grid from "../Images/photo-grid.png"

export default function Hero(){
      return(
            <div className="hero">
                  <img src={Grid} className="grid-img" alt="image of different activities"></img>
                  <div className="hero-txt">
                        <h1>Online Experiences</h1>
                        <h4>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h4>
                  </div>
                  
            </div>
      )
}