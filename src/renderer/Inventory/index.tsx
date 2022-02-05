import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { Item } from '~/src/models/Item/types';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory';

import InventoryItem from './Item';
import SelectedItem from './SelectedItem';

import './inventory.css';

const Inventory: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
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
          {inventory.items.length === 0 && (
            <p className="inventory__items__error">{l10n.inventoryMessageNoItems}</p>
          )}
          {inventory.items.length > 0 && (
            <React.Fragment>
              {inventory.items.map((item) => (
                <InventoryItem
                  item={item}
                  key={`${item.category}-${item.type}-${item.variant}`}
                  onClick={setSelectedItem}
                />
              ))}
            </React.Fragment>
          )}
        </div>
        <div id="inventory__selected">
          {selectedItem === null && <p>{l10n.inventoryMessageNoItemSelected}</p>}
          {selectedItem !== null && <SelectedItem item={selectedItem} />}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
