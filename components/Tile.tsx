import React from 'react';

interface TileProps {
    floor: string;
    imageSrc: string;
    name: string;
    directions: string[];
}

const Tile: React.FC<TileProps> = ({ floor, imageSrc, name, directions }) => {
  return (
    <div className={`tile tile-${floor}`}>
      <img src={imageSrc} alt={floor} />
    </div>
  );
}

export default Tile;