import React from 'react';
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import signup from '../images/signup.jpg'


const Signup = (props) => {

  const [credentials, setCredentials] = useState({name:"", phone:"", email:"",password:"",cnfpassword:""});
 let navigate = useNavigate();
  
  const handleLogin = async (e)=>{
        e.preventDefault();
        // destructuring from credentials 
        const {name,phone,email,password}= credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({name,phone,email,password })
        }); 
        const json= await response.json()
        console.log(json)
       if (json.success) {
         
         //Save the Authtoken and redirect 
         localStorage.setItem('token', json.authtoken);
         navigate('/');
         props.showAlert("Acount Created Successfully ","success");

       }
       else{
        props.showAlert("Details are wrong  Plz try Again ","danger");
       }
       
    }

    const onChange = (e)=>{
        setCredentials({...credentials,  [e.target.name] : e.target.value})
    }

  return <div>
    <div className="container">
        <div className=" main-container container my-2 row d-flex">
       
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className=" login-form">
              <h2 className="mb-2">Signup Here </h2>
              <p>Create an account on ApniLibrary for store your notes on Cloud</p>
              <form onSubmit={handleLogin}>


                <div className="mb-1 beautiful-form">
                    <input type="text" className="form-control" id="name" aria-describedby="name" name='name' value={credentials.name} onChange={onChange} placeholder='Your Name'/>
                    <i class="far fa-user"></i>
                  </div>

                  <div className="mb-1 beautiful-form">
                    <input type="text" className="form-control" id="phone" aria-describedby="phone" name='phone' value={credentials.phone} onChange={onChange} placeholder='Your Phone' />
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div className="mb-1 beautiful-form">
                    <input type="email" className="form-control" id="email" aria-describedby="email"  name='email' value={credentials.email} onChange={onChange} placeholder='Your Email' />
                    <i class="far fa-envelope-open"></i>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-1 beautiful-form">
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} placeholder='Your Password' />
                    <i class="fas fa-lock"></i>
                  </div>
                  <div className="mb-4 beautiful-form">
                    <input type="password" className="form-control" id="cnfpassword" name='cnfpassword' value={credentials.cnfpassword} onChange={onChange} placeholder='Confirm Password '/>
                    <i class="fas fa-lock"></i>
                  </div>
                <div className="d-grid gap-2  mx-auto">
                  <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
          <div className=" col-md-6 ">
            <div className="login-img">

              <img src={signup} alt="" />
            </div>
          </div>
        </div>
      </div>
   

  </div>;
};

export default Signup;
