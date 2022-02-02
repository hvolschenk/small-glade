import hatBeanieWool from '../Item/Clothing/HatBeanieWool';
import jacketDenim from '../Item/Clothing/JacketDenim';
import pantsJeans from '../Item/Clothing/PantsJeans';
import shirtCotton from '../Item/Clothing/ShirtCotton';
import shoesSneakers from '../Item/Clothing/ShoesSneakers';
import socksCotton from '../Item/Clothing/SocksCotton';
import underwearCotton from '../Item/Clothing/UnderwearCotton';
import { Outfit } from './types';

const baseOutfit: Outfit = {
  hat: hatBeanieWool,
  isOpen: false,
  jacket: jacketDenim,
  pants: pantsJeans,
  shirt: shirtCotton,
  shoes: shoesSneakers,
  socks: socksCotton,
  underwear: underwearCotton,
};

export default baseOutfit;
