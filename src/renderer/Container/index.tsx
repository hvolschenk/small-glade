import React from 'react';

import configuration from '~/src/configuration';
import { Container as ContainerInterface } from '~/src/models/Container/types';

import ContainerOverlay from './ContainerOverlay';

import './container.css';

interface ContainerProps {
  container: ContainerInterface;
}

const Container: React.FC<ContainerProps> = ({ container }) => (
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

export default Container;
