import { Interactable } from '~/src/models/Interactable/types';

export interface InteractableRendererProps {
  interactable: Interactable;
  style?: React.CSSProperties;
}
