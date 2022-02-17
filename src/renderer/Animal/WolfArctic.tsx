import React from 'react';

import { Predator } from '~/src/models/Animal/types';

import { AnimalRendererProps } from './types';

const WolfArctic: React.FC<AnimalRendererProps> = ({ animal, style }) => {
  const predator = animal as Predator;
  return (
    <div className="animal wolf-arctic" data-testid="animal__wolf-arctic" style={style}>
      {predator.isAggroed && <span data-testid="animal__wolf-arctic__aggro-indicator">!</span>}
    </div>
  );
};

export default WolfArctic;
