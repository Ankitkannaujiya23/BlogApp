import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Body/About'
import AddNoteBook from '../Body/AddNoteBook'
import AllBooks from '../Body/AllBooks'
import Contact from '../Body/Contact'
import Dashboard from '../Body/Dashboard'
import Logout from '../Body/Logout'
import NavbarComp from './NavbarComp'
import SideNavbarComp from './SideNavbarComp'
import Signup from '../Signup'

const HeaderComp = () => {
  return (
    <>
    <NavbarComp/>
    <SideNavbarComp/>
    {/* Register the side navigation  */}
    
    <div className="wrap">

    <Routes>
      {/* There is the two way to register the sidenavigation */}
    {/* <Route path='/'  element={<Dashboard/>} /> */}

     <Route path='/addnotebook' element={ <AddNoteBook/>} /> 
     <Route path='/allbooks' element={ <AllBooks/>} /> 
     <Route path='/about' element={ <About/>} /> 
     <Route path='/contact' element={  <Contact/>} /> 
     <Route path='/login' element={ <Logout/>} /> 
     <Route path='/signup' element={ <Signup/>} /> 
     <Route path='/' element={<Dashboard/>} /> 
    
    </Routes>
    </div>

    </>
  )
}

export default HeaderComp