import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Position } from '~/src/models/Position';

import { mapInteractableInteract as mapInteractableInteractAction } from '../reducers/map';
import { RootState } from '../types';

const mapInteractableInteract =
  (position: Position): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(mapInteractableInteractAction({ position }));
  };

export default mapInteractableInteract;
