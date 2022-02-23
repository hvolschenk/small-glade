import React from 'react';

import { Prey as PreyInterface } from '~/src/models/Animal/types';

import DeerElk from './DeerElk';
import FleeRadius from './FleeRadius';
import { PreyRendererProps } from './types';

const preyFactory = (animal: PreyInterface): React.ComponentType<PreyRendererProps> => {
  const preyAnimals: Record<
    PreyInterface['type'],
    Record<PreyInterface['variant'], React.ComponentType<PreyRendererProps>>
  > = {
    deer: {
      elk: DeerElk,
    },
  };
  const variants = preyAnimals[animal.type];
  if (variants) {
    const preyRenderer = variants[animal.variant];
    if (preyRenderer) {
      return preyRenderer;
    }
  }
  const NullRenderer: React.FC<PreyRendererProps> = () => null;
  return NullRenderer;
};

const Prey: React.FC<PreyRendererProps> = ({ animal, position, style }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const toggleSelected = React.useCallback(
    () => setIsSelected(!isSelected),
    [isSelected, setIsSelected],
  );
  const PreyRenderer = React.useMemo(() => preyFactory(animal), [animal]);
  return (
    <React.Fragment>
      <button
        className="animal"
        data-testid="animal__prey"
        onClick={toggleSelected}
        style={style}
        type="button"
      >
        <PreyRenderer animal={animal} position={position} style={style}>
          {animal.isFleeing && <span data-testid="animal__prey__fleeing-indicator">!</span>}
        </PreyRenderer>
      </button>
      {isSelected && <FleeRadius position={position} />}
    </React.Fragment>
  );
};

export default Prey;
