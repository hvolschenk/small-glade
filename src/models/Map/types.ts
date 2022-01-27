import { Interactable } from '../Interactable/types';
import { Tile } from '../Tile/types';

export interface Map {
  identifier: string;
  name: string;
  tiles: Tile[][];
}
