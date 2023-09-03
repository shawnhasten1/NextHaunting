"use client";

import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import Player from "./Player";
import MovementButtons from "./MovementButtons";

// Define constants for floors
const FLOORS = {
  BASEMENT: 'Basement',
  GROUND: 'Ground',
  UPPER: 'Upper',
};

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
  const [availableTiles, setAvailableTiles] = useState({
    [FLOORS.BASEMENT]: [
      {
        directions: ["right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_21.gif",
        name: "Gymnasium",
        special: {},
      },
      {
        directions: ["left", "up", "down"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_58.gif",
        name: "Furnace Room",
        special: {
          status: "end",
          effect: "health",
          mod: -1,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_06.gif",
        name: "Dusty Hallway",
        special: {},
      },
      {
        directions: ["up", "right"],
        floor: ["ground", "basement"],
        imageSrc: "/images/tiles/tile_50.gif",
        name: "Kitchen",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_25.gif",
        name: "Storeroom",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_59.gif",
        name: "Larder",
        special: {
          status: "end",
          effect: "might",
          mod: 1,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_08.gif",
        name: "Junk Room",
        special: {
          status: "exit",
          effect: "speed",
          mod: -1,
          challenge: "might",
          challenge_mod: 3,
        },
      },
      {
        directions: ["right"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_60.gif",
        name: "Pentagram Room",
        special: {
          status: "exit",
          effect: "sanity",
          mod: -1,
          challenge: "knowledge",
          challenge_mod: 4,
        },
      },
      {
        directions: ["right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_22.gif",
        name: "Operating Laboratory",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_24.gif",
        name: "Servants Quarters",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_26.gif",
        name: "Junk Room",
        special: {
          status: "challenge",
          effect: "item",
          mod: 2,
          challenge: "knowledge",
          challenge_mod: 6,
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_09.gif",
        name: "Mystic Elevator",
        special: {
          status: "move",
          effect: "elevator",
        },
      },
      {
        directions: ["up", "down"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_61.gif",
        name: "Stairs From Basement",
        special: {
          transitionFloor: FLOORS.GROUND,
          transitionCoords: { row: 12, col: 11 },
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["ground", "basement"],
        imageSrc: "/images/tiles/tile_48.gif",
        name: "Abandoned Room",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_53.gif",
        name: "Catacombs",
        special: {
          status: "challenge",
          effect: "move",
          challenge: "sanity",
          challenge_mod: 6,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_05.gif",
        name: "Creaky Hallway",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_11.gif",
        name: "Statuary Corridor",
        special: {},
      },
      {
        directions: ["up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_07.gif",
        name: "Game Room",
        special: {},
      },
      {
        directions: ["left", "right"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_55.gif",
        name: "Chasm",
        special: {
          status: "challenge",
          effect: "move",
          challenge: "speed",
          challenge_mod: 3,
        },
      },
      {
        directions: ["up", "down"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_64.gif",
        name: "Wine Cellar",
        special: {},
      },
      {
        directions: ["left", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_10.gif",
        name: "Organ Room",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["basement"],
        imageSrc: "/images/tiles/tile_56.gif",
        name: "Crypt",
        special: {
          status: "end",
          effect: "mental",
          mod: -1,
        },
      },
      {
        directions: ["up", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_23.gif",
        name: "Research Laboratory",
        special: {},
      },
    ], // Replace with actual tiles
    [FLOORS.GROUND]: [
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_37.gif",
        name: "Collapsed Room",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_42.gif",
        name: "Coal Chute",
        special: {
          transitionFloor: FLOORS.BASEMENT,
          transitionCoords: { row: 12, col: 11 },
        },
      },
      {
        directions: ["right", "up"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_43.gif",
        name: "Dining Room",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_06.gif",
        name: "Dusty Hallway",
        special: {},
      },
      {
        directions: ["up", "right"],
        floor: ["ground", "basement"],
        imageSrc: "/images/tiles/tile_50.gif",
        name: "Kitchen",
        special: {},
      },
      {
        directions: ["left", "up", "down"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_46.gif",
        name: "Patio",
        special: {},
      },
      {
        directions: ["left", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_39.gif",
        name: "Library",
        special: {
          status: "end",
          effect: "knowledge",
          mod: 1,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_08.gif",
        name: "Junk Room",
        special: {
          status: "exit",
          effect: "speed",
          mod: -1,
          challenge: "might",
          challenge_mod: 3,
        },
      },
      {
        directions: ["up", "down"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_44.gif",
        name: "Gardens",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_41.gif",
        name: "Ballroom",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_36.gif",
        name: "Charred Room",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_35.gif",
        name: "Chapel",
        special: {
          status: "end",
          effect: "sanity",
          mod: 1,
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_09.gif",
        name: "Mystic Elevator",
        special: {
          status: "move",
          effect: "elevator",
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_38.gif",
        name: "Consevatory",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["ground", "basement"],
        imageSrc: "/images/tiles/tile_48.gif",
        name: "Abandoned Room",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_05.gif",
        name: "Creaky Hallway",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_11.gif",
        name: "Statuary Corridor",
        special: {},
      },
      {
        directions: ["up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_07.gif",
        name: "Game Room",
        special: {},
      },
      {
        directions: ["left", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_10.gif",
        name: "Organ Room",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_34.gif",
        name: "Bloody Room",
        special: {},
      },
      {
        directions: ["down"],
        floor: ["ground"],
        imageSrc: "/images/tiles/tile_45.gif",
        name: "Graveyard",
        special: {
          status: "exit",
          effect: "knowledge",
          mod: -1,
          challenge: "sanity",
          challenge_mod: 4,
        },
      },
    ], // Replace with actual tiles
    [FLOORS.UPPER]: [
      {
        directions: ["right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_21.gif",
        name: "Gymnasium",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_37.gif",
        name: "Collapsed Room",
        special: {},
      },
      {
        directions: ["down"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_27.gif",
        name: "Attic",
        special: {
          status: "end",
          effect: "might",
          mod: -1,
          challenge: "speed",
          challenge_mod: 3,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_06.gif",
        name: "Dusty Hallway",
        special: {},
      },
      {
        directions: ["up", "right"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_63.gif",
        name: "Underground Lake",
        special: {},
      },
      {
        directions: ["left", "right"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_29.gif",
        name: "Bedroom",
        special: {},
      },
      {
        directions: ["left", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_39.gif",
        name: "Library",
        special: {
          status: "end",
          effect: "knowledge",
          mod: 1,
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_25.gif",
        name: "Storeroom",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_08.gif",
        name: "Junk Room",
        special: {
          status: "exit",
          effect: "speed",
          mod: -1,
          challenge: "might",
          challenge_mod: 3,
        },
      },
      {
        directions: ["up", "down"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_28.gif",
        name: "Balcony",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_36.gif",
        name: "Charred Room",
        special: {},
      },
      {
        directions: ["right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_22.gif",
        name: "Operating Laboratory",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_35.gif",
        name: "Chapel",
        special: {
          status: "end",
          effect: "sanity",
          mod: 1,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_24.gif",
        name: "Servants Quarters",
        special: {},
      },
      {
        directions: ["left", "up"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_31.gif",
        name: "Junk Room",
        special: {},
      },
      {
        directions: ["up"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_26.gif",
        name: "Junk Room",
        special: {
          status: "challenge",
          effect: "item",
          mod: 2,
          challenge: "knowledge",
          challenge_mod: 6,
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_09.gif",
        name: "Mystic Elevator",
        special: {
          status: "move",
          effect: "elevator",
        },
      },
      {
        directions: ["up", "down"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_30.gif",
        name: "Gallery",
        special: {
          status: "move_optional",
          tile: "tile_41.jpg",
          effect: "physical",
          mod: -1,
        },
      },
      {
        directions: ["up"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_38.gif",
        name: "Consevatory",
        special: {},
      },
      {
        directions: ["left", "right"],
        floor: ["upper"],
        imageSrc: "/images/tiles/tile_32.gif",
        name: "Tower",
        special: {
          status: "challenge",
          effect: "move",
          challenge: "might",
          challenge_mod: 3,
        },
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_05.gif",
        name: "Creaky Hallway",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_11.gif",
        name: "Statuary Corridor",
        special: {},
      },
      {
        directions: ["up", "right", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_07.gif",
        name: "Game Room",
        special: {},
      },
      {
        directions: ["left", "down"],
        floor: ["upper", "ground", "basement"],
        imageSrc: "/images/tiles/tile_10.gif",
        name: "Organ Room",
        special: {},
      },
      {
        directions: ["left", "up", "right", "down"],
        floor: ["upper", "ground"],
        imageSrc: "/images/tiles/tile_34.gif",
        name: "Bloody Room",
        special: {},
      },
      {
        directions: ["up", "down"],
        floor: ["upper", "basement"],
        imageSrc: "/images/tiles/tile_23.gif",
        name: "Research Laboratory",
        special: {},
      },
    ], // Replace with actual tiles
  });

  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: -1600, y: -1900 });
  const [transform, setTransform] = useState({ x: -1600, y: -1900 });

  // Create a state variable to manage the players
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Player 1',
      position: { row: 12, col: 11, floor: FLOORS.GROUND },
      stats: {
        speed: 5,
        // Add other stats like might, sanity, and knowledge here
      },
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
  
      // Update the game board's transform
      setTransform({ x: newTransformX, y: newTransformY });
    }, 200);
  };

  const handleFloorChange = (event) => {
    const newFloor = event.target.value;
    if (newFloor !== currentFloor) {
      // Update the current floor and reset the player position
      setCurrentFloor(newFloor);
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

    // Find the current player based on their ID
    const currentPlayerObj = players[currentPlayerIndex];

    console.log("Move");
    let canMove = true;
    // Calculate the current player's new position
    let newRow = currentPlayerObj.position.row;
    let newCol = currentPlayerObj.position.col;


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

    // Check if the new position is within the bounds of the game board
    if (newRow >= 0 && newRow < numRows  && newCol >= 0 && newCol < numCols ) {
      const currentTile =
        tiles[currentFloor][currentPlayerObj.position.row][currentPlayerObj.position.col];
      const nextTile = tiles[currentFloor][newRow][newCol];
      // Check if the current tile allows movement in the chosen direction
      if (currentTile.directions.includes(direction)) {
        // Check if the next tile has the opposite direction
        const oppositeDirection = getOppositeDirection(direction);
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
              setCurrentPlayerSpeed(1);
            }
            try {
              if (drawnTile.special !== undefined) {
                canMove = handleSpecialMove(drawnTile);
              }
            } catch (err) {
              console.log("No Special: " + drawnTile);
            }
          }
          try {
            if (nextTile.special !== undefined) {
              canMove = handleSpecialMove(nextTile);
            }
          } catch (err) {
            console.log("No Special: " + nextTile);
          }
        }

        if (canMove) {
          // Update the player's position
          const allPlayers = players;
          allPlayers[currentPlayerIndex].position = {
            row: newRow,
            col: newCol,
            floor: currentFloor,
          };
          setPlayers(allPlayers);
          
          // After successful movement, decrement the currentPlayerSpeed
          setCurrentPlayerSpeed((prevSpeed) => prevSpeed - 1);

          // Update the player's position in the players array
          setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
              player.id === currentPlayerObj.id ? currentPlayerObj : player
            )
          );
        }

        // Check if the player has used up their available speed for this turn
        if (currentPlayerSpeed === 0) {
          nextTurn(); // End the player's turn
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

      // Check if the player has used up their available speed for this turn
      if (currentPlayerSpeed === 0) {
        nextTurn(); // End the player's turn
      }

      // Center the player on the screen
      centerPlayerOnScreen();
      return false;
    }
    return true;
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    console.log(array);
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
          transform: `translate(${transform.x}px, ${transform.y}px)`,
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
        currentPlayerSpeed={currentPlayerSpeed}
        onResetTurn={resetTurn}
      />
    </div>
  );
}

export default GameBoard;
