import React from 'react';

import configuration from '~/src/configuration';
import { Map } from '~/src/models/Map/types';

import Interactable from '../Interactable';

interface InteractablesProps {
  interactables: Map['interactables'];
}

const Interactables: React.FC<InteractablesProps> = ({ interactables }) => (
  <React.Fragment>
    {interactables.map((interactable) => (
      <Interactable
        interactable={interactable}
        key={interactable.id}
        style={{
          left: interactable.position.left * configuration.tileSize(),
          top: interactable.position.top * configuration.tileSize(),
        }}
      />
    ))}
  </React.Fragment>
);

export default Interactables;
