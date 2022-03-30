import { RadialMenuAction } from '../types';

export interface ActionRendererProps {
  action: RadialMenuAction;
  onComplete(): void;
}
