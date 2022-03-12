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
import { Inventory } from './types';

const startingInventory: Inventory = {
  capacity: 30,
  isOpen: false,
  items: [
    bearBerry,
    bottleWater,
    crispsTomato,
    hatBeanieWool,
    jacketDenim,
    pantsJeans,
    shirtCotton,
    shoesSneakers,
    socksCotton,
    socksWool,
    underwearCotton,
  ],
};

export default startingInventory;
