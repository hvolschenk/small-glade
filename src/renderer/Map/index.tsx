/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

import Player from '../Player';
import configuration from '../../configuration';
import { selectMapTiles } from '../../store/reducers/map';

import './map.css';
import Tile from '../Tile';

const Map: React.FC = () => {
  const tiles = useSelector(selectMapTiles);

  return (
    <div id="map">
      <Player />
      {tiles.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <Tile
              key={`${rowIndex}-${tileIndex}`}
              style={{
                left: tileIndex * configuration.tileSize(),
                top: rowIndex * configuration.tileSize(),
              }}
              tile={tile}
            >
              {rowIndex} {tileIndex}
            </Tile>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
