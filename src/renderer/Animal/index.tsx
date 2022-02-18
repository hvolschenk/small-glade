import React from 'react';

import { Animal as AnimalInterface } from '~/src/models/Animal/types';

import DeerElk from './DeerElk';
import { AnimalRendererProps } from './types';
import WolfArctic from './WolfArctic';

import './animal.css';

const animalFactory = (animal: AnimalInterface): React.ComponentType<AnimalRendererProps> => {
  const animals: Record<string, Record<string, React.ComponentType<AnimalRendererProps>>> = {
    deer: {
      elk: DeerElk,
    },
    wolf: {
      arctic: WolfArctic,
    },
  };
  const variants = animals[animal.type];
  if (variants) {
    const animalRenderer = variants[animal.variant];
    if (animalRenderer) {
      return animalRenderer;
    }
  }
  const NullRenderer: React.FC<AnimalRendererProps> = () => null;
  return NullRenderer;
};

const Animal: React.FC<AnimalRendererProps> = ({ animal, position, style }) => {
  const AnimalRenderer = animalFactory(animal);
  return <AnimalRenderer animal={animal} position={position} style={style} />;
};

export default Animal;
