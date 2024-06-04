import Logo from "../images/react-logo.png"


export default function Navbar(){
      return(
            <div>
                  <nav className="navbar">
                        <div className="left">
                              <img className="navbar-logo" src={Logo} alt="react logo" width="40px"></img>
                              <h3>ReactFacts</h3>
                        </div>
                        <div className="right">
                              <h4>React Course - Project 1</h4>
                        </div>
                  </nav>
            </div>
      )
}