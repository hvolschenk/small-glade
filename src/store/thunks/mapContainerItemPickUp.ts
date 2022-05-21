import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Container } from '~/src/models/Container/types';
import { Item } from '~/src/models/Item/types';

import { mapContainerItemRemove } from '../reducers/map';
import { RootState } from '../types';
import inventoryItemAdd from './inventoryItemAdd';

const mapContainerItemPickUp =
  (container: Container, item: Item): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(mapContainerItemRemove({ container, item }));
    dispatch(inventoryItemAdd(item));
  };

export default mapContainerItemPickUp;
