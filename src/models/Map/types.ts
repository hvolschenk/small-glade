import { Animal } from '../Animal/types';
import { Fire } from '../Fire/types';
import { Interactable } from '../Interactable/types';
import { Tile } from '../Tile/types';

export interface Map {
  animals: (Animal | undefined)[][];
  fires: Fire[];
  identifier: string;
  interactables: (Interactable | undefined)[][];
  name: string;
  tiles: Tile[][];
}
