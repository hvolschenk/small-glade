import {
  ClothingHat,
  ClothingJacket,
  ClothingPants,
  ClothingShirt,
  ClothingShoes,
  ClothingSocks,
  ClothingUnderwear,
} from '../Item/Clothing/types';

export interface Outfit {
  hat: ClothingHat;
  isOpen: boolean;
  jacket: ClothingJacket;
  pants: ClothingPants;
  selectedType: keyof Omit<Outfit, 'isOpen' | 'selectedType'>;
  shirt: ClothingShirt;
  shoes: ClothingShoes;
  socks: ClothingSocks;
  underwear: ClothingUnderwear;
}
