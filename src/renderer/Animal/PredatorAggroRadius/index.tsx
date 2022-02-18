import React from 'react';

import configuration from '~/src/configuration';
import { Position } from '~/src/models/Position';
import { useSelector } from '~/src/store/hooks';
import { selectMapAnimalPredatorAggroRange } from '~/src/store/reducers/map/selectors';

import './predator-aggro-radius.css';

interface PredatorAggroRadiusProps {
  position: Position;
}

const PredatorAggroRadius: React.FC<PredatorAggroRadiusProps> = ({ position }) => {
  const positions = useSelector((state) => selectMapAnimalPredatorAggroRange(state, position));

  return (
    <React.Fragment>
      {positions.map((tile) => (
        <div
          className="predator-aggro-radius__position"
          data-testid="predator-aggro-radius__position"
          key={`predator-aggro-radius__position__${tile.top}-${tile.left}`}
          style={{
            left: tile.left * configuration.tileSize(),
            top: tile.top * configuration.tileSize(),
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default PredatorAggroRadius;
