import { Interactable } from '~/src/models/Interactable/types';
import { Position } from '~/src/models/Position';

export interface InteractableRendererProps {
  interactable: Interactable;
  position: Position;
  style?: React.CSSProperties;
}
