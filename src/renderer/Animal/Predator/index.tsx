import React from 'react';

import { Predator as PredatorInterface, PredatorStatus } from '~/src/models/Animal/types';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';
import positionsEqual from '~/src/utilities/positionsEqual';

import AggroRadius from './AggroRadius';
import AttackDefense from './AttackDefense';
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
  const playerPosition = useSelector(selectPlayerPosition);
  const toggleSelected = React.useCallback(
    () => setIsSelected(!isSelected),
    [isSelected, setIsSelected],
  );
  const isAttacking = React.useMemo(
    () => positionsEqual(playerPosition, position) && animal.status === PredatorStatus.AGGROED,
    [animal, playerPosition, position],
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
          {animal.status === PredatorStatus.AGGROED && (
            <span data-testid="animal__predator__aggro-indicator">!</span>
          )}
          {animal.status === PredatorStatus.FLEEING && (
            <span data-testid="animal__predator__fleeing-indicator">#</span>
          )}
        </PredatorRenderer>
      </button>
      {isSelected && <AggroRadius position={position} />}
      {isAttacking && <AttackDefense animal={animal} position={position} />}
    </React.Fragment>
  );
};

export default Predator;
