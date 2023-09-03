'use client';

import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Player from './Player';
import MovementButtons from './MovementButtons';
import {basementTiles, groundTiles, upperTiles} from '@/public/tiles';

function GameBoard() {  // Define constants for floors
  const FLOORS = {
    BASEMENT: 'Basement',
    GROUND: 'Ground',
    UPPER: 'Upper',
  };

  const [currentFloor, setCurrentFloor] = useState(FLOORS.GROUND); // Initial floor
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: -1600, y: -1900 });
  const [transform, setTransform] = useState({ x: -1600, y: -1900 });
  const [playerPosition, setPlayerPosition] = useState({ row: 12, col: 11, floor: FLOORS.GROUND }); // Initial position
  const [tiles, setTiles] = useState({
    [FLOORS.BASEMENT]: generateInitialTiles(),
    [FLOORS.GROUND]: generateInitialTiles(),
    [FLOORS.UPPER]: generateInitialTiles(),
  });
  // Define the list of available tiles as a state variable
  const [availableTiles, setAvailableTiles] = useState({
    [FLOORS.BASEMENT]: basementTiles, // Replace with actual tiles
    [FLOORS.GROUND]: groundTiles, // Replace with actual tiles
    [FLOORS.UPPER]: upperTiles, // Replace with actual tiles
  });

  // Function to generate the initial tiles for a specific floor
  function generateInitialTiles() {
    // Initialize the game board with blank tiles
    const numRows = 24;
    const numCols = 24;

    return Array.from({ length: numRows }, (_, rowIndex) => {
      return Array.from({ length: numCols }, (_, colIndex) => {
        if (colIndex === 11 && rowIndex >= 10 && rowIndex <= 12) {
          // Create special tiles for transitioning between floors
          if (currentFloor === FLOORS.GROUND) {
            if (rowIndex === 10) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: '/images/tiles/foyer-top.jpg',
                name: 'Stairs to Upper Floor',
                directions: ['down'],
                special: {
                  transitionFloor: FLOORS.UPPER,
                },
              };
            }
            if (rowIndex === 11) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: '/images/tiles/foyer-mid.jpg',
                name: 'Stairs to Upper Floor',
                directions: [
                  'up',
                  'left',
                  'right',
                  'down',
                ],
                special: {
                },
              };
            }
            if (rowIndex === 12) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: '/images/tiles/foyer-bottom.jpg',
                name: 'Stairs to Upper Floor',
                directions: [
                  'up',
                  'left',
                  'right',
                  'down',
                ],
                special: {
                },
              };
            }
          } else if (currentFloor === FLOORS.UPPER) {
            if (rowIndex === 12) {
              return {
                floor: FLOORS.UPPER,
                imageSrc: '/images/tiles/foyer-bottom.jpg',
                name: 'Stairs to Ground Floor',
                directions: ['down'],
                special: {
                  transitionFloor: FLOORS.GROUND,
                },
              };
            }
          }
        }

        // Use blank tiles for other positions
        return {
          floor: currentFloor,
          imageSrc: '/images/tiles/blank.jpg',
          name: 'Blank',
          directions: ['up', 'down', 'left', 'right'],
        };
      });
    });
  }

  const handleFloorChange = (event) => {
    const newFloor = event.target.value;
    if (newFloor !== currentFloor) {
      // Update the current floor and reset the player position
      setCurrentFloor(newFloor);
      setPlayerPosition({ row: 12, col: 11, floor: newFloor });
    }
  };

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
    console.log("Move")
    let canMove = true;
    // Calculate the new player position based on the direction
    let newRow = playerPosition.row;
    let newCol = playerPosition.col;

    console.log("Player Position: " + playerPosition.row + ", " + playerPosition.col + ", " + playerPosition.floor)
  
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
    if (newRow >= 0 && newRow < 24 && newCol >= 0 && newCol < 24) {
      const currentTile = tiles[currentFloor][playerPosition.row][playerPosition.col];
      const nextTile = tiles[currentFloor][newRow][newCol];
      console.log("Player moving: " + direction);
      console.log("Current tile: " + currentTile.directions);
      console.log("Next tile: " + nextTile.directions);
      // Check if the current tile allows movement in the chosen direction
      if (currentTile.directions.includes(direction)) {
        // Check if the next tile has the opposite direction
        const oppositeDirection = getOppositeDirection(direction);
        if (nextTile.directions.includes(oppositeDirection)) {
          // Check if the next tile is a blank tile
          if (nextTile.name === 'Blank') {
            // randomize the order of available tiles
            console.log(availableTiles)
            console.log(availableTiles[currentFloor])
            const shuffledTiles = shuffleArray(availableTiles[currentFloor]);
  
            // Find the first tile from the shuffled tiles that includes the opposite direction
            const drawnTile = shuffledTiles.find((tile) => tile.directions.includes(oppositeDirection));
            if(drawnTile === undefined){
              canMove = false;
            }
  
            if (drawnTile) {
              // Remove the drawn tile from all floors availableTiles
              const updatedAvailableTiles = availableTiles;
              updatedAvailableTiles[FLOORS.BASEMENT] = updatedAvailableTiles[FLOORS.BASEMENT].filter((tile) => tile.name !== drawnTile.name);
              updatedAvailableTiles[FLOORS.GROUND] = updatedAvailableTiles[FLOORS.GROUND].filter((tile) => tile.name !== drawnTile.name); 
              updatedAvailableTiles[FLOORS.UPPER] = updatedAvailableTiles[FLOORS.UPPER].filter((tile) => tile.name !== drawnTile.name);
              setAvailableTiles(updatedAvailableTiles);
  
              // Replace the blank tile with the drawn tile
              const updatedTiles = tiles;
              updatedTiles[currentFloor][newRow][newCol] = drawnTile;
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
    console.log(array)
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
      {tiles[currentFloor].map((row, rowIndex) => (
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
      <div className='floor-select'>
        <label>
          Select Floor:
          <select value={currentFloor} onChange={handleFloorChange}>
            <option value={FLOORS.BASEMENT}>Basement</option>
            <option value={FLOORS.GROUND}>Ground</option>
            <option value={FLOORS.UPPER}>Upper</option>
          </select>
        </label>
      </div>
      <MovementButtons onMove={handleMove} />
    </div>
  );
}

export default GameBoard;