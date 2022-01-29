import React from 'react';

import { TileRendererProps } from './types';

const WaterBasic: React.FC<TileRendererProps> = ({ style }) => (
  <div className="tile water-basic" style={style} />
);

export default WaterBasic;
