import React from 'react';

import configuration from '~/src/configuration';
import { Map } from '~/src/models/Map/types';

import Animal from '../Animal';

interface AnimalsInterface {
  animals: Map['animals'];
}

const Animals: React.FC<AnimalsInterface> = ({ animals }) => (
  <React.Fragment>
    {animals.map((animal) => (
      <Animal
        animal={animal}
        key={animal.id}
        style={{
          left: animal.position.left * configuration.tileSize(),
          top: animal.position.top * configuration.tileSize(),
        }}
      />
    ))}
  </React.Fragment>
);

export default Animals;
