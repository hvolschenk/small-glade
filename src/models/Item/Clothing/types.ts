import { Item } from '../types';

export interface Clothing extends Item {
  category: 'clothing';
  protection: number;
  warmth: number;
}

export interface ClothingHat extends Clothing {
  type: 'hat';
}

export interface ClothingJacket extends Clothing {
  type: 'jacket';
}

export interface ClothingPants extends Clothing {
  type: 'pants';
}

export interface ClothingShirt extends Clothing {
  type: 'shirt';
}

export interface ClothingShoes extends Clothing {
  type: 'shoes';
}

export interface ClothingSocks extends Clothing {
  type: 'socks';
}

export interface ClothingUnderwear extends Clothing {
  type: 'underwear';
}
