import animalFactory from '../Animal/factory';
import wolfArctic from '../Animal/Predator/WolfArctic';
import deerElk from '../Animal/Prey/DeerElk';
import backpack from '../Container/Backpack';
import containerFactory from '../Container/factory';
import trunk from '../Container/Trunk';
import bushBearberry from '../Interactable/BushBearberry';
import carcassDeerElk from '../Interactable/CarcassDeerElk';
import interactableFactory from '../Interactable/factory';
import fuelStick from '../Interactable/FuelStick';
import itemFactory from '../Item/factory';
import starterMatches from '../Item/Fire/StarterMatches';
import tinderNewspaper from '../Item/Fire/TinderNewspaper';
import placeholderEmpty from '../Tile/PlaceholderEmpty';
import rockBasic from '../Tile/RockBasic';
import treeBirch from '../Tile/TreeBirch';
import waterBasic from '../Tile/WaterBasic';
import { FogOfWarStatus, Map } from './types';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _ = placeholderEmpty;
const r = rockBasic;
const t = treeBirch;
const w = waterBasic;

const fogOfWar = new Array(39)
  .fill(undefined)
  .map(() => new Array(55).fill(FogOfWarStatus.UNEXPLORED, 0, 55));

const smallGlade: Map = {
  animals: [
    animalFactory(wolfArctic, 1, 21),
    animalFactory(deerElk, 22, 17),
    animalFactory(deerElk, 20, 49),
  ],
  containers: [
    containerFactory(backpack, 5, 5, [itemFactory(starterMatches), itemFactory(tinderNewspaper)]),
    containerFactory(trunk, 26, 35, [itemFactory(starterMatches), itemFactory(tinderNewspaper)]),
  ],
  fires: [],
  fogOfWar,
  identifier: 'small-glade',
  interactables: [
    interactableFactory(bushBearberry, 5, 2),
    interactableFactory(bushBearberry, 7, 1),
    interactableFactory(bushBearberry, 9, 1),
    interactableFactory(bushBearberry, 2, 39),
    interactableFactory(bushBearberry, 3, 37),
    interactableFactory(bushBearberry, 4, 37),
    interactableFactory(bushBearberry, 29, 25),
    interactableFactory(bushBearberry, 30, 24),
    interactableFactory(bushBearberry, 33, 26),
    interactableFactory(fuelStick, 1, 12),
    interactableFactory(fuelStick, 2, 6),
    interactableFactory(fuelStick, 3, 8),
    interactableFactory(fuelStick, 3, 13),
    interactableFactory(fuelStick, 4, 4),
    interactableFactory(fuelStick, 6, 1),
    interactableFactory(fuelStick, 6, 12),
    interactableFactory(fuelStick, 6, 22),
    interactableFactory(fuelStick, 7, 11),
    interactableFactory(fuelStick, 7, 21),
    interactableFactory(fuelStick, 9, 22),
    interactableFactory(fuelStick, 11, 43),
    interactableFactory(fuelStick, 12, 22),
    interactableFactory(fuelStick, 13, 19),
    interactableFactory(fuelStick, 14, 20),
    interactableFactory(fuelStick, 14, 41),
    interactableFactory(fuelStick, 15, 18),
    interactableFactory(fuelStick, 16, 16),
    interactableFactory(fuelStick, 16, 17),
    interactableFactory(fuelStick, 16, 42),
    interactableFactory(fuelStick, 20, 54),
    interactableFactory(fuelStick, 21, 3),
    interactableFactory(fuelStick, 21, 52),
    interactableFactory(fuelStick, 22, 2),
    interactableFactory(fuelStick, 23, 6),
    interactableFactory(fuelStick, 24, 4),
    interactableFactory(fuelStick, 24, 7),
    interactableFactory(carcassDeerElk, 24, 27),
    interactableFactory(fuelStick, 25, 7),
    interactableFactory(fuelStick, 25, 43),
    interactableFactory(fuelStick, 26, 41),
    interactableFactory(fuelStick, 27, 42),
    interactableFactory(fuelStick, 29, 9),
    interactableFactory(fuelStick, 37, 8),
  ],
  name: 'Small glade',
  startingPositions: [
    { left: 7, top: 1 },
    { left: 25, top: 26 },
    { left: 43, top: 21 },
  ],
  // prettier-ignore
  tiles: [
    [r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, w, w, w, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r],
    [r, r, r, r, r, t, t, _, r, r, r, r, _, t, t, w, w, r, r, r, r, _, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, _, _, _, _, _, _, _, r, r, r, r, _, _],
    [r, r, r, t, t, t, _, _, t, t, r, _, _, _, t, w, w, r, _, _, _, _, _, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, r, t, t, t, _, _, _, _, t, t, _, _, _, t, t, w, w, _, _, _, _, _, _, r, r, _, _, _, _, r, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, r, t, _, _, _, _, _, _, t, _, _, _, t, t, t, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, r, _, _, _, _, _, _, _, _, _, _, t, t, t, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, _, _, _, _, _, _, t, _, _, _, _, _, _, _, _, _, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, _, _, _, _, _, t, _, _, _, _, _, t, t, w, w, w, _, _, _, _, _, _, t, t, _, _, _, _, _, _, _, _, _, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, _, _, _, _, _, t, t, _, _, _, _, t, w, w, w, w, _, _, _, _, _, _, t, t, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, r, _, _, _, _, t, t, t, _, _, _, w, w, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, r, _, _, _, _, _, t, t, _, _, _, w, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, w, w, _, _, _, _, _, _],
    [r, r, r, _, _, _, _, t, t, t, _, _, _, w, w, w, w, _, _, _, _, _, _, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, _, _, _, _, _, _],
    [r, r, _, _, _, _, _, _, t, _, _, _, _, _, w, w, _, _, _, _, _, _, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, _, _, _, _, _],
    [r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, w, w, _, _, _, _],
    [r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, t, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, w, w, w, w, w, w, w, w, _, _, _],
    [r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, t, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, w, w, w, w, w, w, w, _, _, _, _],
    [r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, t, t, t, w, w, w, w, w, w, w, w, r, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, w, w, _, _, _, _, _],
    [r, r, r, _, _, _, _, _, _, _, _, _, _, w, w, t, t, t, t, t, w, w, w, w, w, w, w, w, w, w, r, r, _, _, _, _, _, _, _, _, _, _, t, w, w, w, w, w, w, w, _, _, _, t, _],
    [r, r, r, _, _, _, _, _, _, _, _, _, w, w, w, w, w, t, w, w, w, w, w, w, w, w, w, w, w, t, r, r, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, w, w, _, _, t, t, _],
    [r, r, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, t, r, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, w, _, _, _, t, t, _],
    [r, t, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _, t, t],
    [r, t, _, _, _, _, _, _, _, _, _, _, _, _, _, w, _, _, r, r, r, w, w, w, w, w, w, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _, _],
    [r, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, w, w, w, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _, _],
    [r, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _],
    [r, r, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _],
    [r, r, t, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, w, w, w, w, w, _, _, _, _],
    [r, r, r, r, t, t, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, _, _, _, _],
    [r, r, r, r, r, r, w, t, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, w, w, w, w, _, _, _, _],
    [r, r, r, r, r, w, w, w, t, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, t, t, w, w, w, w, w, _, _, _, _],
    [r, r, r, w, w, w, w, w, w, t, _, _, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, t, w, w, w, w, w, w, _, _, _, _, _],
    [r, r, r, w, w, w, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, w, _, _, _, _, _, _],
    [r, r, r, r, r, r, r, r, w, w, _, _, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, w, w, _, _, _, _, _, _, _],
    [r, r, r, r, r, r, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, w, _, _, _, _, _, _, _, _],
    [r, r, r, w, w, w, w, w, w, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, w, w, _, _, _, _, _, _, _, _, _],
    [r, r, w, w, w, w, w, t, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, r, r, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, w, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [r, w, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ],
};

export default smallGlade;
