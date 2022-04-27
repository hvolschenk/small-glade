import React from 'react';

import { Interactable as InteractableInterface } from '~/src/models/Interactable/types';

import BushBearberry from './BushBearberry';
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
  const InteractableRenderer = interactableFactory(interactable);
  return <InteractableRenderer interactable={interactable} style={style} />;
};

export default Interactable;
