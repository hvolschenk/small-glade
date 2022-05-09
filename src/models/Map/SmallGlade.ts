import { v4 as uuidv4 } from 'uuid';

import wolfArctic from '../Animal/Predator/WolfArctic';
import deerElk from '../Animal/Prey/DeerElk';
import { Animal } from '../Animal/types';
import bushBearberry from '../Interactable/BushBearberry';
import fuelStick from '../Interactable/FuelStick';
import { Interactable } from '../Interactable/types';
import { Position } from '../Position';
import placeholderEmpty from '../Tile/PlaceholderEmpty';
import rockBasic from '../Tile/RockBasic';
import treeBirch from '../Tile/TreeBirch';
import waterBasic from '../Tile/WaterBasic';
import { FogOfWarStatus, Map } from './types';

const animal = (animalModel: Animal, top: Position['top'], left: Position['left']) => ({
  ...animalModel,
  id: uuidv4(),
  position: { left, top },
});

const interactable = (
  interactableModel: Interactable,
  top: Position['top'],
  left: Position['left'],
) => ({
  ...interactableModel,
  id: uuidv4(),
  position: { left, top },
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const _ = placeholderEmpty;
const r = rockBasic;
const t = treeBirch;
const w = waterBasic;

const fogOfWar = new Array(39)
  .fill(undefined)
  .map(() => new Array(55).fill(FogOfWarStatus.UNEXPLORED, 0, 55));

const smallGlade: Map = {
  animals: [animal(wolfArctic, 1, 21), animal(deerElk, 22, 17), animal(deerElk, 20, 49)],
  fires: [],
  fogOfWar,
  identifier: 'small-glade',
  interactables: [
    interactable(bushBearberry, 5, 2),
    interactable(bushBearberry, 7, 1),
    interactable(bushBearberry, 9, 1),
    interactable(bushBearberry, 2, 39),
    interactable(bushBearberry, 3, 37),
    interactable(bushBearberry, 4, 37),
    interactable(bushBearberry, 29, 25),
    interactable(bushBearberry, 30, 24),
    interactable(bushBearberry, 33, 26),
    interactable(fuelStick, 1, 12),
    interactable(fuelStick, 2, 6),
    interactable(fuelStick, 3, 8),
    interactable(fuelStick, 3, 13),
    interactable(fuelStick, 4, 4),
    interactable(fuelStick, 6, 1),
    interactable(fuelStick, 6, 12),
    interactable(fuelStick, 6, 22),
    interactable(fuelStick, 7, 11),
    interactable(fuelStick, 7, 21),
    interactable(fuelStick, 9, 22),
    interactable(fuelStick, 11, 43),
    interactable(fuelStick, 12, 22),
    interactable(fuelStick, 13, 19),
    interactable(fuelStick, 14, 20),
    interactable(fuelStick, 14, 41),
    interactable(fuelStick, 15, 18),
    interactable(fuelStick, 16, 16),
    interactable(fuelStick, 16, 17),
    interactable(fuelStick, 16, 42),
    interactable(fuelStick, 20, 54),
    interactable(fuelStick, 21, 3),
    interactable(fuelStick, 21, 52),
    interactable(fuelStick, 22, 2),
    interactable(fuelStick, 23, 6),
    interactable(fuelStick, 24, 4),
    interactable(fuelStick, 24, 7),
    interactable(fuelStick, 25, 7),
    interactable(fuelStick, 25, 43),
    interactable(fuelStick, 26, 41),
    interactable(fuelStick, 27, 42),
    interactable(fuelStick, 29, 9),
    interactable(fuelStick, 37, 8),
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
