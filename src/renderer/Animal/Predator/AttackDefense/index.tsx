import React from 'react';

import { useEngine } from '~/src/engine';
import { MapAnimalPredatorDefendOptions } from '~/src/engine/event/MapAnimalPredatorDefend';
import l10n from '~/src/l10n';
import { Predator } from '~/src/models/Animal/Predator/types';
import { Weapon } from '~/src/models/Item/Weapon/types';
import Item from '~/src/renderer/Item';
import { useSelector } from '~/src/store/hooks';
import { selectInventoryItemsOfCategory } from '~/src/store/reducers/inventory/selectors';

import './attack-defense.css';

interface AttackDefenseProps {
  animal: Predator;
}

const AttackDefense: React.FC<AttackDefenseProps> = ({ animal }) => {
  const { trigger } = useEngine();
  const weapons: Weapon[] = useSelector((state) =>
    selectInventoryItemsOfCategory(state, 'weapon'),
  ) as Weapon[];

  React.useEffect(() => {
    trigger('game:player-decision');
  }, []);

  const onClick = React.useCallback(() => {
    trigger<MapAnimalPredatorDefendOptions>('map:animal:predator:defend', {
      predator: animal,
    });
  }, []);

  return (
    <div className="attack-defense">
      <p>{l10n.formatString(l10n.animalAttackTitle, { animalName: l10n[animal.l10n.name] })}</p>
      <p>{l10n.animalAttackChooseWeapon}</p>
      <div className="attack-defense__weapons">
        {weapons.map((weapon) => (
          <button
            className="attack-defense__weapon"
            key={`${weapon.type}-${weapon.variant}`}
            onClick={onClick}
            type="button"
          >
            <p>{l10n[weapon.l10n.name]}</p>
            <Item item={weapon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AttackDefense;
