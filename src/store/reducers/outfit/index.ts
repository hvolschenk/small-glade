/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import baseOutfit from '~/src/models/Outfit/BaseOutfit';
import { Outfit } from '~/src/models/Outfit/types';

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

export const { outfitToggle } = outfitSlice.actions;
export default outfitSlice.reducer;
