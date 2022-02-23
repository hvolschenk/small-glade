import React from 'react';

import { PreyRendererProps } from '../types';

const DeerElk: React.FC<PreyRendererProps> = ({ children }) => (
  <div className="deer-elk" data-testid="animal__deer-elk">
    {children}
  </div>
);

export default DeerElk;
