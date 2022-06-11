import React from 'react';

import { Predator as PredatorInterface } from '~/src/models/Animal/Predator/types';
import { Prey as PreyInterface } from '~/src/models/Animal/Prey/types';
import { FogOfWarStatus } from '~/src/models/Map/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapFogOfWarPosition } from '~/src/store/reducers/map/selectors';

import Predator from './Predator';
import Prey from './Prey';
import { AnimalRendererProps } from './types';

import './animal.css';

const Animal: React.FC<AnimalRendererProps> = ({ animal, style }) => {
  const isPositionVisible = useSelector((state) =>
    selectMapFogOfWarPosition(state, animal.position, FogOfWarStatus.VISIBLE),
  );

  if (!isPositionVisible) {
    return null;
  }

  switch (animal.category) {
    case 'predator':
      return <Predator animal={animal as PredatorInterface} style={style} />;
    case 'prey':
      return <Prey animal={animal as PreyInterface} style={style} />;
    default:
      return null;
  }
};

export default Animal;
