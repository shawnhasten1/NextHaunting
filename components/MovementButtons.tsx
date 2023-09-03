import React from 'react';

function MovementButtons({ onMove, currentPlayerName, currentPlayerStats, currentPlayerSpeed, onResetTurn, onZoomIn, onZoomOut }) {
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
      {/* Player info section (on the left) */}
      <div className="player-info-section">
        {/* Display current player's name */}
        <div className="player-info">
          <p>Current Player: {currentPlayerName}</p>
        </div>
        
        {/* Display current player's remaining speed */}
        <div className="player-info">
          <p>Remaining Speed: {currentPlayerSpeed}</p>
        </div>
      </div>

      {/* Movement buttons section (in the middle) */}
      <div className="movement-buttons-section">
        <button className='move-button btn' onClick={() => handleMove('up')}>&uarr;</button>
        <button className='move-button btn' onClick={() => handleMove('left')}>&larr;</button>
        <button className='move-button btn' onClick={() => handleMove('down')}>&darr;</button>
        <button className='move-button btn' onClick={() => handleMove('right')}>&rarr;</button>
      </div>

      {/* Reset and zoom buttons section (on the right) */}
      <div className="reset-zoom-section">
        {/* Button to reset the current player's turn */}
        <button className='reset-button btn' onClick={handleResetTurn}>Reset Turn</button>

        {/* Handle Zoom In and Out */}
        <button className='zoom-button btn' onClick={onZoomIn}>+</button>
        <button className='zoom-button btn' onClick={onZoomOut}>-</button>
      </div>
      <div className="player-info-section">
        <div className="player-info">
          <p><small>Speed: {currentPlayerStats.speed}</small></p>
          <p><small>Might: {currentPlayerStats.might}</small></p>
          <p><small>Sanity: {currentPlayerStats.sanity}</small></p>
          <p><small>Knowledge: {currentPlayerStats.knowledge}</small></p>
        </div>
      </div>
    </div>

  );
}

export default MovementButtons;