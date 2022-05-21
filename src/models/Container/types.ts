import { L10n } from '~/src/l10n/types';

import { Item } from '../Item/types';
import { Position } from '../Position';

export interface Container {
  id: string;
  items: Item[];
  l10n: {
    title: keyof L10n;
  };
  position: Position;
  variant: 'backpack' | 'sack' | 'trunk';
}
