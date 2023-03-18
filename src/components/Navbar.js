import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../style/navbar.css'


const Navbar = () => {
  const logOut = ()=>{
    localStorage.removeItem("authToken");

  }
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
                  <li><Link to="/addnote" className={location.pathname=== '/addnote'? 'active': ''}>Add Note</Link></li>
                  <li><Link to="/note" className={location.pathname=== '/note'? 'active': ''}>My Notes</Link></li>
                  <li><Link to="/about" className={location.pathname=== '/about'? 'active': ''}>About</Link></li>
              </ul>
          </div>

          <div id="loginBtn">
              {!localStorage.getItem("authToken") ? <> <Link className="loginBtn" to="/login"> Log in</Link>
              <Link className="loginBtn" to="/signup"> Sign in</Link>
              </> : <Link className="loginBtn" onClick={logOut} to="/login"> Logout </Link>}
          </div>
      </nav>

    </header>
  )
}

export default Navbar
