import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { Interactable } from '~/src/models/Interactable/types';

import { mapInteractableInteract as mapInteractableInteractAction } from '../reducers/map';
import { RootState } from '../types';

const mapInteractableInteract =
  (interactable: Interactable): ThunkAction<void, RootState, void, AnyAction> =>
  (dispatch) => {
    dispatch(mapInteractableInteractAction({ interactable }));
  };

export default mapInteractableInteract;
