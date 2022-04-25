import { L10n } from '~/src/l10n/types';

import { Position } from '../Position';

interface AnimalL10n {
  name: keyof L10n;
}

export interface Animal {
  category: 'predator' | 'prey';
  health: number;
  l10n: AnimalL10n;
  position: Position;
  type: string;
  variant: string;
}
