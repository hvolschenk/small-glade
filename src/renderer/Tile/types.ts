import React from 'react';

import { Tile } from '~/src/models/Tile/types';

export interface TileRendererProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  tile: Tile;
}
