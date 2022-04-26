import { Prey, PreyStatus } from './types';

const deerElk: Prey = {
  category: 'prey',
  fleeRadius: 3,
  health: 30,
  id: '00000000-0000-0000-0000-000000000000',
  l10n: {
    name: 'animalDeerElkName',
  },
  position: { left: 0, top: 0 },
  status: PreyStatus.IDLE,
  type: 'deer',
  variant: 'elk',
};

export default deerElk;
