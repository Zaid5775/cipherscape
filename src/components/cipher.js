import React, { useEffect, useState } from 'react';
import Game from './game';
import './cipher.css';

import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Cipher = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
 // Added state for username

  const navigate = useNavigate();

 const handleUnder = () =>{
  navigate("./Under")
 }
  const handlePlayNow = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="container0">
      {isGameStarted ? (
        <Game />
      ) : (
        <>
          <div className='nav'>
            <Navbar />
          </div>
          <div className="head">
            <div className="logo-main">
              <img src={require('./cipher1.png')} alt="" />
            </div>
            <div className="game-info">
              {/* {username ? <p className='username'>Hi, {username}</p> : null} */}
              <p id="slg">Navigate the Celestial Path, Illuminate the Secrets Within</p>
              <p id="info">
                Step into Cipherscape, an immersive puzzle-solving experience that takes you on a quest like no other.
                Dive into a world of secrets, hidden passages, and mind-bending challenges. Can you crack the codes and
                emerge victorious?
              </p>
              <audio src="song.mp3" type="audio/mp3" autoPlay loop></audio>
              <button id="play-button" className="button-30" onClick={handleUnder} role="button" >
                Play Now 
              </button>
            

              {/* onClick={handlePlayNow} */}
            </div>
            
          </div>
          <div className='tilt-main'>
              <div  className='tilt'><p>tilt your phone</p></div>
              <div className='tilt_img'><img  src = {require("./tilt.png")}></img></div>
              </div>
        </>
      )}
    </div>
  );
};

export default Cipher;
