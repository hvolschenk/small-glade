import React from 'react';

import { useEngine } from '~/src/engine';
import { InventorySelectedItemUpdateOptions } from '~/src/engine/event/InventorySelectedItemUpdate';

import ItemRenderer from '../../Item';
import { ItemRendererProps } from '../../Item/types';

import './item.css';

interface InventoryItemProps extends ItemRendererProps {
  count: number;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ count, item }) => {
  const { trigger } = useEngine();

  const selectItem = React.useCallback(() => {
    trigger<InventorySelectedItemUpdateOptions>('inventory:selected-item:update', { item });
  }, [trigger]);

  return (
    <button className="inventory__item" onClick={selectItem} type="button">
      <span className="inventory__item__count">{count}</span>
      <ItemRenderer item={item} />
    </button>
  );
};

export default InventoryItem;
