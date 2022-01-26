/* eslint-disable react/no-array-index-key */
import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectMapTiles } from '../../store/reducers/map';

import './map.css';

const Map: React.FC = () => {
  const tiles = useSelector(selectMapTiles);

  return (
    <div id="map">
      {tiles.map((row, rowIndex) => (
        <React.Fragment>
          {row.map((tile, tileIndex) => (
            <div
              className={classnames('tile', `${tile.type}-${tile.variant}`)}
              key={`${rowIndex}-${tileIndex}`}
              style={{ left: tileIndex * 80, top: rowIndex * 80 }}
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
