import Avatar from "../images/avatar.jpg"

export default function Image(){
      return(
            <div className="avatar">
                  <img src={Avatar} className="avatar" alt="user avatar" height="100px"></img>
            </div>
      )
}