import React from 'react';

import { useSelector } from '../../store/hooks';
import { selectPlayerVitals } from '../../store/reducers/player';

import './vitals.css';

const Vitals: React.FC = () => {
  const vitals = useSelector(selectPlayerVitals);

  return (
    <div id="vitals">
      <p>
        <em>{vitals.health}</em>&nbsp; F: {vitals.fullness};&nbsp; H: {vitals.hydration};&nbsp; W:{' '}
        {vitals.warmth}
      </p>
    </div>
  );
};

export default Vitals;
