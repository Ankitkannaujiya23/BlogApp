import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'


function Navbar() {
  // for the active class make highlight
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
  }, [location]);

  // make Logout function

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">.^. Apni_Library</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === "/portofolio" ? "active" : ""}`} to="/portofolio">Portofolio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === "/contact" ? "active" : ""}`} to="/">Contact Us </Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ?
              <form >
                <Link className="btn btn-login btn-primary mx-1" to="/login" role="button">  Login  </Link>


                <Link className="btn btn-login btn-primary mx-1" to="/signup" role="button">  Signup  </Link>
              </form> : <button className='btn btn-login btn-primary' onClick={handleLogout} >Logout</button>}



          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
