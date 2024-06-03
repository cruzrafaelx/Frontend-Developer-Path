import Star from "../Images/star.png"
import Person from "../Images/katie-zaferes.png"

export default function Card(){
      return(
            <div className="card"> 
                  <div className="card-photo">
                        <img src={Person} className="person-img" alt="picture of Katie Zaferes"></img>
                        <p className="card-status">Sold Out</p>
                  </div>
                  <div className="card-txt">
                        <div className="card-txt-top">
                              <img src={Star} className="card-star" alt="star sign"></img>
                              <p className="card-rating">5.0</p>
                              <p className="card-location">(6)·USA</p>
                        </div>
                        <p className="card-description">Life lessons with Katie Zaferes</p>
                        <p className="card-price"><strong>From €136 </strong> / person</p>
                  </div>
                  
            </div>
            
      )
}