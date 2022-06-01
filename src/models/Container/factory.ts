import { v4 as uuidv4 } from 'uuid';

import { Container } from './types';

const containerFactory = (
  container: Container,
  top: Container['position']['top'] = 0,
  left: Container['position']['left'] = 0,
  items: Container['items'] = [],
): Container => ({
  ...container,
  id: uuidv4(),
  items,
  position: { left, top },
});

export default containerFactory;
