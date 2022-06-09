import { L10n } from '~/src/l10n/types';

import { Position } from '../Position';

interface InteractableL10n {
  name: keyof L10n;
}

export interface Interactable {
  hasBeenInteractedWith: boolean;
  id: string;
  l10n: InteractableL10n;
  position: Position;
  type: string;
  variant: string;
}
