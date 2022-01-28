import classnames from 'classnames';
import React from 'react';

import { useEngine } from '../../engine';
import { useSelector } from '../../store/hooks';
import { selectInventory } from '../../store/reducers/inventory';

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
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
