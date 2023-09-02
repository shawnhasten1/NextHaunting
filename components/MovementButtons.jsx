import React from 'react';

function MovementButtons({ onMove }) {
  const handleMove = (direction) => {
    // Call the provided callback with the direction when a button is clicked
    onMove(direction);
  };

  return (
    <div className="movement-buttons">
      <button className='move-button' onClick={() => handleMove('up')}>&uarr;</button>
      <button className='move-button' onClick={() => handleMove('down')}>&darr;</button>
      <button className='move-button' onClick={() => handleMove('left')}>&larr;</button>
      <button className='move-button' onClick={() => handleMove('right')}>&rarr;</button>
    </div>
  );
}

export default MovementButtons;