import { Predator, PredatorStatus } from './types';

const wolfArctic: Predator = {
  aggroRadius: 3,
  category: 'predator',
  damage: 30,
  fleeRadius: 5,
  health: 50,
  l10n: {
    name: 'animalWolfArcticName',
  },
  position: { left: 0, top: 0 },
  status: PredatorStatus.IDLE,
  type: 'wolf',
  variant: 'arctic',
};

export default wolfArctic;
