import { L10n } from '~/src/l10n/types';

export interface Item {
  l10nKey: keyof L10n;
  name: string;
}
