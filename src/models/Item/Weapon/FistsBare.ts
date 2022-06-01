import { Weapon } from './types';

const fistsBare: Weapon = {
  canDefend: true,
  canHarvest: false,
  category: 'weapon',
  damage: 1,
  id: '00000000-0000-0000-0000-000000000000',
  l10n: {
    description: 'itemWeaponFistsBareDescription',
    name: 'itemWeaponFistsBareName',
  },
  position: { left: 0, top: 0 },
  type: 'fists',
  variant: 'bare',
};

export default fistsBare;
