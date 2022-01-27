import React from 'react';

import { Tile } from '../../models/Tile/types';

export interface TileRendererProps {
  style?: React.CSSProperties;
  tile: Tile;
}
