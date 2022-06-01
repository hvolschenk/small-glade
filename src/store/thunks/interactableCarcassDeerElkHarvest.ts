import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import containerFactory from '~/src/models/Container/factory';
import sack from '~/src/models/Container/Sack';
import { Interactable } from '~/src/models/Interactable/types';
import meatDeerUncooked from '~/src/models/Item/Consumable/MeatDeerUncooked';
import itemFactory from '~/src/models/Item/factory';
import gut from '~/src/models/Item/Material/Gut';
import hideDeer from '~/src/models/Item/Material/HideDeer';

import { mapContainerAdd } from '../reducers/map';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import mapInteractableInteract from './mapInteractableInteract';

const interactableCarcassDeerElkHarvest =
  (carcassDeerElk: Interactable): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const container = containerFactory(sack, playerPosition.top, playerPosition.left, [
      itemFactory(gut),
      itemFactory(gut),
      itemFactory(hideDeer),
      itemFactory(meatDeerUncooked),
      itemFactory(meatDeerUncooked),
      itemFactory(meatDeerUncooked),
      itemFactory(meatDeerUncooked),
      itemFactory(meatDeerUncooked),
    ]);
    dispatch(mapContainerAdd({ container }));
    dispatch(mapInteractableInteract(carcassDeerElk));
  };

export default interactableCarcassDeerElkHarvest;
