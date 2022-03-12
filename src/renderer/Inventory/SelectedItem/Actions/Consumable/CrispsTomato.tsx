import React from 'react';

import { useEngine } from '~/src/engine';
import { ItemConsumableEatOptions } from '~/src/engine/event/ItemConsumableEat';
import { Consumable } from '~/src/models/Item/Consumable/types';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerVitals } from '~/src/store/reducers/player/selectors';

import { ActionsRendererProps } from '../types';

const CrispsTomato: React.FC<ActionsRendererProps> = ({ item }) => {
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

export default CrispsTomato;
