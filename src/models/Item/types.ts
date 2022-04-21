import { L10n } from '~/src/l10n/types';

interface ItemL10n {
  description: keyof L10n;
  name: keyof L10n;
}

export interface Item {
  category: 'clothing' | 'consumable' | 'fire' | 'weapon';
  l10n: ItemL10n;
  type: string;
  variant: string;
}
