import { Prey } from '~/src/models/Animal/types';

import { AnimalRendererProps } from '../types';

export interface PreyRendererProps extends AnimalRendererProps {
  animal: Prey;
}
