import { L10n } from '~/src/l10n/types';

import { Position } from '../Position';

interface ItemL10n {
  description: keyof L10n;
  name: keyof L10n;
}

export interface Item {
  category: 'clothing' | 'consumable' | 'fire' | 'material' | 'weapon';
  id: string;
  l10n: ItemL10n;
  position: Position;
  type: string;
  variant: string;
}
