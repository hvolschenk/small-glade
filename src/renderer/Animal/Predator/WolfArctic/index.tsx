import React from 'react';

import { PredatorRendererProps } from '../types';

const WolfArctic: React.FC<PredatorRendererProps> = ({ animal }) => (
  <div className="wolf-arctic" data-testid="animal__wolf-arctic">
    {animal.isAggroed && <span data-testid="animal__wolf-arctic__aggro-indicator">!</span>}
  </div>
);

export default WolfArctic;
