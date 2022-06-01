import { v4 as uuidv4 } from 'uuid';

import { Item } from './types';

const itemFactory = (
  item: Item,
  top: Item['position']['top'] = 0,
  left: Item['position']['left'] = 0,
): Item => ({
  ...item,
  id: uuidv4(),
  position: { left, top },
});

export default itemFactory;
