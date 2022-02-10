import React from 'react';
import { useSelector } from 'react-redux';

import { useEngine } from '~/src/engine';
import { ItemConsumableDrinkOptions } from '~/src/engine/event/ItemConsumableDrink';
import { Consumable } from '~/src/models/Item/Consumable/types';
import { selectPlayerVitals } from '~/src/store/reducers/player/selectors';

import { ActionsRendererProps } from '../types';

const BottleWater: React.FC<ActionsRendererProps> = ({ item }) => {
  const { trigger } = useEngine();
  const vitals = useSelector(selectPlayerVitals);

  const onClick = React.useCallback(() => {
    trigger<ItemConsumableDrinkOptions>('item:consumable:drink', { item: item as Consumable });
  }, [item, trigger]);

  return (
    <button disabled={vitals.hydration === 100} onClick={onClick} type="button">
      Drink
    </button>
  );
};

export default BottleWater;
