import React from 'react';
import AddBook from './AddBook';
import Books from './Books';
import { Link } from 'react-router-dom';

import BooksItem from './BooksItem';

const Sidebar = (props) => {


  return <>

    <div className="d-flex" id="wrapper">

      <div className="bg-primary" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 text-white fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa user-secret me-2"></i> Apni.^.Library
        </div>
        <div className="sidebar justify-content-center">
          <Link to="/"><i className="fa fa-fw fa-home"></i> Dashboard</Link>
          <Link to="/addnote"><i className="fa fa-fw fa-wrench"></i> Add Notebook</Link>
          <Link to="clients"><i className="fa fa-fw fa-user"></i> Clients</Link>
          <Link to="contact"><i className="fa fa-fw fa-power-off"></i> Log out</Link>
        </div>
      </div>
      {/* Make Sidebar Navigation */}

      <div id="page-content-wrapper">
        <nav className=" navbar navbar-expand-lg navbar-light bg-transparent py-4 x-4">
          <div className="d-flex align-items-center ">
            <i className="fas fa-align-left primary-text fs-4 me-3 px-1 " id="menu-toggle"></i>
            <h2 className="fs-2 m-0"> Dashboard</h2>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
              className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle second-text fw-bold " id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false"> <i className="fas fa-user me-2"></i> Admin</a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><a href="#" className="dropdown-item">Profile</a></li>
                  <li><a href="#" className="dropdown-item">Profile</a></li>
                  <li><a href="#" className="dropdown-item">Setting</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
     
      </div>
    </div>


  </>;
};

export default Sidebar;
