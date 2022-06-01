import { v4 as uuidv4 } from 'uuid';

import { Interactable } from './types';

const interactableFactory = (
  interactable: Interactable,
  top: Interactable['position']['top'] = 0,
  left: Interactable['position']['left'] = 0,
): Interactable => ({
  ...interactable,
  id: uuidv4(),
  position: { left, top },
});

export default interactableFactory;
