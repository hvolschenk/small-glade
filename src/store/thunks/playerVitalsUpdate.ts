import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import configuration from '~/src/configuration';
import { Vitals } from '~/src/models/Player/types';

import { selectOutfitWarmth } from '../reducers/outfit/selectors';
import { playerVitalsUpdate as playerVitalsUpdateAction } from '../reducers/player';
import { selectPlayerVitals } from '../reducers/player/selectors';
import { selectWeatherTemperature } from '../reducers/weather/selectors';
import { RootState } from '../types';

const playerVitalsUpdate =
  (): ThunkAction<void, RootState, void, AnyAction> => (dispatch, getState) => {
    const outfitWarmth = selectOutfitWarmth(getState());
    const temperature = selectWeatherTemperature(getState());
    const {
      fullnessHealthLossPerTurn,
      fullnessLossPerTurn,
      hydrationHealthLossPerTurn,
      hydrationLossPerTurn,
      warmthHealthLossPerTurn,
      warmthLossPerTurn,
    } = configuration.vitals;
    const vitals = selectPlayerVitals(getState());

    let { health, warmth } = vitals;
    const fullness = Math.max(0, vitals.fullness - fullnessLossPerTurn());
    const hydration = Math.max(0, vitals.hydration - hydrationLossPerTurn());
    if (outfitWarmth > temperature) {
      warmth = Math.min(warmth + warmthLossPerTurn(), 100);
    } else {
      warmth = Math.max(0, warmth - warmthLossPerTurn());
    }

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
