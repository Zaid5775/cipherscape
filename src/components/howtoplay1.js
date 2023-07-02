import React from "react";
import "./howtoplay.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Howtoplay() {
  return (
    <>
      {/* <div className='nav'>
            <Navbar />
          </div> */}
      <div className="Head-h">
        <div className="user-info">
          <Link to="/">
            <img className="back" src={require("./home.png")} alt="Back" />
          </Link>
        </div>
        <div className="logo">{/* Add your logo here */}</div>

        <div className="middle-h">
          <div className="htp-container">
            <div className="htp-section">
              <p className="heading-h">Gameplay Overview</p>
              <p className="content-h">
                The objective of CipherScape is to explore a mysterious world,
                solve encrypted puzzles, and progress through various locations
                by deciphering codes and unlocking new stages. As an intrepid
                explorer, your goal is to unravel the secrets of each level and
                uncover hidden treasures. Use your problem-solving skills and
                logical thinking to overcome obstacles, defeat challenges, and
                ultimately complete the game.
              </p>
            </div>
          </div>
          <div className="htp-container">
            <div className="htp-section">
              <p className="heading-h">Controls</p>
              <div className="controls-button">
                <p className="content-h">
                  <button>Go</button> To navigate to different rooms in the
                  game.
                </p>
                <p className="content-h">
                  <button>Pick</button> To collect items.
                </p>
                <p className="content-h">
                  <button>Use</button> to use items from your inventory.
                </p>
              </div>
              <p className="content-h">
                Note: You can use items anywhere and anytime in the game. Once
                an item is used, it is consumed and cannot be used again.
                Choose wisely when to utilize your items for maximum benefit.
              </p>
              <p className="content-h">
                Example: If you have a letter in your inventory and you use it,
                you can't use that letter again.
              </p>
            </div>
          </div>
          <div className="htp-container">
            <div className="htp-section">
              <p className="heading-h">Rooms and Directions</p>
              <p className="content-h">
                As you enter each room, you'll be presented with four possible
                directions: north, south, east, and west. Your intuition and
                exploration skills will be put to the test, as only one
                direction leads to the next room, while the others hold
                different obstacles.
              </p>
              <p className="content-h">
                In one direction, a fearsome monster awaits, ready to engage in
                battle. Your ability to strategically choose and use the items
                you've collected will determine your success in defeating the
                monster and unlocking the next room.
              </p>
              <p className="content-h">
                In another direction, you'll encounter a mind-bending puzzle
                that demands your problem-solving prowess. Analyze the clues,
                think critically, and find the correct solution to unlock the
                path forward. Failure to solve the puzzle will block your
                progress and require you to find an alternative route.
              </p>
              <p className="content-h">
                Some rooms may present unique challenges beyond monsters and
                puzzles. You might come across locked doors that require a
                specific key or encounter hidden traps that could inflict damage
                to your health. Adaptability and resourcefulness are key to
                overcoming these obstacles and proceeding on your journey.
              </p>
            </div>
          </div>
          <div className="htp-container">
            <div className="htp-section">
              <p className="heading-h">Progression</p>
              <p className="content-h">
                Begin your adventure as an explorer in the initial location of
                the game. This serves as the starting point for your journey.
              </p>
              <p className="content-h">
                Explore each room by deciphering codes and solving puzzles.
                Successfully unlocking a room allows you to progress to the next
                one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Howtoplay;
