import React from 'react';

import { useEngine } from '~/src/engine';
import { MapContainerItemPickUpOptions } from '~/src/engine/event/MapContainerItemPickUp';
import l10n from '~/src/l10n';
import { Container } from '~/src/models/Container/types';
import { Item as ItemInterface } from '~/src/models/Item/types';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';

import Item from '../../Item';

interface SelectedItemProps {
  container: Container;
  item: ItemInterface;
  onItemPickedUp(): void;
}

const SelectedItem: React.FC<SelectedItemProps> = ({ container, item, onItemPickedUp }) => {
  const inventory = useSelector(selectInventory);
  const { trigger } = useEngine();

  const itemPickUp = React.useCallback(() => {
    trigger<MapContainerItemPickUpOptions>('map:container:item:pick-up', { container, item });
    onItemPickedUp();
  }, [container, item, onItemPickedUp]);

  return (
    <React.Fragment>
      <h3>{l10n[item.l10n.name]}</h3>
      <Item item={item} />
      <p>{l10n[item.l10n.description]}</p>
      <button
        disabled={inventory.items.length >= inventory.capacity}
        onClick={itemPickUp}
        type="button"
      >
        {l10n.containerActionPickUp}
      </button>
    </React.Fragment>
  );
};

export default SelectedItem;
