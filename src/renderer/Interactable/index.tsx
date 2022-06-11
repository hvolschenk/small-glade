import React from 'react';

import { Interactable as InteractableInterface } from '~/src/models/Interactable/types';
import { FogOfWarStatus } from '~/src/models/Map/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapFogOfWarPosition } from '~/src/store/reducers/map/selectors';

import BushBearberry from './BushBearberry';
import CarcassDeerElk from './CarcassDeerElk';
import FuelStick from './FuelStick';
import StarterMatches from './StarterMatches';
import TinderNewspaper from './TinderNewspaper';
import { InteractableRendererProps } from './types';

import './interactable.css';

const interactableFactory = (
  interactable: InteractableInterface,
): React.ComponentType<InteractableRendererProps> => {
  const interactables: Record<
    string,
    Record<string, React.ComponentType<InteractableRendererProps>>
  > = {
    bush: {
      'bear-berry': BushBearberry,
    },
    carcass: {
      'deer-elk': CarcassDeerElk,
    },
    fuel: {
      stick: FuelStick,
    },
    starter: {
      matches: StarterMatches,
    },
    tinder: {
      newspaper: TinderNewspaper,
    },
  };
  const variants = interactables[interactable.type];
  if (variants) {
    const interactableRenderer = variants[interactable.variant];
    if (interactableRenderer) {
      return interactableRenderer;
    }
  }
  const NullRenderer: React.FC<InteractableRendererProps> = () => null;
  return NullRenderer;
};

const Interactable: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const isPositionUnexplored = useSelector((state) =>
    selectMapFogOfWarPosition(state, interactable.position, FogOfWarStatus.UNEXPLORED),
  );

  if (isPositionUnexplored) {
    return null;
  }

  const InteractableRenderer = interactableFactory(interactable);
  return <InteractableRenderer interactable={interactable} style={style} />;
};

export default Interactable;
