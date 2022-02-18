import { Animal } from '~/src/models/Animal/types';
import { Position } from '~/src/models/Position';

export interface AnimalRendererProps {
  animal: Animal;
  position: Position;
  style?: React.CSSProperties;
}
