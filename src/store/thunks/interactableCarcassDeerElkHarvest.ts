import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import sack from '~/src/models/Container/Sack';
import { Container } from '~/src/models/Container/types';
import { Interactable } from '~/src/models/Interactable/types';
import meatDeerUncooked from '~/src/models/Item/Consumable/MeatDeerUncooked';
import gut from '~/src/models/Item/Material/Gut';
import hideDeer from '~/src/models/Item/Material/HideDeer';
import { Item } from '~/src/models/Item/types';

import { mapContainerAdd } from '../reducers/map';
import { selectPlayerPosition } from '../reducers/player/selectors';
import { RootState } from '../types';
import mapInteractableInteract from './mapInteractableInteract';

const item = (itemModel: Item): Item => ({
  ...itemModel,
  id: uuidv4(),
});

const interactableCarcassDeerElkHarvest =
  (carcassDeerElk: Interactable): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch, getState) => {
    const playerPosition = selectPlayerPosition(getState());
    const container: Container = {
      ...sack,
      id: uuidv4(),
      items: [
        item(gut),
        item(gut),
        item(hideDeer),
        item(meatDeerUncooked),
        item(meatDeerUncooked),
        item(meatDeerUncooked),
        item(meatDeerUncooked),
        item(meatDeerUncooked),
      ],
      position: playerPosition,
    };
    dispatch(mapContainerAdd({ container }));
    dispatch(mapInteractableInteract(carcassDeerElk));
  };

export default interactableCarcassDeerElkHarvest;
