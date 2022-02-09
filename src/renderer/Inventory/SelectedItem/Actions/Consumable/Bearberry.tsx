import React from 'react';
import { useSelector } from 'react-redux';

import { useEngine } from '~/src/engine';
import { ItemConsumableEatOptions } from '~/src/engine/event/ItemConsumableEat';
import { Consumable } from '~/src/models/Item/Consumable/types';
import { selectPlayerVitals } from '~/src/store/reducers/player';

import { ActionsRendererProps } from '../types';

const Bearberry: React.FC<ActionsRendererProps> = ({ item }) => {
  const { trigger } = useEngine();
  const vitals = useSelector(selectPlayerVitals);

  const onClick = React.useCallback(() => {
    trigger<ItemConsumableEatOptions>('item:consumable:eat', { item: item as Consumable });
  }, [item, trigger]);

  return (
    <button disabled={vitals.fullness === 100} onClick={onClick} type="button">
      Eat
    </button>
  );
};

export default Bearberry;
