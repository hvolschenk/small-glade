import { Prey, PreyStatus } from './types';

const deerElk: Prey = {
  category: 'prey',
  fleeRadius: 3,
  health: 30,
  l10n: {
    name: 'animalDeerElkName',
  },
  status: PreyStatus.IDLE,
  type: 'deer',
  variant: 'elk',
};

export default deerElk;
