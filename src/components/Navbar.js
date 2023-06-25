import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [mainImageSrc, setMainImage] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const storedImage = localStorage.getItem('mainImage');
    if (storedImage) {
      setMainImage(JSON.parse(storedImage));
    }

    axios.get("https://cipherscape-api.vercel.app/user")
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

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={`navvv ${navbarOpen ? "navbar-open" : ""}`}>
      <div className="navvv1">
        <nav>
          <div id="toggleBtn" onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
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
        <Link id="usr" to='/User'>{username}<img id="img-gamer" src={mainImageSrc.src || require('./gamer1.png')}  alt="Main Image" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
