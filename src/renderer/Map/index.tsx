/* eslint-disable react/no-array-index-key */
import React from 'react';

import configuration from '~/src/configuration';
import { useSelector } from '~/src/store/hooks';
import { selectMap } from '~/src/store/reducers/map/selectors';

import Animal from '../Animal';
import Interactable from '../Interactable';
import Player from '../Player';
import Tile from '../Tile';

import './map.css';

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
