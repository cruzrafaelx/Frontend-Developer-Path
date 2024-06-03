import Logo from "../Images/airbnb-logo.png"

export default function Navbar(){
      return(
            <nav className="nav">
                  <img src={Logo} className="nav-logo" alt="airbnb logo"></img>
            </nav>
      )
}