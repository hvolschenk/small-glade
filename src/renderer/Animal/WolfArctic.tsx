import React from 'react';

import { Predator } from '~/src/models/Animal/types';

import { AnimalRendererProps } from './types';

const WolfArctic: React.FC<AnimalRendererProps> = ({ animal, style }) => {
  const predator = animal as Predator;
  return (
    <div className="animal wolf-arctic" style={style}>
      W{predator.isAggroed && '!'}
    </div>
  );
};

export default WolfArctic;
