import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [mainImageSrc, setMainImage] = useState("");

  useEffect(() => {


      const storedImage = localStorage.getItem('mainImage');
      if (storedImage) {
        setMainImage(JSON.parse(storedImage));
      }
    


    axios.get("http://localhost:9002")
      .then((res) => {
        if (res.data.success) {
          setUsername(res.data.username);
  
          console.log("ho gyaa yayyyyyyyyyyyyyyy");
        } else {
          console.log("nhi hai bhai naam");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="navvv">
      <div className="navvv1">
        <nav>
          <ul>
            <li>
              <Link id='setting' to="/setting">Settings</Link>
            </li>
            <li>
              <Link id='htp' to="/Howtoplay">How to Play?</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="usrul">
        <Link id="usr" to='/User'>{username}<img id="img-gamer" src={mainImageSrc.src} alt="Main Image" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
