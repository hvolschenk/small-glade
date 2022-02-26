/* eslint-disable react/no-array-index-key */
import React from 'react';

import configuration from '~/src/configuration';
import { Map } from '~/src/models/Map/types';

import Interactable from '../Interactable';

interface InteractablesProps {
  interactables: Map['interactables'];
}

const Interactables: React.FC<InteractablesProps> = ({ interactables }) => (
  <React.Fragment>
    {interactables.map((row, rowIndex) => (
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
  </React.Fragment>
);

export default Interactables;
