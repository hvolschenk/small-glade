/* eslint-disable react/no-array-index-key */
import React from 'react';

import Player from '../Player';
import configuration from '../../configuration';
import { selectMap } from '../../store/reducers/map';

import './map.css';
import Tile from '../Tile';
import Interactable from '../Interactable';
import { useSelector } from '../../store/hooks';
import Animal from '../Animal';

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
                  position={{ left: interactableIndex, top: rowIndex }}
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
      {map.animals.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((animal, animalIndex) => {
            if (animal) {
              return (
                <Animal
                  animal={animal}
                  key={`${rowIndex}-${animalIndex}`}
                  style={{
                    left: animalIndex * configuration.tileSize(),
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
