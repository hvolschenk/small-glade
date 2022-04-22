import { L10n } from '~/src/l10n/types';

interface AnimalL10n {
  name: keyof L10n;
}

export interface Animal {
  category: 'predator' | 'prey';
  health: number;
  l10n: AnimalL10n;
  type: string;
  variant: string;
}
