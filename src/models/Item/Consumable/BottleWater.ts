import { ConsumableBottle } from './types';

const bottleWater: ConsumableBottle = {
  category: 'consumable',
  fullness: 0,
  hydration: 50,
  l10n: {
    description: 'itemConsumableBottleWaterDescription',
    name: 'itemConsumableBottleWaterName',
  },
  type: 'bottle',
  variant: 'water',
};

export default bottleWater;
