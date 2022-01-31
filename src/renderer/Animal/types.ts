import { Animal } from '../../models/Animal/types';

export interface AnimalRendererProps {
  animal: Animal;
  style?: React.CSSProperties;
}
