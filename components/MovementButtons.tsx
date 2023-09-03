import React from 'react';

function MovementButtons({ onMove, currentPlayerName, currentPlayerSpeed, onResetTurn }) {
  const handleMove = (direction) => {
    // Call the provided callback with the direction when a button is clicked
    onMove(direction);
  };

  const handleResetTurn = () => {
    // Call the provided callback to reset the current player's turn and speed
    onResetTurn();
  };

  return (
    <div className="movement-buttons">
      {/* Display current player's name */}
      <div className="player-info">
        <p>Current Player: {currentPlayerName}</p>
      </div>
      
      {/* Display current player's remaining speed */}
      <div className="player-info">
        <p>Remaining Speed: {currentPlayerSpeed}</p>
      </div>

      {/* Movement buttons */}
      <button className='move-button' onClick={() => handleMove('up')}>&uarr;</button>
      <button className='move-button' onClick={() => handleMove('down')}>&darr;</button>
      <button className='move-button' onClick={() => handleMove('left')}>&larr;</button>
      <button className='move-button' onClick={() => handleMove('right')}>&rarr;</button>
      
      {/* Button to reset the current player's turn */}
      <button className='reset-button' onClick={handleResetTurn}>Reset Turn</button>
    </div>
  );
}

export default MovementButtons;