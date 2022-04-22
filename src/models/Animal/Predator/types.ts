import { Animal } from '../types';

export enum PredatorStatus {
  AGGROED = 'AGGROED',
  FLEEING = 'FLEEING',
  IDLE = 'IDLE',
}

export interface Predator extends Animal {
  aggroRadius: number;
  category: 'predator';
  damage: number;
  fleeRadius: number;
  status: PredatorStatus;
}
