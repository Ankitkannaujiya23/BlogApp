import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import login from '../images/login.png'


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      //Save the Authtoken and redirect 
      localStorage.setItem('token', json.authtoken)
      navigate('/');
      props.showAlert("Logged In Successfully ", "success")
    }
    else {
      props.showAlert("Plz Fill Correct Info", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="container">
        <div className=" main-container container my-3  row d-flex">
          <div className=" col-md-6 ">
            <div className="login-img">

              <img src={login} alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className=" login-form">
              <h2 className="mb-4">Login Here</h2>
              <p>For manage your books on Cloud</p>
              <form onSubmit={handleLogin}>

                <div className="mb-3 beautiful-form">
                
                  <input type="email" className="form-control" id="Email" name='email'
                    value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder='Username' />
                    <i class="fa fa-user fa-lg"></i>
                </div>

                <div className="mb-3 beautiful-form">
                  <input type="password" className="form-control" name='password' value={credentials.password}
                    onChange={onChange} id="Password" placeholder='Password' />
                <i class="fas fa-lock"></i>
                </div>


                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <div className="d-grid gap-2  mx-auto">
                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
                </div>
               <p className='my-3'> Don't Have account <Link to="/signup"> Registration here </Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
