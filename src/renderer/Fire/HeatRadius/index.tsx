import React from 'react';

import configuration from '~/src/configuration';
import { Position } from '~/src/models/Position';
import radiusAroundPosition from '~/src/utilities/radiusAroundPosition';

import './heat-radius.css';

interface HeatRadiusProps {
  position: Position;
}

const HeatRadius: React.FC<HeatRadiusProps> = ({ position }) => {
  const positions = React.useMemo(() => radiusAroundPosition({ position, radius: 2 }), [position]);
  return (
    <React.Fragment>
      {positions.map((tile) => (
        <div
          className="fire__heat-radius__position"
          data-testid="fire__heat-radius__position"
          key={`fire__heat-radius__position__${tile.top}-${tile.left}`}
          style={{
            left: tile.left * configuration.tileSize(),
            top: tile.top * configuration.tileSize(),
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default HeatRadius;
