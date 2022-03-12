/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Clothing,
  ClothingHat,
  ClothingJacket,
  ClothingPants,
  ClothingShirt,
  ClothingShoes,
  ClothingSocks,
  ClothingUnderwear,
} from '~/src/models/Item/Clothing/types';
import baseOutfit from '~/src/models/Outfit/BaseOutfit';
import { Outfit } from '~/src/models/Outfit/types';

const initialState: Outfit = baseOutfit;

const outfitSlice = createSlice({
  initialState,
  name: 'outfit',
  reducers: {
    outfitItemWear: (state, action: PayloadAction<{ item: Clothing }>) => {
      const { item } = action.payload;
      switch (item.type) {
        case 'hat':
          state.hat = item as ClothingHat;
          break;
        case 'jacket':
          state.jacket = item as ClothingJacket;
          break;
        case 'pants':
          state.pants = item as ClothingPants;
          break;
        case 'shirt':
          state.shirt = item as ClothingShirt;
          break;
        case 'shoes':
          state.shoes = item as ClothingShoes;
          break;
        case 'socks':
          state.socks = item as ClothingSocks;
          break;
        case 'underwear':
          state.underwear = item as ClothingUnderwear;
          break;
        default:
          break;
      }
    },
    outfitSelectedTypeUpdate: (
      state,
      action: PayloadAction<{ selectedType: Outfit['selectedType'] }>,
    ) => {
      state.selectedType = action.payload.selectedType;
    },
    outfitToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { outfitItemWear, outfitSelectedTypeUpdate, outfitToggle } = outfitSlice.actions;
export default outfitSlice.reducer;
