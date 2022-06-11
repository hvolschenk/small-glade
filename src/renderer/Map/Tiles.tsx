/* eslint-disable react/no-array-index-key */
import React from 'react';

import configuration from '~/src/configuration';
import { Map } from '~/src/models/Map/types';

import Tile from '../Tile';

interface TilesProps {
  tiles: Map['tiles'];
}

const Tiles: React.FC<TilesProps> = ({ tiles }) => (
  <React.Fragment>
    {tiles.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((tile, tileIndex) => (
          <Tile
            key={`${rowIndex}-${tileIndex}`}
            position={{ left: tileIndex, top: rowIndex }}
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
  </React.Fragment>
);

export default Tiles;
