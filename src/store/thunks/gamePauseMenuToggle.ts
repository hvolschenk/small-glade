import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { gamePauseMenuToggle as gamePauseMenuToggleAction } from '../reducers/game';
import { RootState } from '../types';

const gamePauseMenuToggle = (): ThunkAction<void, RootState, void, AnyAction> => (dispatch) => {
  dispatch(gamePauseMenuToggleAction());
};

export default gamePauseMenuToggle;
