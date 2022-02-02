import { Animal } from '~/src/models/Animal/types';

export interface AnimalRendererProps {
  animal: Animal;
  style?: React.CSSProperties;
}
