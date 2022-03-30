import React from 'react';

import configuration from '~/src/configuration';
import { Fire as FireInterface } from '~/src/models/Fire/types';

import HeatRadius from './HeatRadius';

import './fire.css';

interface FireProps {
  fire: FireInterface;
}

const Fire: React.FC<FireProps> = ({ fire }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const toggleSelected = React.useCallback(
    () => setIsSelected(!isSelected),
    [isSelected, setIsSelected],
  );

  if (fire.duration === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <button
        className="fire__action"
        data-testid="fire__action"
        onClick={toggleSelected}
        style={{
          left: fire.position.left * configuration.tileSize(),
          top: fire.position.top * configuration.tileSize(),
        }}
        type="button"
      >
        <div className="fire" data-testid="fire" />
      </button>
      {isSelected && <HeatRadius position={fire.position} />}
    </React.Fragment>
  );
};

export default Fire;
