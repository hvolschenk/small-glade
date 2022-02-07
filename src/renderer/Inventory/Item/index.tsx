import React from 'react';

import { Item } from '~/src/models/Item/types';

import ItemRenderer from '../../Item';
import { ItemRendererProps } from '../../Item/types';

import './item.css';

interface InventoryItemProps extends ItemRendererProps {
  count: number;
  onClick(item: Item): void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ count, item, onClick }) => (
  <button className="inventory__item" onClick={() => onClick(item)} type="button">
    <span className="inventory__item__count">{count}</span>
    <ItemRenderer item={item} />
  </button>
);

export default InventoryItem;
