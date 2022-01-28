import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { mapInteractableInteract as mapInteractableInteractAction } from '../reducers/map';
import { RootState } from '../types';
import { Position } from '../../models/Position';

const mapInteractableInteract =
  (position: Position): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(mapInteractableInteractAction({ position }));
  };

export default mapInteractableInteract;
