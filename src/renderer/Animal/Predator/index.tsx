import React from 'react';

import { Predator as PredatorInterface } from '~/src/models/Animal/types';

import AggroRadius from './AggroRadius';
import { PredatorRendererProps } from './types';
import WolfArctic from './WolfArctic';

const predatorFactory = (animal: PredatorInterface): React.ComponentType<PredatorRendererProps> => {
  const predators: Record<
    PredatorInterface['type'],
    Record<PredatorInterface['variant'], React.ComponentType<PredatorRendererProps>>
  > = {
    wolf: {
      arctic: WolfArctic,
    },
  };
  const variants = predators[animal.type];
  if (variants) {
    const predatorRenderer = variants[animal.variant];
    if (predatorRenderer) {
      return predatorRenderer;
    }
  }
  const NullRenderer: React.FC<PredatorRendererProps> = () => null;
  return NullRenderer;
};

const Predator: React.FC<PredatorRendererProps> = ({ animal, position, style }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const toggleSelected = React.useCallback(
    () => setIsSelected(!isSelected),
    [isSelected, setIsSelected],
  );
  const PredatorRenderer = React.useMemo(() => predatorFactory(animal), [animal]);

  return (
    <React.Fragment>
      <button
        className="animal"
        data-testid="animal__predator"
        onClick={toggleSelected}
        style={style}
        type="button"
      >
        <PredatorRenderer animal={animal} position={position} style={style}>
          {animal.isAggroed && <span data-testid="animal__predator__aggro-indicator">!</span>}
        </PredatorRenderer>
      </button>
      {isSelected && <AggroRadius position={position} />}
    </React.Fragment>
  );
};

export default Predator;
