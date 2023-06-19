import React from 'react';

const Room = ({ roomNumber, name, description, items, onMove, inventory, onPickItem, onUseItem, onUseInventoryItem }) => {
  return (
    <div className="room">
      <div className="room-header">
        <div className="room-number">Room {roomNumber}</div>
        <div className="room-name">{name}</div>
        <div className="room-health">Health: 100%</div>
      </div>
      <div className="room-description">{description}</div>
      <div className="room-items">
        {items && items.length > 0 ? (
          <div>
            <p>Items in the room:</p>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No items in the room.</p>
        )}
      </div>
      <div className="room-actions">
        <button onClick={() => onMove('north')}>North</button>
        <button onClick={() => onMove('south')}>South</button>
        <button onClick={() => onMove('east')}>East</button>
        <button onClick={() => onMove('west')}>West</button>
      </div>
      <div className="inventory-actions">
        <button onClick={onPickItem}>Pick</button>
        <button onClick={() => onUseItem('GO')}>Go</button>
        <button onClick={() => onUseItem('PICK')}>Pick</button>
        <button onClick={() => onUseItem('USE')}>Use</button>
      </div>
      <div className="inventory">
        {inventory.length > 0 ? (
          <div>
            <p>Your Inventory:</p>
            <ul>
              {inventory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Your inventory is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Room;
