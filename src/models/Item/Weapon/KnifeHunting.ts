import { Weapon } from './types';

const knifeHunting: Weapon = {
  canDefend: true,
  canHarvest: true,
  category: 'weapon',
  damage: 5,
  id: '00000000-0000-0000-0000-000000000000',
  l10n: {
    description: 'itemWeaponKnifeHuntingDescription',
    name: 'itemWeaponKnifeHuntingName',
  },
  position: { left: 0, top: 0 },
  type: 'knife',
  variant: 'hunting',
};

export default knifeHunting;
