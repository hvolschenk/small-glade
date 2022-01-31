import { Animal } from '../Animal/types';
import { Interactable } from '../Interactable/types';
import { Tile } from '../Tile/types';

export interface Map {
  animals: (Animal | undefined)[][];
  identifier: string;
  interactables: (Interactable | undefined)[][];
  name: string;
  tiles: Tile[][];
}
