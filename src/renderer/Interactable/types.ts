import { Interactable } from '../../models/Interactable/types';
import { Position } from '../../models/Position';

export interface InteractableRendererProps {
  interactable: Interactable;
  position: Position;
  style?: React.CSSProperties;
}
