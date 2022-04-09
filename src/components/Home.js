import React from 'react' 
import { Router } from 'react-router-dom';
import AddBook from './AddBook';
import Books from './Books'
import BooksItem from './BooksItem';
import HeaderComp from './Header/HeaderComp';
import NavbarComp from './Header/NavbarComp';
import SideNavbarComp from './Header/SideNavbarComp';
import Sidebar from './Sidebar';


const Home = (props) => {
    // destructuring the showAlert from props
const {showAlert}=props;
    return (
        <>
        {/* <Sidebar/> */}
        {/* <SideNavbarComp/> */}
      /  {/* <NavbarComp/> */}
        <Router>

        <HeaderComp/>
        </Router>
        </>

    )
}
export default Home
