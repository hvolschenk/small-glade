import React from 'react';

import { FogOfWarStatus } from '~/src/models/Map/types';
import { Position } from '~/src/models/Position';
import { Tile as TileInterface } from '~/src/models/Tile/types';
import { useSelector } from '~/src/store/hooks';
import { selectMapFogOfWarPosition } from '~/src/store/reducers/map/selectors';

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

type TileProps = TileRendererProps & { position: Position };

const Tile: React.FC<TileProps> = ({ position, style, tile }) => {
  const isPositionUnexplored = useSelector((state) =>
    selectMapFogOfWarPosition(state, position, FogOfWarStatus.UNEXPLORED),
  );

  if (isPositionUnexplored) {
    return null;
  }

  const TileRenderer = tileFactory(tile);
  return <TileRenderer style={style} tile={tile} />;
};

export default Tile;
