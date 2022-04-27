import { v4 as uuidv4 } from 'uuid';

import hatBeanieWool from '../Item/Clothing/HatBeanieWool';
import jacketDenim from '../Item/Clothing/JacketDenim';
import pantsJeans from '../Item/Clothing/PantsJeans';
import shirtCotton from '../Item/Clothing/ShirtCotton';
import shoesSneakers from '../Item/Clothing/ShoesSneakers';
import socksCotton from '../Item/Clothing/SocksCotton';
import socksWool from '../Item/Clothing/SocksWool';
import underwearCotton from '../Item/Clothing/UnderwearCotton';
import bearBerry from '../Item/Consumable/Bearberry';
import bottleWater from '../Item/Consumable/BottleWater';
import crispsTomato from '../Item/Consumable/CrispsTomato';
import { Item } from '../Item/types';
import fistsBare from '../Item/Weapon/FistsBare';
import { Inventory } from './types';

const item = (itemModel: Item): Item => ({
  ...itemModel,
  id: uuidv4(),
});

const startingInventory: Inventory = {
  capacity: 30,
  isOpen: false,
  items: [
    item(bearBerry),
    item(bottleWater),
    item(crispsTomato),
    item(fistsBare),
    item(hatBeanieWool),
    item(jacketDenim),
    item(pantsJeans),
    item(shirtCotton),
    item(shoesSneakers),
    item(socksCotton),
    item(socksWool),
    item(underwearCotton),
  ],
};

export default startingInventory;
