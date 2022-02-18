import React from 'react';

import { Predator } from '~/src/models/Animal/types';

import PredatorAggroRadius from './PredatorAggroRadius';
import { AnimalRendererProps } from './types';

const WolfArctic: React.FC<AnimalRendererProps> = ({ animal, position, style }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const toggleSelected = React.useCallback(
    () => setIsSelected(!isSelected),
    [isSelected, setIsSelected],
  );
  const predator = animal as Predator;

  return (
    <React.Fragment>
      <button
        className="animal wolf-arctic"
        data-testid="animal__wolf-arctic"
        onClick={toggleSelected}
        style={style}
        type="button"
      >
        {predator.isAggroed && <span data-testid="animal__wolf-arctic__aggro-indicator">!</span>}
      </button>
      {isSelected && <PredatorAggroRadius position={position} />}
    </React.Fragment>
  );
};

export default WolfArctic;
