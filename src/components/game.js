import React, { useState } from 'react';
import Room from './room';
import './game.css'
// import './game.d:\cipher\cipher\src\components\Magz.otfcss'
// import { useNavigate } from 'react-router';

const Game = () => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(1);
  // const navigate = useNavigate();


  const [inventory, setInventory] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [health, setHealth] = useState(100);
  const roomDescriptions = [
    "You are in Room 0. Description of Room 0.",
    "You find yourself in a dimly lit chamber, the air thick with anticipation. The room is adorned with ancient hieroglyphics, hinting at mysteries waiting to be unraveled. A faint glimmer catches your eye from a distant corner, beckoning you forward. The journey begins here. Choose your path wisely.",
    "You are in Room 2. Description of Room 2.",
    "You are in Room 3. Description of Room 3.",
    "You are in Room 4. Description of Room 4.",
    // Add descriptions for other rooms here
  ];
  

  const roomConnections = {
    1: { north: 2  },
    2: {  east: 3 , south:1 },
    3: { north: 4 },
    4: { east: 5 },
    5: {  north: 6 },
    6: {  east: 7 },
    7: {  north: 8 },
    8: {  east: 9 },
    9: {  north: 10 },
    10: {  },
  };
  const monsterRooms = [
    { room: 2, direction: 'north' },
    { room: 5, direction: 'west' },
  ];
  

  const [roomItems, setRoomItems] = useState({
    1:['Letter'],
    2: ['Key'],
    4: ['Sword'],
    6: ['Potion'],
  });
  const roomNames = {
    1: 'Starting Room',
    2: 'Room of Keys',
    3: 'Room of Challenges',
    4: 'Room of Treasures',
    5: 'Room of Secrets',
    6: 'Room of Potions',
    7: 'Room of Mirrors',
    8: 'Room of Wisdom',
    9: 'Room of Shadows',
    10: 'Final Room',
  };

  // const handleMove = (direction) => {
  //   const connections = roomConnections[currentRoom];
  //   if (connections && connections[direction]) {
  //     const nextRoom = connections[direction];
  //     // Check if moving from room 1 to room 2
      
  //     // Check if moving to a room with a monster
  //   }
  // };
  const handleMove = (direction) => {
    const connections = roomConnections[currentRoom];
    if (connections && connections.hasOwnProperty(direction)) {
      setCurrentRoom(connections[direction]);
    }
  };

  const handlePick = () => {
    const itemsInRoom = roomItems[currentRoom];
    if (itemsInRoom && itemsInRoom.length > 0) {
      const pickedItem = itemsInRoom[0];
      setInventory([...inventory, pickedItem]);
      setRoomItems((prevItems) => {
        const updatedItems = { ...prevItems };
        updatedItems[currentRoom] = itemsInRoom.slice(1);
        return updatedItems;
      });
    }
  };

  const handleUseItem = (direction) => {
    if (direction === 'GO') {
      handleMove(direction.toLowerCase());
      showAdditionalButtons == false ? setShowAdditionalButtons(true) : setShowAdditionalButtons(false);
    } else if (direction === 'PICK') {
      setShowAdditionalButtons(false);
      handlePick();
    } else if (direction === 'USE') {
      setShowAdditionalButtons(false);
      console.log('Select an item from your inventory to use:');
      console.log(inventory);
    }
  };

  const handleUseInventoryItem = (item) => {
    const currentItem = roomItems[currentRoom];
    const monsterRooms = [2, 5]; // Rooms with monsters that need items to defeat
    if (monsterRooms.includes(currentRoom)) {
      if (roomItems[currentRoom].includes(item)) {
        console.log('Congratulations! You defeated the monster and completed the game.');
        setGameCompleted(true);
        // Remove the used item from the player's inventory
        setInventory((prevInventory) => prevInventory.filter((inventoryItem) => inventoryItem !== item));
        return;
      }
      console.log(`You cannot use ${item} here. Choose a different item or try another action.`);
      setHealth(health - 20); // Deduct 20 health points for using the wrong item
    } else {
      console.log(`There is no use for ${item} here. Choose a different item or try another action.`);
    }
  };
  

  const roomDescription = roomDescriptions[currentRoom];

  return (
    <div className="game">
      
      <div className="header-g">
  {/* <div className="room-info"> */}
  
    <p className="room-number">Room {currentRoom}</p>
    <p className="room-name">{roomNames[currentRoom]}</p>
  {/* </div> */}
  <div className="health">
    <p>Health: {health}%</p>
    <div className="health-line">
      <div className="health-progress" style={{ width: `${health}%` }}></div>
    </div>
  </div>
</div>

<div className="middle-g">
  <p className="room-description"> {roomDescription}</p>
  <div className="room-items">
    
    {roomItems[currentRoom] && roomItems[currentRoom].length > 0 ? (
      <>
     
        <p id='itemss'>Items in the room:</p>
        <ul>
          {roomItems[currentRoom].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    ) : (
      <p>No items in the room.</p>
    )}


<div className="action-buttons">
      <button onClick={() => handleUseItem('GO')}>GO</button>
      <button onClick={() => handleUseItem('PICK')}>PICK</button>
      <button onClick={() => handleUseItem('USE')}>USE</button>
    </div>
    
    {showAdditionalButtons && (
      <div className="additional-buttons">
        <button onClick={() => handleMove('south')}>South</button>
        <button onClick={() => handleMove('east')}>East</button>
        <button onClick={() => handleMove('west')}>West</button>
        <button onClick={() => handleMove('north')}>North</button>
      </div>
    )}
  

    
  </div>


  
</div>

{/* 
      <Room
    
        description={roomDescription}
        items={roomItems[currentRoom]}
        onMove={handleMove}
        inventory={inventory}
        onPickItem={handlePick}
        onUseItem={handleUseItem}
        onUseInventoryItem={handleUseInventoryItem}
      /> */}
      {gameCompleted && <div className="game-completed">Congratulations! You completed the game!</div>}
    </div>
  );
};

export default Game;
