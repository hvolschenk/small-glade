import React from 'react';

import configuration from '~/src/configuration';
import { Position } from '~/src/models/Position';
import { useSelector } from '~/src/store/hooks';
import { selectMapAnimalPreyFleeRadius } from '~/src/store/reducers/map/selectors';

import './flee-radius.css';

interface FleeRadiusProps {
  position: Position;
}

const FleeRadius: React.FC<FleeRadiusProps> = ({ position }) => {
  const positions = useSelector((state) => selectMapAnimalPreyFleeRadius(state, position));

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
