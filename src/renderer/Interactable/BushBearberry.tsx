import React from 'react';

import { InteractableRendererProps } from './types';

const BushBearberry: React.FC<InteractableRendererProps> = ({ style }) => (
  <div className="interactable bush-bearberry" style={style} />
);

export default BushBearberry;
