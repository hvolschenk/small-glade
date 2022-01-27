import React from 'react';

import { TileRendererProps } from './types';

const PlaceholderEmpty: React.FC<TileRendererProps> = ({ style }) => (
  <div className="tile placeholder-empty" style={style} />
);

export default PlaceholderEmpty;
