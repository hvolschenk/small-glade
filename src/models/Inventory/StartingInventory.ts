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
import itemFactory from '../Item/factory';
import fistsBare from '../Item/Weapon/FistsBare';
import knifeHunting from '../Item/Weapon/KnifeHunting';
import { Inventory } from './types';

const startingInventory: Inventory = {
  capacity: 30,
  isOpen: false,
  items: [
    itemFactory(bearBerry),
    itemFactory(bottleWater),
    itemFactory(crispsTomato),
    itemFactory(fistsBare),
    itemFactory(hatBeanieWool),
    itemFactory(jacketDenim),
    itemFactory(knifeHunting),
    itemFactory(pantsJeans),
    itemFactory(shirtCotton),
    itemFactory(shoesSneakers),
    itemFactory(socksCotton),
    itemFactory(socksWool),
    itemFactory(underwearCotton),
  ],
};

export default startingInventory;
