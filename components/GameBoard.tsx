"use client";

import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import Player from "./Player";
import MovementButtons from "./MovementButtons";

import { templateAvailableTiles, FLOORS } from '@/public/tiles';

function GameBoard() {

  // Define the game board size
  const numRows = 24;
  const numCols = 24;
  const tileWidth = 200; // Width of each tile
  const tileHeight = 200; // Height of each tile

  // Create a state variable to manage the current floor
  const [currentFloor, setCurrentFloor] = useState(FLOORS.GROUND);

  const [tiles, setTiles] = useState({
    [FLOORS.BASEMENT]: generateInitialTiles(FLOORS.BASEMENT),
    [FLOORS.GROUND]: generateInitialTiles(FLOORS.GROUND),
    [FLOORS.UPPER]: generateInitialTiles(FLOORS.UPPER),
  });

  // Define the list of available tiles as a state variable
  const [availableTiles, setAvailableTiles] = useState(templateAvailableTiles);

  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: -1600, y: -1900 });
  const [transform, setTransform] = useState({ x: -1600, y: -1900, scale: 1 });

  // Create a state variable to manage the players
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Player 1',
      position: { row: 12, col: 11, floor: FLOORS.GROUND },
      stats: {
        speed: 5,
        might: 5,
        sanity: 5,
        knowledge: 5,
        // Add other stats like might, sanity, and knowledge here
      },
      lastTile: null,
      visitedTiles: [], // Initialize an empty array to track visited tiles
    },
    // Add other players here with their initial positions and stats
  ]);

  // Create a state variable to track the current player's index
  const [currentPlayer, setCurrentPlayer] = useState(0);

  // Create a state variable to track the current player's remaining speed
  const [currentPlayerSpeed, setCurrentPlayerSpeed] = useState(players[0].stats.speed);

  // Create a state that tracks which player you are
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // Function to generate the initial tiles for a specific floor
  function generateInitialTiles(floor) {
    return Array.from({ length: numRows }, (_, rowIndex) => {
      return Array.from({ length: numCols }, (_, colIndex) => {
        if (colIndex === 11 && rowIndex >= 10 && rowIndex <= 12) {
          // Create special tiles for transitioning between floors
          if (floor === FLOORS.GROUND) {
            if (rowIndex === 10) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: "/images/tiles/foyer-top.jpg",
                name: "Stairs to Upper Floor",
                directions: ["down"],
                special: {
                  transitionFloor: FLOORS.UPPER,
                  transitionCoords: { row: 12, col: 11 },
                },
              };
            }
            if (rowIndex === 11) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: "/images/tiles/foyer-mid.jpg",
                name: "Stairs to Upper Floor",
                directions: ["up", "left", "right", "down"],
                special: {},
              };
            }
            if (rowIndex === 12) {
              return {
                floor: FLOORS.GROUND,
                imageSrc: "/images/tiles/foyer-bottom.jpg",
                name: "Stairs to Upper Floor",
                directions: ["up", "left", "right", "down"],
                special: {},
              };
            }
          } 
          else if (floor === FLOORS.UPPER) {
            if (rowIndex === 12) {
              return {
                floor: FLOORS.UPPER,
                imageSrc: "/images/tiles/tile_02.gif",
                name: "Upper Landing",
                directions: ["up", "left", "right", "down"],
                special: {
                  transitionFloor: FLOORS.GROUND,
                  transitionCoords: { row: 10, col: 11 },
                },
              };
            }
          }
          else if (floor === FLOORS.BASEMENT) {
            if (rowIndex === 12) {
              return {
                floor: FLOORS.UPPER,
                imageSrc: "/images/tiles/tile_03.gif",
                name: "Basement Landing",
                directions: ["up", "left", "right", "down"],
                special: {
                },
              };
            }
          }
        }

        // Use blank tiles for other positions
        return {
          floor: currentFloor,
          imageSrc: "/images/tiles/blank.jpg",
          name: "Blank",
          directions: ["up", "down", "left", "right"],
        };
      });
    });
  }

  // Function to update the game board transform to center the player
  const centerPlayerOnScreen = () => {
    setTimeout(() => {
      const currentPlayerObj = players[currentPlayerIndex];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      // Calculate the player's position at the center of the current tile
      const playerCenterTop =  currentPlayerObj.position.row * tileHeight;
      const playerCenterLeft = currentPlayerObj.position.col * tileWidth;
  
      // Calculate the new transform values to center the player
      const newTransformX = screenWidth / 2 - playerCenterLeft - tileWidth / 2;
      const newTransformY = screenHeight / 2 - playerCenterTop - tileHeight / 2;

      // Get the current zoom level
      const currentZoom = transform.scale;
  
      // Update the game board's transform
      setTransform({ x: newTransformX, y: newTransformY, scale: currentZoom });
    }, 200);
  };

  const handleFloorChange = (event) => {
    const newFloor = event.target.value;
    if (newFloor !== currentFloor) {
      // Update the current floor and reset the player position
      setCurrentFloor(newFloor);
    }
  };

  // Handle zoom in and zoom out
  const handleZoomIn = () => {
    // Increase the zoom level by a factor
    setTransform((prevTransform) => ({
      ...prevTransform,
      scale: prevTransform.scale * 1.2, // You can adjust the zoom factor as needed
    }));
  };

  const handleZoomOut = () => {
    // Decrease the zoom level by a factor
    setTransform((prevTransform) => ({
      ...prevTransform,
      scale: prevTransform.scale / 1.2, // You can adjust the zoom factor as needed
    }));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPosition.x;
    const deltaY = e.clientY - startPosition.y;

    // Get the current zoom value
    const currentZoom = transform.scale;

    setTransform((prevTransform) => ({
      x: prevTransform.x + deltaX,
      y: prevTransform.y + deltaY,
      scale: currentZoom,
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

    // Get the current zoom value
    const currentZoom = transform.scale;

    setTransform((prevTransform) => ({
      x: prevTransform.x + deltaX,
      y: prevTransform.y + deltaY,
      scale: currentZoom,
    }));

    setStartPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    // Handle touch end, if needed
  };

  // Function to handle player movement
  const handleMove = (direction) => {
    if (currentPlayer !== currentPlayerIndex) {
      // It's not this player's turn; they can't move
      return;
    }

    // Check if the player has enough speed to move
    if (currentPlayerSpeed <= 0) {
      // Player doesn't have enough speed left
      return;
    }
    const currentSpeedRemaining = currentPlayerSpeed - 1;

    // Find the current player based on their ID
    const currentPlayerObj = players[currentPlayerIndex];

    console.log("Move");
    let canMove = true;
    // Calculate the current player's new position
    let newRow = currentPlayerObj.position.row;
    let newCol = currentPlayerObj.position.col;

    // Get the current tile
    const lastTile = tiles[currentFloor][newRow][newCol];

    console.log(
      "Player Position: " +
        currentPlayerObj.position.row +
        ", " +
        currentPlayerObj.position.col +
        ", " +
        currentPlayerObj.position.floor
    );

    switch (direction) {
      case "up":
        newRow -= 1;
        break;
      case "down":
        newRow += 1;
        break;
      case "left":
        newCol -= 1;
        break;
      case "right":
        newCol += 1;
        break;
      default:
        break;
    }

    const nextTile = tiles[currentFloor][newRow][newCol];

    // Check if the new position is within the bounds of the game board
    if (newRow >= 0 && newRow < numRows  && newCol >= 0 && newCol < numCols ) {
      const currentTile =
        tiles[currentFloor][currentPlayerObj.position.row][currentPlayerObj.position.col];
      // Check if the current tile allows movement in the chosen direction
      if (currentTile.directions.includes(direction)) {
        // Check if the next tile has the opposite direction
        const oppositeDirection = getOppositeDirection(direction);
        //console.log("Player Move: "+direction);
        //console.log("Opposite Direction: "+oppositeDirection);
        //console.log("Next Tile: "+nextTile.directions);
        if (nextTile.directions.includes(oppositeDirection)) {
          // Check if the next tile is a blank tile
          if (nextTile.name === "Blank") {
            // randomize the order of available tiles
            const shuffledTiles = shuffleArray(availableTiles[currentFloor]);

            // Find the first tile from the shuffled tiles that includes the opposite direction
            const drawnTile = shuffledTiles.find((tile) =>
              tile.directions.includes(oppositeDirection)
            );
            if (drawnTile === undefined) {
              canMove = false;
            }

            if (drawnTile) {
              // Remove the drawn tile from all floors availableTiles
              const updatedAvailableTiles = availableTiles;
              updatedAvailableTiles[FLOORS.BASEMENT] = updatedAvailableTiles[
                FLOORS.BASEMENT
              ].filter((tile) => tile.name !== drawnTile.name);
              updatedAvailableTiles[FLOORS.GROUND] = updatedAvailableTiles[
                FLOORS.GROUND
              ].filter((tile) => tile.name !== drawnTile.name);
              updatedAvailableTiles[FLOORS.UPPER] = updatedAvailableTiles[
                FLOORS.UPPER
              ].filter((tile) => tile.name !== drawnTile.name);
              setAvailableTiles(updatedAvailableTiles);

              // Replace the blank tile with the drawn tile
              const updatedTiles = tiles;
              updatedTiles[currentFloor][newRow][newCol] = drawnTile;
              setTiles(updatedTiles);
          
              // After successful movement, decrement the currentPlayerSpeed
              setCurrentPlayerSpeed(0);

              // Update the player's position
              const allPlayers = players;
              allPlayers[currentPlayerIndex].position = {
                row: newRow,
                col: newCol,
                floor: currentFloor,
              };
              setPlayers(allPlayers);

              canMove = false
            }
            try {
              if (drawnTile.special.transitionFloor !== undefined) {
                canMove = handleSpecialMove(drawnTile);
              }
            } catch (err) {
              //console.log("No Special: " + drawnTile);
            }
          }
          try {
            if (nextTile.special.transitionFloor !== undefined) {
              canMove = handleSpecialMove(nextTile);
            }
          } catch (err) {
            //console.log("No Special: " + nextTile);
          }
        }
        else{
          canMove = false;
        }

        if (canMove) {
          // Store the last tile
          storeLastTile(lastTile);

          // If current tile special is not undefined, handle the special
          if (lastTile.special.status === "exit") {
            console.log("Exited a Special Tile");
            handleSpecialMove(lastTile);
          }

          // Update the player's position
          const allPlayers = players;
          allPlayers[currentPlayerIndex].position = {
            row: newRow,
            col: newCol,
            floor: currentFloor,
          };
          setPlayers(allPlayers);
          
          // After successful movement, decrement the currentPlayerSpeed
          setCurrentPlayerSpeed(currentSpeedRemaining);

          // Update the player's position in the players array
          setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
              player.id === currentPlayerObj.id ? currentPlayerObj : player
            )
          );
        }
        console.log("Current Speed Remaining: " + currentSpeedRemaining)

        // Check if the player has used up their available speed for this turn
        if (currentSpeedRemaining <= 0) {
          // If the tile has a special, handle it
          console.log(nextTile);
          if (nextTile.special.status !== undefined) {
            if (nextTile.special.status === "end") {
              console.log("Ended Turn on Special Tile");
              handleSpecialMove(nextTile);
            }
            else{
              nextTurn(); // End the player's turn
            }
          }
          else{
            nextTurn(); // End the player's turn
          }
        }
      }
    }
  };

  // Function that checks to see if there is a special move on the tile
  const handleSpecialMove = (tile) => {
    console.log("Special move");
    console.log(tile.special);
    // check if it's a transition tile
    if (tile.special.transitionFloor !== undefined) {
      console.log("Transition tile");

      // set floor to the transition floor
      setCurrentFloor(tile.special.transitionFloor);

      // set player coordinates to the transition tile corrdinates
      const allPlayers = players;
      allPlayers[currentPlayerIndex].position = {
        row: tile.special.transitionCoords.row,
        col: tile.special.transitionCoords.col,
        floor: tile.special.transitionFloor,
      };
      setPlayers(allPlayers);

      // After successful movement, decrement the currentPlayerSpeed
      setCurrentPlayerSpeed((prevSpeed) => prevSpeed - 1);

      // Center the player on the screen
      centerPlayerOnScreen();
      return false;
    }
    else if (tile.special.status !== undefined) {
      console.log("Status tile");

      // Get current player
      const currentPlayerObj = players[currentPlayerIndex];

      // Check if the player has already visited this tile
      if (!currentPlayerObj.visitedTiles.includes(tile.name)) {
        // Add the tile to the visitedTiles array
        currentPlayerObj.visitedTiles.push(tile.name);

        // Modify the player's stat based on the effect
        modifyPlayerStat(tile.special.effect, tile.special.mod);
  
        // Update the player's position in the players array
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) =>
            player.id === currentPlayerObj.id ? currentPlayerObj : player
          )
        );
      }
    }
    return true;
  };

  // Function that modifies a player's stat
  const modifyPlayerStat = (stat, mod) => {
    // Find the current player based on their index
    const currentPlayerObj = players[currentPlayerIndex];
  
    // Update the player's stat
    currentPlayerObj.stats[stat] += mod;
  
    // Ensure the stat doesn't go below zero (optional)
    if (currentPlayerObj.stats[stat] < 0) {
      currentPlayerObj.stats[stat] = 0;
    }
  
    // Update the player's position in the players array
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === currentPlayerObj.id ? currentPlayerObj : player
      )
    );
  };

  // Function that stores the last tile the player was on
  const storeLastTile = (tile) => {
    // Find the current player based on their index
    const currentPlayerObj = players[currentPlayerIndex];

    // Update the player's last tile
    currentPlayerObj.lastTile = tile;
    
    // Update the player's position in the players array
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === currentPlayerObj.id ? currentPlayerObj : player
      )
    );
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Helper function to get the opposite direction
  const getOppositeDirection = (direction) => {
    switch (direction) {
      case "up":
        return "down";
      case "down":
        return "up";
      case "left":
        return "right";
      case "right":
        return "left";
      default:
        return "";
    }
  };

  // Function to switch to the next player's turn
  const nextTurn = () => {
    // Increment the currentPlayer index
    setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % players.length);

    // Reset the current player's speed to their initial speed
    setCurrentPlayerSpeed(players[currentPlayer].stats.speed);
  };

  // Reset the turn to be the first player's turn and set the current player's speed to their initial speed
  const resetTurn = () => {
    setCurrentPlayer(0);
    setCurrentPlayerSpeed(players[0].stats.speed);
  };

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
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Hide overflow to prevent scrolling
        position: "relative", // Needed for child positioning
      }}
    >
      <div
        className="game-board"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`, // Translate the game board based on the transform state and the current scale
          position: "absolute", // Position the game board within the overlay
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
        {/* Render players */}
        {players.map((player) => (
          <Player
            key={player.id}
            row={player.position.row * tileHeight}
            col={player.position.col * tileWidth}
            currentFloor={currentFloor}
            playerFloor={player.position.floor}
          />
        ))}
      </div>
      <div className="floor-select">
        <label>
          Select Floor:
          <select value={currentFloor} onChange={handleFloorChange}>
            <option value={FLOORS.BASEMENT}>Basement</option>
            <option value={FLOORS.GROUND}>Ground</option>
            <option value={FLOORS.UPPER}>Upper</option>
          </select>
        </label>
      </div>
      <MovementButtons
        onMove={handleMove}
        currentPlayerName={players[currentPlayerIndex].name}
        currentPlayerStats={players[currentPlayerIndex].stats}
        currentPlayerSpeed={currentPlayerSpeed}
        onResetTurn={resetTurn}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
    </div>
  );
}

export default GameBoard;
