import React, { useState, useEffect } from "react";
import "./under.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Under = () => {
  const [name, setName] = useState();

const navigate = useNavigate()
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get("https://cipherscape-api.onrender.com/")
      .then((res) => {
        if(res.data.success){
          setName(res.data.username);
          console.log("ho gyaa yayyyyyyyyyyyyyyy")
        }
        else{
          navigate("/Login")
          console.log("nhi hai bhai naam")
        }
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="under">
      <p className="1"> Hi, {name}</p>
      <p className="2">Game is under-construc... </p>
    </div>
  );
};

export default Under;
