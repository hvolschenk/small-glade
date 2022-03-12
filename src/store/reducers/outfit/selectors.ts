import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectOutfit = (state: RootState) => state.outfit;
export const selectOutfitIsOpen = createSelector([selectOutfit], (outfit) => outfit.isOpen);
export const selectOutfitProtection = createSelector([selectOutfit], (outfit) => {
  const { hat, jacket, pants, shirt, shoes, socks, underwear } = outfit;
  return (
    hat.protection +
    jacket.protection +
    pants.protection +
    shirt.protection +
    shoes.protection +
    socks.protection +
    underwear.protection
  );
});
export const selectOutfitSelectedType = createSelector(
  [selectOutfit],
  (outfit) => outfit.selectedType,
);
export const selectOutfitWarmth = createSelector([selectOutfit], (outfit) => {
  const { hat, jacket, pants, shirt, shoes, socks, underwear } = outfit;
  return (
    hat.warmth +
    jacket.warmth +
    pants.warmth +
    shirt.warmth +
    shoes.warmth +
    socks.warmth +
    underwear.warmth
  );
});
