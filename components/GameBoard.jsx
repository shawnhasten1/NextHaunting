'use client';

import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Player from './Player';
import MovementButtons from './MovementButtons';

function GameBoard() {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: -1600, y: -1900 });
  const [transform, setTransform] = useState({ x: -1600, y: -1900 });
  const [playerPosition, setPlayerPosition] = useState({ row: 12, col: 11 }); // Initial position
  const [tiles, setTiles] = useState(generateInitialTiles());
  // Define the list of available tiles as a state variable
  const [availableTiles, setAvailableTiles] = useState([
    {
        directions: [
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_21.gif", 
        name: "Gymnasium", 
        "special":{}
    },
    {
        directions: [
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_37.gif", 
        name: "Collapsed Room", 
        "special":{}
    },
    {
        directions: [ 
            "up"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_42.gif", 
        name: "Coal Chute", 
        "special":{
            "status":"move",
            "tile":"tile_03.jpg"
        }
    },
    {
        directions: [ 
            "right", 
            "up"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_43.gif", 
        name: "Dining Room", 
        "special":{}
    },
    {
        directions: [ 
            "down"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_27.gif", 
        name: "Attic", 
        "special":{
            "status":"end",
            "effect":"might",
            "mod":-1,
            "challenge":"speed",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "down"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_58.gif", 
        name: "Furnace Room", 
        "special":{
            "status":"end",
            "effect":"health",
            "mod":-1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_06.gif", 
        name: "Dusty Hallway", 
        "special":{}
    },
    {
        directions: [ 
            "up", 
            "right",
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_63.gif", 
        name: "Underground Lake", 
        "special":{}
    },
    {
        directions: [ 
            "up", 
            "right",
        ], 
        "floor": [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_50.gif", 
        name: "Kitchen", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "down"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_46.gif", 
        name: "Patio", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_29.gif", 
        name: "Bedroom", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_39.gif", 
        name: "Library", 
        "special":{
            "status":"end",
            "effect":"knowledge",
            "mod":1
        }
    },
    {
        directions: [ 
            "up"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_25.gif", 
        name: "Storeroom", 
        "special":{}
    },
    {
        directions: [ 
            "up",
            "down"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_59.gif", 
        name: "Larder", 
        "special":{
            "status":"end",
            "effect":"might",
            "mod":1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_08.gif", 
        name: "Junk Room", 
        "special":{
            "status":"exit",
            "effect":"speed",
            "mod":-1,
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up",  
            "down"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_28.gif", 
        name: "Balcony", 
        "special":{}
    },
    {
        directions: [ 
            "right"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_60.gif", 
        name: "Pentagram Room", 
        "special":{
            "status":"exit",
            "effect":"sanity",
            "mod":-1,
            "challenge":"knowledge",
            "challenge_mod":4
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_44.gif", 
        name: "Gardens", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_41.gif", 
        name: "Ballroom", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_36.gif", 
        name: "Charred Room", 
        "special":{}
    },
    {
        directions: [ 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_22.gif", 
        name: "Operating Laboratory", 
        "special":{}
    },
    {
        directions: [
            "up"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_35.gif", 
        name: "Chapel", 
        "special":{
            "status":"end",
            "effect":"sanity",
            "mod":1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_24.gif", 
        name: "Servants Quarters", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "up"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_31.gif", 
        name: "Junk Room", 
        "special":{}
    },
    {
        directions: [
            "up"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_26.gif", 
        name: "Junk Room", 
        "special":{
            "status":"challenge",
            "effect":"item",
            "mod":2,
            "challenge":"knowledge",
            "challenge_mod":6
        }
    },
    {
        directions: [ 
            "up"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_09.gif", 
        name: "Mystic Elevator", 
        "special":{
            "status":"move",
            "effect":"elevator"
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_30.gif", 
        name: "Gallery", 
        "special":{
            "status":"move_optional",
            "tile":"tile_41.jpg",
            "effect":"physical",
            "mod":-1
        }
    },
    {
        directions: [ 
          "up", 
          "down"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_61.gif", 
        name: "Stairs From Basement", 
        "special":{
            "status":"move",
            "tile":"foyer.jpg"
        }
    },
    {
        directions: [ 
            "up"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_38.gif", 
        name: "Consevatory", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_48.gif", 
        name: "Abandoned Room", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        "floor": [
            "upper"
        ], 
        imageSrc: "/images/tiles/tile_32.gif", 
        name: "Tower", 
        "special":{
            "status":"challenge",
            "effect":"move",
            "challenge":"might",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_53.gif", 
        name: "Catacombs", 
        "special":{
            "status":"challenge",
            "effect":"move",
            "challenge":"sanity",
            "challenge_mod":6
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_05.gif", 
        name: "Creaky Hallway", 
        "special":{}
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_11.gif", 
        name: "Statuary Corridor", 
        "special":{}
    },
    {
        directions: [ 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_07.gif", 
        name: "Game Room", 
        "special":{}
    },
    {
        directions: [ 
            "left", 
            "right"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_55.gif", 
        name: "Chasm", 
        "special":{
            "status":"challenge",
            "effect":"move",
            "challenge":"speed",
            "challenge_mod":3
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_64.gif", 
        name: "Wine Cellar", 
        "special":{}
    },
    {
        directions: [ 
            "left",
            "down"
        ], 
        "floor": [
            "upper",
            "ground",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_10.gif", 
        name: "Organ Room", 
        "special":{}
    },
    {
        directions: [
            "up"
        ], 
        "floor": [
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_56.gif", 
        name: "Crypt", 
        "special":{
            "status":"end",
            "effect":"mental",
            "mod":-1
        }
    },
    {
        directions: [ 
            "left", 
            "up", 
            "right", 
            "down"
        ], 
        "floor": [
            "upper",
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_34.gif", 
        name: "Bloody Room", 
        "special":{}
    },
    {
        directions: [
            "down"
        ], 
        "floor": [
            "ground"
        ], 
        imageSrc: "/images/tiles/tile_45.gif", 
        name: "Graveyard", 
        "special":{
            "status":"exit",
            "effect":"knowledge",
            "mod":-1,
            "challenge":"sanity",
            "challenge_mod":4
        }
    },
    {
        directions: [ 
            "up", 
            "down"
        ], 
        "floor": [
            "upper",
            "basement"
        ], 
        imageSrc: "/images/tiles/tile_36.gif", 
        name: "Research Laboratory", 
        "special":{}
    }
  ]);

  // Function to generate the initial tiles
  function generateInitialTiles() {
    // Initialize the game board with blank tiles
    const numRows = 24;
    const numCols = 24;

    return Array.from({ length: numRows }, (_, rowIndex) => {
      return Array.from({ length: numCols }, (_, colIndex) => {
        if(colIndex === 11 && rowIndex >= 10 && rowIndex <= 12){
          if(rowIndex === 10){
            return {
              floor: 'Ground Floor',
              imageSrc: '/images/tiles/foyer-top.jpg',
              name: 'Dungeon',
              directions: ['down'],
            };
          }
          else if(rowIndex === 11){
            return {
              floor: 'Ground Floor',
              imageSrc: '/images/tiles/foyer-mid.jpg',
              name: 'Dungeon',
              directions: ['up', 'down', 'left', 'right'],
            };
          }
          else if(rowIndex === 12){
            return {
              floor: 'Ground Floor',
              imageSrc: '/images/tiles/foyer-bottom.jpg',
              name: 'Living Room',
              directions: ['up', 'down', 'left', 'right'],
            };
          }
        } else {
          // Use blank tiles for other positions
          return {
            floor: 'Ground Floor',
            imageSrc: '/images/tiles/blank.jpg',
            name: 'Blank',
            directions: ['up', 'down', 'left', 'right'],
          };
        }
      });
    });
  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPosition.x;
    const deltaY = e.clientY - startPosition.y;

    setTransform((prevTransform) => ({
      x: prevTransform.x + deltaX,
      y: prevTransform.y + deltaY,
    }));

    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPosition.x;
    const deltaY = touch.clientY - startPosition.y;

    setTransform((prevTransform) => ({
      x: prevTransform.x + deltaX,
      y: prevTransform.y + deltaY,
    }));

    setStartPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    // Handle touch end, if needed
  };

  const handleMove = (direction) => {
    let canMove = true;
    // Calculate the new player position based on the direction
    let newRow = playerPosition.row;
    let newCol = playerPosition.col;
  
    switch (direction) {
      case 'up':
        newRow -= 1;
        break;
      case 'down':
        newRow += 1;
        break;
      case 'left':
        newCol -= 1;
        break;
      case 'right':
        newCol += 1;
        break;
      default:
        break;
    }
  
    // Check if the new position is within the bounds of the game board
    if (newRow >= 0 && newRow < tiles.length && newCol >= 0 && newCol < tiles[0].length) {
      const currentTile = tiles[playerPosition.row][playerPosition.col];
      const nextTile = tiles[newRow][newCol];
  
      // Check if the current tile allows movement in the chosen direction
      if (currentTile.directions.includes(direction)) {
        // Check if the next tile has the opposite direction
        const oppositeDirection = getOppositeDirection(direction);
        if (nextTile.directions.includes(oppositeDirection)) {
          // Check if the next tile is a blank tile
          if (nextTile.name === 'Blank') {
            // randomize the order of available tiles
            const shuffledTiles = shuffleArray(availableTiles);
  
            // Find the first tile from the shuffled tiles that includes the opposite direction
            const drawnTile = shuffledTiles.find((tile) => tile.directions.includes(oppositeDirection));
            if(drawnTile === undefined){
              canMove = false;
            }
  
            if (drawnTile) {
              // Remove the drawn tile from availableTiles
              const updatedAvailableTiles = availableTiles.filter((tile) => tile !== drawnTile);
              setAvailableTiles(updatedAvailableTiles);
  
              // Replace the blank tile with the drawn tile
              const updatedTiles = [...tiles];
              updatedTiles[newRow][newCol] = drawnTile;
              setTiles(updatedTiles);
            }
          }
          if(canMove){
            // Update the player's position
            setPlayerPosition({ row: newRow, col: newCol });
          }
        }
      }
    }
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  // Helper function to get the opposite direction
  const getOppositeDirection = (direction) => {
    switch (direction) {
      case 'up':
        return 'down';
      case 'down':
        return 'up';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      default:
        return '';
    }
  };

  const tileWidth = 200; // Width of each tile
  const tileHeight = 200; // Height of each tile

  // Calculate the player's position at the center of the current tile
  const playerTop = playerPosition.row * tileHeight;
  const playerLeft = playerPosition.col * tileWidth;

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // Hide overflow to prevent scrolling
        position: 'relative', // Needed for child positioning
      }}
    >
      <div
        className="game-board"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
          position: 'absolute', // Position the game board within the overlay
        }}
      >
        {tiles.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((tile, colIndex) => (
              <Tile
                key={colIndex}
                floor={tile.floor}
                imageSrc={tile.imageSrc}
                name={tile.name}
                directions={tile.directions}
              />
            ))}
          </div>
        ))}
        <Player row={playerTop} col={playerLeft} />
      </div>
      <MovementButtons onMove={handleMove} />
    </div>
  );
}

export default GameBoard;