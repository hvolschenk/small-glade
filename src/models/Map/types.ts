import { Animal } from '../Animal/types';
import { Container } from '../Container/types';
import { Fire } from '../Fire/types';
import { Interactable } from '../Interactable/types';
import { Position } from '../Position';
import { Tile } from '../Tile/types';

export enum FogOfWarStatus {
  EXPLORED = 'EXPLORED',
  UNEXPLORED = 'UNEXPLORED',
  VISIBLE = 'VISIBLE',
}

export interface Map {
  animals: Animal[];
  containers: Container[];
  fires: Fire[];
  fogOfWar: FogOfWarStatus[][];
  identifier: string;
  interactables: Interactable[];
  name: string;
  startingPositions: Position[];
  tiles: Tile[][];
}
