import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { gameRadialMenuToggle as gameRadialMenuToggleAction } from '../reducers/game';
import { RootState } from '../types';

const gameRadialMenuToggle = (): ThunkAction<void, RootState, void, AnyAction> => (dispatch) => {
  dispatch(gameRadialMenuToggleAction());
};

export default gameRadialMenuToggle;
