/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

import Player from '../Player';
import configuration from '../../configuration';
import { selectMap } from '../../store/reducers/map';

import './map.css';
import Tile from '../Tile';
import Interactable from '../Interactable';

const Map: React.FC = () => {
  const map = useSelector(selectMap);

  return (
    <div id="map">
      <Player />
      {map.tiles.map((row, rowIndex) => (
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
      {map.interactables.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((interactable, interactableIndex) => {
            if (interactable) {
              return (
                <Interactable
                  interactable={interactable}
                  key={`${rowIndex}-${interactableIndex}`}
                  style={{
                    left: interactableIndex * configuration.tileSize(),
                    top: rowIndex * configuration.tileSize(),
                  }}
                />
              );
            }
            return null;
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
