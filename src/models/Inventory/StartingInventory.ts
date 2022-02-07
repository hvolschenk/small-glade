import bearBerry from '../Item/Consumable/Bearberry';
import bottleWater from '../Item/Consumable/BottleWater';
import crispsTomato from '../Item/Consumable/CrispsTomato';
import { Inventory } from './types';

const startingInventory: Inventory = {
  capacity: 30,
  isOpen: false,
  items: [bearBerry, bottleWater, crispsTomato],
};

export default startingInventory;
