import React from 'react';

import { Prey as PreyInterface } from '~/src/models/Animal/types';

import DeerElk from './DeerElk';
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
  const PreyRenderer = React.useMemo(() => preyFactory(animal), [animal]);
  return (
    <div className="animal" style={style}>
      <PreyRenderer animal={animal} position={position} style={style} />
    </div>
  );
};

export default Prey;
