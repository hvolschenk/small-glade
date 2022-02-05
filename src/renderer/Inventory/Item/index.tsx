import React from 'react';

import { Item } from '~/src/models/Item/types';

import ItemRenderer from '../../Item';
import { ItemRendererProps } from '../../Item/types';

import './item.css';

interface InventoryItemProps extends ItemRendererProps {
  onClick(item: Item): void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item, onClick }) => (
  <button className="inventory__item" onClick={() => onClick(item)} type="button">
    <ItemRenderer item={item} />
  </button>
);

export default InventoryItem;
