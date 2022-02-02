import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory';

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

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: inventory.isOpen })} id="inventory">
      {inventory.items.length > 0 && (
        <ul>
          {inventory.items.map((item) => (
            <li key={item.name}>{l10n[item.l10nKey]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
