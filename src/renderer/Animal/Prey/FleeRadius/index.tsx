import React from 'react';

import configuration from '~/src/configuration';
import { Prey } from '~/src/models/Animal/Prey/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapAnimalPreyFleeRadius } from '~/src/store/reducers/map/selectors';

import './flee-radius.css';

interface FleeRadiusProps {
  animal: Prey;
}

const FleeRadius: React.FC<FleeRadiusProps> = ({ animal }) => {
  const positions = useSelector((state) => selectMapAnimalPreyFleeRadius(state, animal));

  return (
    <React.Fragment>
      {positions.map((tile) => (
        <div
          className="prey__flee-radius__position"
          data-testid="prey__flee-radius__position"
          key={`prey__flee-radius__position__${tile.top}-${tile.left}`}
          style={{
            left: tile.left * configuration.tileSize(),
            top: tile.top * configuration.tileSize(),
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default FleeRadius;
