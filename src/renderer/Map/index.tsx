/* eslint-disable react/no-array-index-key */
import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import Player from '../Player';
import configuration from '../../configuration';
import { selectMapTiles } from '../../store/reducers/map';

import './map.css';

const Map: React.FC = () => {
  const tiles = useSelector(selectMapTiles);

  return (
    <div id="map">
      <Player />
      {tiles.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <div
              className={classnames('tile', `${tile.type}-${tile.variant}`)}
              key={`${rowIndex}-${tileIndex}`}
              style={{
                left: tileIndex * configuration.tileSize(),
                top: rowIndex * configuration.tileSize(),
              }}
            >
              {rowIndex} {tileIndex}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
