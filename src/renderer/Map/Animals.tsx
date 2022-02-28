/* eslint-disable react/no-array-index-key */
import React from 'react';

import configuration from '~/src/configuration';
import { Map } from '~/src/models/Map/types';

import Animal from '../Animal';

interface AnimalsInterface {
  animals: Map['animals'];
}

const Animals: React.FC<AnimalsInterface> = ({ animals }) => (
  <React.Fragment>
    {animals.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((animal, animalIndex) => {
          if (animal) {
            return (
              <Animal
                animal={animal}
                key={`${rowIndex}-${animalIndex}`}
                position={{ left: animalIndex, top: rowIndex }}
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
  </React.Fragment>
);

export default Animals;
