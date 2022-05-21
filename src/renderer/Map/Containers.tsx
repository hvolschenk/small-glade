import React from 'react';

import { useSelector } from '~/src/store/hooks';
import { selectMapContainers } from '~/src/store/reducers/map/selectors';

import Container from '../Container';

const Containers: React.FC = () => {
  const containers = useSelector(selectMapContainers);

  return (
    <React.Fragment>
      {containers.map((container) => (
        <Container container={container} key={container.id} />
      ))}
    </React.Fragment>
  );
};

export default Containers;
