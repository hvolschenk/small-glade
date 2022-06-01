import { v4 as uuidv4 } from 'uuid';

import { Fire } from './types';

const fireFactory = (
  fire: Fire,
  top: Fire['position']['top'] = 0,
  left: Fire['position']['left'] = 0,
): Fire => ({
  ...fire,
  id: uuidv4(),
  position: { left, top },
});

export default fireFactory;
