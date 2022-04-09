import React from 'react'
import logo from '../Header/logo.jpg'
import { Link } from 'react-router-dom'


const NavbarComp = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid  ">
                    <a class="container navbar-brand fw-bold text-white" href="#">.^. Apni_Library</a>
                    <Link to="/" type='button' className='btn btn-dark btn-outline-warning mx-2'>Login</Link>
                    <div className="logo ">
                        
                        <img className='rounded-circle' src={logo} alt="" />
                    </div>


                </div>
            </nav>
        </>
    )
}

export default NavbarComp   