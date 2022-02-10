import React from 'react';

import { useSelector } from '~/src/store/hooks';
import { selectPlayerVitals } from '~/src/store/reducers/player/selectors';

import Vital from './Vital';

import './vitals.css';

const Vitals: React.FC = () => {
  const vitals = useSelector(selectPlayerVitals);

  return (
    <div id="vitals">
      <Vital name="HP" percentage={vitals.health} />
      <Vital name="Full" percentage={vitals.fullness} />
      <Vital name="Hydr" percentage={vitals.hydration} />
      <Vital name="Warm" percentage={vitals.warmth} />
    </div>
  );
};

export default Vitals;
