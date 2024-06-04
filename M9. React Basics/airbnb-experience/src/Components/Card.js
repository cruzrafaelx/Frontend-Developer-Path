
export default function Card(props){
      
      let badgeText
      if (props.item.openSpots === 0) {
          badgeText = "SOLD OUT"
      } else if (props.item.location === "Online") {
          badgeText = "ONLINE"
      }
      
      
      return(
            <div className="card"> 
                  <div className="card-photo">
                        <img src={"./Images/" + props.item.coverImg} className="person-img" alt="picture of Katie Zaferes"></img>
                        {badgeText && <p className="card-status">{badgeText}</p>}
                  </div>
                  <div className="card-txt">
                        <div className="card-txt-top">
                              <img src="./Images/star.png" className="card-star" alt="star sign"></img>
                              <p className="card-rating">{props.item.stats.rating}</p>
                              <p className="card-location">({props.item.stats.reviewCount})·{props.item.location}</p>
                        </div>
                        <p className="card-description">{props.item.title}</p>
                        <p className="card-price"><strong>From €{props.item.price} </strong> / person</p>
                  </div>
                  
            </div>
            
      )
}

