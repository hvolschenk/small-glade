import React from 'react';

import PlaceholderEmpty from './PlaceholderEmpty';
import TreeBirch from './TreeBirch';
import { TileRendererProps } from './types';
import { Tile as TileInterface } from '../../models/Tile/types';

import './tile.css';

const tileFactory = (tile: TileInterface): React.ComponentType<TileRendererProps> => {
  const tiles: Record<string, Record<string, React.ComponentType<TileRendererProps>>> = {
    placeholder: {
      empty: PlaceholderEmpty,
    },
    tree: {
      birch: TreeBirch,
    },
  };
  const variants = tiles[tile.type];
  if (variants) {
    const tileRenderer = variants[tile.variant];
    if (tileRenderer) {
      return tileRenderer;
    }
  }
  return PlaceholderEmpty;
};

const Tile: React.FC<TileRendererProps> = ({ style, tile }) => {
  const TileRenderer = tileFactory(tile);
  return <TileRenderer style={style} tile={tile} />;
};

export default Tile;
