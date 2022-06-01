import { ConsumableBottle } from './types';

const bottleWater: ConsumableBottle = {
  category: 'consumable',
  fullness: 0,
  hydration: 50,
  id: '00000000-0000-0000-0000-000000000000',
  l10n: {
    description: 'itemConsumableBottleWaterDescription',
    name: 'itemConsumableBottleWaterName',
  },
  position: { left: 0, top: 0 },
  type: 'bottle',
  variant: 'water',
};

export default bottleWater;
