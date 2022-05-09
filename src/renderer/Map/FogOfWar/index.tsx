/* eslint-disable react/no-array-index-key */
import classnames from 'classnames';
import React from 'react';

import configuration from '~/src/configuration';
import { FogOfWarStatus } from '~/src/models/Map/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapFogOfWar } from '~/src/store/reducers/map/selectors';

import './fog-of-war.css';

const FogOfWar: React.FC = () => {
  const fogOfWar = useSelector(selectMapFogOfWar);

  return (
    <React.Fragment>
      {fogOfWar.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <div
              className={classnames({
                'fog-of-war': true,
                'fog-of-war--explored': tile === FogOfWarStatus.EXPLORED,
                'fog-of-war--unexplored': tile === FogOfWarStatus.UNEXPLORED,
                'fog-of-war--visible': tile === FogOfWarStatus.VISIBLE,
              })}
              key={`fog-of-war-${rowIndex}-${tileIndex}`}
              style={{
                left: tileIndex * configuration.tileSize(),
                top: rowIndex * configuration.tileSize(),
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default FogOfWar;
