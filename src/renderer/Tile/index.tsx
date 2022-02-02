import React from 'react';

import { Tile as TileInterface } from '~/src/models/Tile/types';

import PlaceholderEmpty from './PlaceholderEmpty';
import RockBasic from './RockBasic';
import TreeBirch from './TreeBirch';
import { TileRendererProps } from './types';
import WaterBasic from './WaterBasic';

import './tile.css';

const tileFactory = (tile: TileInterface): React.ComponentType<TileRendererProps> => {
  const tiles: Record<string, Record<string, React.ComponentType<TileRendererProps>>> = {
    placeholder: {
      empty: PlaceholderEmpty,
    },
    rock: {
      basic: RockBasic,
    },
    tree: {
      birch: TreeBirch,
    },
    water: {
      basic: WaterBasic,
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
