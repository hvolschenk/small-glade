import React from 'react';

import './vital.css';

interface VitalProps {
  name: string;
  percentage: number;
}

const Vital: React.FC<VitalProps> = ({ name, percentage }) => (
  <div className="vital">
    <span>{name}</span>
    <div
      className="vital__value"
      style={{
        clip: percentage < 50 ? 'rect(0em, 1em, 1em, 0.5em)' : 'rect(auto, auto, auto, auto)',
      }}
    >
      <div className="vital__value__bar" style={{ transform: `rotate(${percentage * 3.6}deg)` }} />
      <div
        className="vital__value__fill"
        style={{ transform: percentage < 50 ? '' : `rotate(180deg)` }}
      />
    </div>
  </div>
);

export default Vital;
