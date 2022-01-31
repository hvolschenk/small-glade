import React from 'react';

import { AnimalRendererProps } from './types';

const WolfArctic: React.FC<AnimalRendererProps> = ({ style }) => (
  <div className="animal wolf-arctic" style={style}>
    W
  </div>
);

export default WolfArctic;
