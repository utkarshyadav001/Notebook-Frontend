import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../style/navbar.css'


const Navbar = () => {
  const location = useLocation()
  // console.log(location)
  return (
    <header>
      {/* <h1>This is a best Navbar</h1> */}
      <nav id="navabr">
          <div id="appLogo">
              <h3>Mynotebook</h3>
          </div>

          <div id="navPageBtn">
              <ul>
                  <li><Link to="/" className={location.pathname=== '/'? 'active': ''}>Home</Link></li>
                  <li><Link to="/about" className={location.pathname=== '/about'? 'active': ''}>About</Link></li>
              </ul>
          </div>

          <div id="loginBtn">
              <button className="loginBtn">Log in</button>
              <button className="loginBtn">Sign in</button>
          </div>
      </nav>

    </header>
  )
}

export default Navbar
