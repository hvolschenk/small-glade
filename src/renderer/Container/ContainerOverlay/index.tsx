import React from 'react';

import l10n from '~/src/l10n';
import { Container } from '~/src/models/Container/types';
import { Item as ItemInterface } from '~/src/models/Item/types';
import { useSelector } from '~/src/store/hooks';
import { selectInventory } from '~/src/store/reducers/inventory/selectors';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';
import positionsEqual from '~/src/utilities/positionsEqual';

import FullScreenMenu from '../../components/FullScreenMenu';
import Item from '../../Item';
import SelectedItem from './SelectedItem';

import './container-overlay.css';

interface ContainerOverlayProps {
  container: Container;
}

const ContainerOverlay: React.FC<ContainerOverlayProps> = ({ container }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<ItemInterface | null>(null);
  const playerPosition = useSelector(selectPlayerPosition);
  const inventory = useSelector(selectInventory);

  const selectedItemClear = React.useCallback(() => {
    setSelectedItem(null);
  }, []);

  if (positionsEqual(playerPosition, container.position)) {
    return (
      <React.Fragment>
        <button
          className="container-overlay__action--open"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          {l10n.containerActionSearch}
        </button>
        <FullScreenMenu
          footer={
            <p>
              {l10n.formatString(l10n.containerFooterInventoryCapacity, {
                capacity: inventory.capacity,
                items: inventory.items.length,
              })}
            </p>
          }
          list={
            <React.Fragment>
              {container.items.length === 0 && <p>{l10n.containerEmpty}</p>}
              {container.items.length > 0 &&
                container.items.map((item) => (
                  <button
                    className="container-overlay__item__action--select"
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    type="button"
                  >
                    <Item item={item} />
                  </button>
                ))}
            </React.Fragment>
          }
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selected={
            selectedItem ? (
              <SelectedItem
                container={container}
                item={selectedItem}
                onItemPickedUp={selectedItemClear}
              />
            ) : null
          }
          title={
            l10n.formatString(l10n.containerTitle, {
              containerType: l10n[container.l10n.title],
            }) as string
          }
        />
      </React.Fragment>
    );
  }

  return null;
};

export default ContainerOverlay;
