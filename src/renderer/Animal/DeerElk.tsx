import React from 'react';

import { AnimalRendererProps } from './types';

const DeerElk: React.FC<AnimalRendererProps> = ({ style }) => (
  <div className="animal deer-elk" style={style}>
    E
  </div>
);

export default DeerElk;
