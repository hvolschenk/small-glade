import React from 'react';

import { Prey as PreyInterface, PreyStatus } from '~/src/models/Animal/Prey/types';

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

const Prey: React.FC<PreyRendererProps> = ({ animal, style }) => {
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
        <PreyRenderer animal={animal} style={style}>
          {animal.status === PreyStatus.FLEEING && (
            <span data-testid="animal__prey__fleeing-indicator">!</span>
          )}
        </PreyRenderer>
      </button>
      {isSelected && <FleeRadius animal={animal} />}
    </React.Fragment>
  );
};

export default Prey;
