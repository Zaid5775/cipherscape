import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        
        <li>
          <Link id='setting' to="/setting">Settings</Link>
        </li>
        <li>
          <Link id='htp'  to="/Howtoplay">How to Play?</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
