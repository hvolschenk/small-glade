import { Consumable } from './types';

const bottleWater: Consumable = {
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
