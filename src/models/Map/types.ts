import { Interactable } from '../Interactable/types';
import { Tile } from '../Tile/types';

export interface Map {
  identifier: string;
  interactables: (Interactable | undefined)[][];
  name: string;
  tiles: Tile[][];
}
