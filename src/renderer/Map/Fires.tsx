import React from 'react';

import { Fire } from '~/src/models/Fire/types';
import FireRenderer from '~/src/renderer/Fire';

interface FiresProps {
  fires: Fire[];
}

const Fires: React.FC<FiresProps> = ({ fires }) => (
  <React.Fragment>
    {fires.map((fire) => (
      <FireRenderer fire={fire} key={`${fire.position.top}:${fire.position.left}`} />
    ))}
  </React.Fragment>
);

export default Fires;
