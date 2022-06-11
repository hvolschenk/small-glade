import React from 'react';

import configuration from '~/src/configuration';
import { Container as ContainerInterface } from '~/src/models/Container/types';
import { FogOfWarStatus } from '~/src/models/Map/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapFogOfWarPosition } from '~/src/store/reducers/map/selectors';

import ContainerOverlay from './ContainerOverlay';

import './container.css';

interface ContainerProps {
  container: ContainerInterface;
}

const Container: React.FC<ContainerProps> = ({ container }) => {
  const isPositionUnexplored = useSelector((state) =>
    selectMapFogOfWarPosition(state, container.position, FogOfWarStatus.UNEXPLORED),
  );

  if (isPositionUnexplored) {
    return null;
  }

  return (
    <React.Fragment>
      <div
        className={`container container--${container.variant}`}
        style={{
          left: container.position.left * configuration.tileSize(),
          top: container.position.top * configuration.tileSize(),
        }}
      />
      <ContainerOverlay container={container} />
    </React.Fragment>
  );
};

export default Container;
