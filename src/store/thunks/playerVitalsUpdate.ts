import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import configuration from '../../configuration';
import { Vitals } from '../../models/Player/types';
import {
  playerVitalsUpdate as playerVitalsUpdateAction,
  selectPlayerVitals,
} from '../reducers/player';
import { RootState } from '../types';

const playerVitalsUpdate =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const {
      fullnessHealthLossPerTurn,
      fullnessLossPerTurn,
      hydrationHealthLossPerTurn,
      hydrationLossPerTurn,
      warmthHealthLossPerTurn,
      warmthLossPerTurn,
    } = configuration.vitals;
    const vitals = selectPlayerVitals(getState());

    let { health } = vitals;
    const fullness = Math.max(0, vitals.fullness - fullnessLossPerTurn());
    const hydration = Math.max(0, vitals.hydration - hydrationLossPerTurn());
    const warmth = Math.max(0, vitals.warmth - warmthLossPerTurn());

    if (fullness === 0) {
      health = Math.max(0, health - fullnessHealthLossPerTurn());
    }
    if (hydration === 0) {
      health = Math.max(0, health - hydrationHealthLossPerTurn());
    }
    if (warmth === 0) {
      health = Math.max(0, health - warmthHealthLossPerTurn());
    }

    const vitalsUpdated: Vitals = {
      fullness,
      health,
      hydration,
      warmth,
    };
    dispatch(playerVitalsUpdateAction({ vitals: vitalsUpdated }));
  };

export default playerVitalsUpdate;
