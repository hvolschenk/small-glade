import React from 'react';

import { TileRendererProps } from './types';

const RockBasic: React.FC<TileRendererProps> = ({ style }) => (
  <div className="tile rock-basic" style={style} />
);

export default RockBasic;
