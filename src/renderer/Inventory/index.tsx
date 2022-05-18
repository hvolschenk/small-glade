import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';

import FullScreenMenu from '../components/FullScreenMenu';
import InventoryItem from './Item';
import SelectedItem from './SelectedItem';
import { InventoryItem as InventoryItemInterface } from './types';

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
    <FullScreenMenu
      footer={
        <React.Fragment>
          Capacity: {inventoryItems.length}/{inventory.capacity}
        </React.Fragment>
      }
      isOpen={inventory.isOpen}
      list={
        <React.Fragment>
          {inventoryItems.length === 0 && <p>{l10n.inventoryMessageNoItems}</p>}
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
        </React.Fragment>
      }
      onClose={() => {
        trigger('inventory:toggle');
      }}
      selected={<SelectedItem />}
      title={l10n.inventoryTitle}
    />
  );
};

export default Inventory;
