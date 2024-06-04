import Star from "../Images/star.png"
import Person from "../Images/katie-zaferes.png"

export default function Card(props){
      return(
            <div className="card"> 
                  <div className="card-photo">
                        <img src={Person} className="person-img" alt="picture of Katie Zaferes"></img>
                        <p className="card-status">{props.status}</p>
                  </div>
                  <div className="card-txt">
                        <div className="card-txt-top">
                              <img src={Star} className="card-star" alt="star sign"></img>
                              <p className="card-rating">{props.rating}</p>
                              <p className="card-location">({props.count})·{props.location}</p>
                        </div>
                        <p className="card-description">{props.title}</p>
                        <p className="card-price"><strong>From €{props.price} </strong> / person</p>
                  </div>
                  
            </div>
            
      )
}

