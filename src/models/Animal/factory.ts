import { v4 as uuidv4 } from 'uuid';

import { Animal } from './types';

const animalFactory = (
  animal: Animal,
  top: Animal['position']['top'] = 0,
  left: Animal['position']['left'] = 0,
): Animal => ({
  ...animal,
  id: uuidv4(),
  position: { left, top },
});

export default animalFactory;
