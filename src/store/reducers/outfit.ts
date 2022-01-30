/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import baseOutfit from '../../models/Outfit/BaseOutfit';
import { Outfit } from '../../models/Outfit/types';
import { RootState } from '../types';

const initialState: Outfit = baseOutfit;

const outfitSlice = createSlice({
  initialState,
  name: 'outfit',
  reducers: {
    outfitToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectOutfit = (state: RootState): Outfit => state.outfit;
export const selectOutfitIsOpen = (state: RootState): Outfit['isOpen'] => state.outfit.isOpen;
export const selectOutfitProtection = (state: RootState): number => {
  const { hat, jacket, pants, shirt, shoes, socks, underwear } = state.outfit;
  return (
    hat.protection +
    jacket.protection +
    pants.protection +
    shirt.protection +
    shoes.protection +
    socks.protection +
    underwear.protection
  );
};
export const selectOutfitWarmth = (state: RootState): number => {
  const { hat, jacket, pants, shirt, shoes, socks, underwear } = state.outfit;
  return (
    hat.warmth +
    jacket.warmth +
    pants.warmth +
    shirt.warmth +
    shoes.warmth +
    socks.warmth +
    underwear.warmth
  );
};

export const { outfitToggle } = outfitSlice.actions;
export default outfitSlice.reducer;
