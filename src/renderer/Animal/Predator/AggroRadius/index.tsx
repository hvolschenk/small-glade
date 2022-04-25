import React from 'react';

import configuration from '~/src/configuration';
import { Predator } from '~/src/models/Animal/Predator/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapAnimalPredatorAggroRange } from '~/src/store/reducers/map/selectors';

import './aggro-radius.css';

interface AggroRadiusProps {
  animal: Predator;
}

const AggroRadius: React.FC<AggroRadiusProps> = ({ animal }) => {
  const positions = useSelector((state) => selectMapAnimalPredatorAggroRange(state, animal));

  return (
    <React.Fragment>
      {positions.map((tile) => (
        <div
          className="predator__aggro-radius__position"
          data-testid="predator__aggro-radius__position"
          key={`predator__aggro-radius__position__${tile.top}-${tile.left}`}
          style={{
            left: tile.left * configuration.tileSize(),
            top: tile.top * configuration.tileSize(),
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default AggroRadius;
