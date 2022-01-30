import { Item } from '../types';

export interface Clothing extends Item {
  protection: number;
  warmth: number;
}

export interface ClothingHat extends Clothing {}
export interface ClothingJacket extends Clothing {}
export interface ClothingPants extends Clothing {}
export interface ClothingShirt extends Clothing {}
export interface ClothingShoes extends Clothing {}
export interface ClothingSocks extends Clothing {}
export interface ClothingUnderwear extends Clothing {}
