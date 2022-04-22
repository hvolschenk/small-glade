import React from 'react';

import { Predator as PredatorInterface } from '~/src/models/Animal/Predator/types';
import { Prey as PreyInterface } from '~/src/models/Animal/Prey/types';

import Predator from './Predator';
import Prey from './Prey';
import { AnimalRendererProps } from './types';

import './animal.css';

const Animal: React.FC<AnimalRendererProps> = ({ animal, position, style }) => {
  switch (animal.category) {
    case 'predator':
      return <Predator animal={animal as PredatorInterface} position={position} style={style} />;
    case 'prey':
      return <Prey animal={animal as PreyInterface} position={position} style={style} />;
    default:
      return null;
  }
};

export default Animal;
