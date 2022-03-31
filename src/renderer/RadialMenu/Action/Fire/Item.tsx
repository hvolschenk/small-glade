import React from 'react';

import { FireFuel, FireStarter, FireTinder } from '~/src/models/Item/Fire/types';
import ItemRenderer from '~/src/renderer/Item';

interface ItemProps {
  itemIndex: number;
  items: (FireFuel | FireStarter | FireTinder)[];
  label: string;
  setItemIndex(index: number): void;
}

const Item: React.FC<ItemProps> = ({ itemIndex, items, label, setItemIndex }) => {
  const item = React.useMemo<FireFuel | FireStarter | FireTinder | undefined>(
    () => items[itemIndex],
    [itemIndex, items],
  );
  return (
    <div className="radial-menu__fire__item">
      <button disabled={itemIndex === 0} onClick={() => setItemIndex(itemIndex - 1)} type="button">
        &lt;
      </button>
      <div>
        {label}
        {item && <ItemRenderer item={item} />}
        {!item && <div className="radial-menu__fire__item--empty" />}
      </div>
      <button
        disabled={items.length === 0 || items.length - 1 === itemIndex}
        onClick={() => setItemIndex(itemIndex + 1)}
        type="button"
      >
        &gt;
      </button>
    </div>
  );
};

export default Item;
