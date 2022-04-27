import { Position } from '../Position';

export interface Interactable {
  hasBeenInteractedWith: boolean;
  id: string;
  name: string;
  position: Position;
  type: string;
  variant: string;
}
