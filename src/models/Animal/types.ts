import { L10n } from '~/src/l10n/types';

interface AnimalL10n {
  name: keyof L10n;
}

export interface Animal {
  category: 'predator' | 'prey';
  health: number;
  l10n: AnimalL10n;
  type: string;
  variant: string;
}

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

export enum PreyStatus {
  FLEEING = 'FLEEING',
  IDLE = 'IDLE',
}

export interface Prey extends Animal {
  category: 'prey';
  fleeRadius: number;
  status: PreyStatus;
}
