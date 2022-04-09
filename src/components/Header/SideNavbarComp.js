import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideNavbarComp = () => {
  
  let navigate=useNavigate();
  let location = useLocation();
    
   useEffect(() => {
     console.log(location)
    }, [location]);
    
    //logout Function 
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    }
  
    
    
  return (
    <>
      <div className="sidebar-body">
        <div className=" text-center py-4 text-white fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa user-secret me-2"></i> Apni.^.Library 
        </div>
        <div className="sidebar justify-content-center">
          <Link className={`${location.pathname==="/"?"active" : ""}`} to="/"><i className="fa fa-fw fa-home"></i> Dashboard</Link>
          <Link className={`${location.pathname==="/addnotebook"?"active" : ""}`} to="/addnotebook"><i class="fa fa-fw fa-book-medical"></i>Add Notebook</Link>
          <Link className={`${location.pathname==="/allbooks"?"active" : ""}`} to="/allbooks"><i class="fas fa-book"></i>Your Books</Link>
          <Link className={`${location.pathname==="/about"?"active" : ""}`} to="/about"><i className="fa fa-fw fa-address-card"></i>About</Link>
          <Link className={`${location.pathname==="/contact"?"active" : ""}`} to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</Link>
          <Link className={`${location.pathname==="/login"?"active" : ""}`} role="button" onClick={handleLogout} to='/'><i className="fa fa-fw fa-power-off"></i> Log Out</Link>

        </div>
      </div>
        </>
    )
}

export default SideNavbarComp