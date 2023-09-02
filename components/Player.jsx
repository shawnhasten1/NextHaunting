import React from 'react';

function Player({ row, col }) {
  // Define the player token image URL or path
  const playerTokenImageSrc = '/images/players/player_1.png'; // Replace with your image source

  return (
    <div className="player" style={{ position: 'absolute', top: row, left: col }}>
      <img src={playerTokenImageSrc} style={{width:"70px", marginLeft:"70px", marginTop:"70px"}} alt="Player Token" />
    </div>
  );
}

export default Player;
