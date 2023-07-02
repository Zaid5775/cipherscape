import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom';


export default function About() {
 
  return (
    <>
    <div className='user-home'>
      <Link to = "/"><img  className = "back" src = {require('./home.png')}/> </Link>
    </div>
    <div className='container3'>
    
    <div className='main-about'>
    <img  className = 'main-img-about'src={require('./cipher1.png')}alt = "headimg"/>

    <div className='main-text-about'>
    <div className='main-text-left'>
    {/* <h2>What is "MeetMate"?</h2> */}
    </div>
    <div className='main-text-right'>
    <p><span>C</span>ipherScape is an immersive and captivating text-based puzzle game that takes you on a thrilling adventure through a mysterious world of encrypted messages, secret codes, and hidden treasures. Put your problem-solving and logical thinking skills to the test as you unravel the secrets of each level. Embark on an epic journey as an intrepid explorer, venturing into ancient ruins, secret societies, and high-tech facilities. Each location presents a series of intriguing puzzles and challenges that will challenge your intellect and creativity. Decode intricate ciphers, decipher cryptic clues, and solve mind-bending riddles to unlock the path forward.</p>
    </div>
    <div
      className = 'social-acc'>
    <Link className = 'social1' to= "https://instagram.com/knoxzaid/"><img  id='main-title-img' src={require('./instagram.png')}alt = "insta"/></Link>
    <Link className = 'social2'to= "https://github.com/zaid5775"><img id='main-title-img' src={require('./github.png')}alt = "github"/></Link>
    <Link className = 'social3' to= "https://twitter.com/knoxzaid1"><img id='main-title-img' src={require('./twitter.png')}alt = "twitter"/></Link>
    <Link className = 'social4' to= "https://www.linkedin.com/in/zaid-shaikh-a59aa9215/"><img  id='main-title-img' src={require('./linkedin.png')}alt = "linkedin"/></Link>

              
    </div>
    

    </div>
    </div>
    </div>
    </>
  )
}
