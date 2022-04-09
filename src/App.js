
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import BookState from './context/books/BookState';
import Alert from './components/Alert';
import { useState } from 'react';
import NavbarComp from './components/Header/NavbarComp';
import HeaderComp from './components/Header/HeaderComp';




function App() {
  const [alert, setAlert] = useState(null);
  // make function for show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <BookState>

        {/* <Router> 
          { <Navbar />
            <Alert alert={alert} 

          <div>
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About  />} />
              <Route path="/login" element={< Login showAlert={showAlert}/>} />
              <Route path="/signup" element={< Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
      
        </Router> 
          */}
        {/* Sidenav Routing */}



        <Router>
          <HeaderComp/>
        </Router>

      </BookState>
    </>
  );
}

export default App;
