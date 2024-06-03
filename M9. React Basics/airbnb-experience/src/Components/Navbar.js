import Logo from "../Images/airbnb-logo.png"

export default function Navbar(){
      return(
            <div className="nav">
                  <img src={Logo} className="nav-logo" alt="airbnb logo"></img>
            </div>
      )
}