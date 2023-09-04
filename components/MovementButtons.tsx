import React from 'react';

function MovementButtons({ onMove, currentPlayerName, currentPlayerStats, currentPlayerSpeed, onResetTurn, onZoomIn, onZoomOut, onActionButtonClick }) {
  const handleMove = (direction) => {
    // Call the provided callback with the direction when a button is clicked
    onMove(direction);
  };

  const handleResetTurn = () => {
    // Call the provided callback to reset the current player's turn and speed
    onResetTurn();
  };

  return (    
    <div className="flex justify-between items-center p-4 bg-gray-900 absolute bottom-0 w-full">
        <div className="profile">
            <div className="w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="player-info">
              <p>Current Player: {currentPlayerName}</p>
            </div>
            
            {/* Display current player's remaining speed */}
            <div className="player-info">
              <p>Remaining Speed: {currentPlayerSpeed}</p>
            </div>
        </div>
        <div className="controls flex flex-col items-center space-y-2">
            <div className="controls-row flex space-x-2">
                <button className="control-button p-2 bg-gray-700 text-white" onClick={() => handleMove('up')}>&uarr;</button>
            </div>
            <div className="controls-row flex space-x-2">
                <button className="control-button p-2 bg-gray-700 text-white"onClick={() => handleMove('left')}>&larr;</button>
                <button className="control-button p-2 bg-gray-700 text-white"onClick={() => handleMove('down')}>&darr;</button>
                <button className="control-button p-2 bg-gray-700 text-white"onClick={() => handleMove('right')}>&rarr;</button>
            </div>
        </div>
        <div className="controls flex flex-col items-center space-y-2">
          <div className="controls-row flex space-x-2">
            <button className="action-button p-2 bg-red-600 text-white" onClick={onActionButtonClick}>Action</button>
            
            {/* Handle Zoom In and Out */}
            <button className='zoom-button btn' onClick={onZoomIn}>+</button>
            <button className='zoom-button btn' onClick={onZoomOut}>-</button>
          </div>
          <div className="controls-row flex space-x-2">
            <button className="action-button p-2 bg-red-600 text-white" onClick={handleResetTurn}>Reset Turn</button>
          </div>
        </div>
        <div className="stats flex flex-col items-center">
            <div className="stat">Speed: {currentPlayerStats.speed}</div>
            <div className="stat">Might: {currentPlayerStats.might}</div>
            <div className="stat">Sanity: {currentPlayerStats.sanity}</div>
            <div className="stat">Knowledge: {currentPlayerStats.knowledge}</div>
        </div>
    </div>
  );
}

export default MovementButtons;