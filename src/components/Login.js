import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({handleLogin}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:9002/Login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          handleLogin();
          navigate("/");
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error occurred");
      });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <p id="Heading">Sign in</p>
        <div className="wr">
          <div className="uname">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="pass">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
        </div>

        {/* <div className="button200"> */}
          <button type="submit">Log-in</button>
        {/* </div> */}
      </form>
      <p id="alr">Don't have an account?</p>
      <Link to="/Signup">
        {/* <div className="button200"> */}
        <button>Sign up</button>
      </Link>
    </div>
  );
}

export default Login;
