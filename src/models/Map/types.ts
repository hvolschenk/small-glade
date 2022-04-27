import { Animal } from '../Animal/types';
import { Fire } from '../Fire/types';
import { Interactable } from '../Interactable/types';
import { Tile } from '../Tile/types';

export interface Map {
  animals: Animal[];
  fires: Fire[];
  identifier: string;
  interactables: Interactable[];
  name: string;
  tiles: Tile[][];
}
