import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Signup.css'
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const navigate = useNavigate();
    const [ username, setUsername] =  useState()
    const [ email, setEmail] =  useState()
    const [ password, setPass] =  useState()
    const [ cpass, setCpass] =  useState()
    const [error, setError] = useState("");


  

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    
const handleSubmit = (e) =>{
    e.preventDefault()
    
    if (password !== cpass) {
      alert("Password does not match!");
      return;
    }
// https://cipherscape-api.onrender.com/
            axios.post("https://cipherscape-api.vercel.app/Signup", {username, email, password, cpass} )
            .then( result => {
                alert("Successfully Registered!!")
                console.log(result)
                navigate("/Login")
                
            })
            .catch((error) => {
              if (error.response && error.response.status === 409) {
                setError("Username already exists. Please choose a different username.");
                alert("Username already exists!")
              } else {
                setError("An error occurred. Please try again.");
                alert("Unkown ERROR!!!")
              }
            });

 
    }



      
  return (
    <div className="Signup">
        <form onSubmit={handleSubmit}>
      <p id="Heading"> Sign Up</p>
      <div className="wr">
      <div className="uname">
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      /></div>
       <div className="email"><input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
      /></div>
      <div className="pass"><input
        type="password"
        name="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        required
      /></div>
       <div className="cpass"><input
        type="password"
        name="confirmPassword"
        onChange={(e) => setCpass(e.target.value)}
        placeholder="Re-enter Password"
        required
      /></div></div>
      
      <div className="button200">
        <button type="submit">Sign Up</button>
        </div>
        </form>
      <p id="alr">already have account?</p>
      <div className="button200">
      <Link to='/Login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Signup;