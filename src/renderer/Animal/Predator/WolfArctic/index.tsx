import React from 'react';

import { PredatorRendererProps } from '../types';

const WolfArctic: React.FC<PredatorRendererProps> = ({ children }) => (
  <div className="wolf-arctic" data-testid="animal__wolf-arctic">
    {children}
  </div>
);

export default WolfArctic;
