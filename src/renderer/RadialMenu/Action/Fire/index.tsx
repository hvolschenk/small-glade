import React from 'react';

import { useEngine } from '~/src/engine';
import { FireStartOptions } from '~/src/engine/event/FireStart';
import l10n from '~/src/l10n';
import { FireFuel, FireStarter, FireTinder } from '~/src/models/Item/Fire/types';
import { useSelector } from '~/src/store/hooks';
import { selectInventoryItemsOfType } from '~/src/store/reducers/inventory/selectors';

import { ActionRendererProps } from '../types';
import Item from './Item';

import './fire.css';

const Fire: React.FC<ActionRendererProps> = ({ onComplete }) => {
  const { trigger } = useEngine();
  const fuels = useSelector<FireFuel[]>(
    (state) => selectInventoryItemsOfType(state, 'fire', 'fuel') as FireFuel[],
  );
  const starters = useSelector<FireStarter[]>(
    (state) => selectInventoryItemsOfType(state, 'fire', 'starter') as FireStarter[],
  );
  const tinders = useSelector<FireTinder[]>(
    (state) => selectInventoryItemsOfType(state, 'fire', 'tinder') as FireTinder[],
  );

  const [fuelIndex, setFuelIndex] = React.useState<number>(0);
  const [starterIndex, setStarterIndex] = React.useState<number>(0);
  const [tinderIndex, setTinderIndex] = React.useState<number>(0);

  const startFire = React.useCallback(() => {
    trigger<FireStartOptions>('fire:start', {
      fuel: fuels[fuelIndex],
      starter: starters[starterIndex],
      tinder: tinders[tinderIndex],
    });
    onComplete();
  }, [onComplete, trigger]);

  return (
    <div id="radial-menu__fire">
      <Item
        itemIndex={starterIndex}
        items={starters}
        label={l10n.fireStarter}
        setItemIndex={setStarterIndex}
      />
      <Item
        itemIndex={tinderIndex}
        items={tinders}
        label={l10n.fireTinder}
        setItemIndex={setTinderIndex}
      />
      <Item itemIndex={fuelIndex} items={fuels} label={l10n.fireFuel} setItemIndex={setFuelIndex} />
      <button
        disabled={fuels.length === 0 || starters.length === 0 || tinders.length === 0}
        onClick={startFire}
        type="button"
      >
        {l10n.fireActionStart}
      </button>
    </div>
  );
};

export default Fire;
