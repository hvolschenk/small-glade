import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';

import InventoryItem from './Item';
import SelectedItem from './SelectedItem';
import { InventoryItem as InventoryItemInterface } from './types';

import './inventory.css';

const Inventory: React.FC = () => {
  const { trigger } = useEngine();
  const inventory = useSelector(selectInventory);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'i') {
        trigger('inventory:toggle');
      }
    },
    [trigger],
  );

  const inventoryItems: InventoryItemInterface[] = React.useMemo(() => {
    const returnList: InventoryItemInterface[] = inventory.items.reduce((accumulator, item) => {
      const foundInventoryItem = accumulator.find(
        (inventoryItem) =>
          inventoryItem.item.category === item.category &&
          inventoryItem.item.type === item.type &&
          inventoryItem.item.variant === item.variant,
      );
      if (foundInventoryItem) {
        foundInventoryItem.count += 1;
        return accumulator;
      }
      return [...accumulator, { count: 1, item }];
    }, [] as InventoryItemInterface[]);
    return returnList;
  }, [inventory]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: inventory.isOpen })} id="inventory">
      <div id="inventory__header">
        <h1>{l10n.inventoryTitle}</h1>
        <button
          id="inventory__close"
          onClick={() => {
            trigger('inventory:toggle');
          }}
          type="button"
        >
          X
        </button>
      </div>
      <div id="inventory__content">
        <div id="inventory__items">
          {inventoryItems.length === 0 && (
            <p className="inventory__items__error">{l10n.inventoryMessageNoItems}</p>
          )}
          {inventoryItems.length > 0 && (
            <React.Fragment>
              {inventoryItems.map(({ count, item }) => (
                <InventoryItem
                  count={count}
                  item={item}
                  key={`${item.category}-${item.type}-${item.variant}`}
                />
              ))}
            </React.Fragment>
          )}
        </div>
        <div id="inventory__selected">
          <SelectedItem />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
