import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import { OutfitItemWearOptions } from '~/src/engine/event/OutfitItemWear';
import l10n from '~/src/l10n';
import { L10n } from '~/src/l10n/types';
import { Clothing } from '~/src/models/Item/Clothing/types';
import { useSelector } from '~/src/store/hooks';
import { selectInventoryItemsOfType } from '~/src/store/reducers/inventory/selectors';
import { selectOutfit, selectOutfitSelectedType } from '~/src/store/reducers/outfit/selectors';

import Item from '../../Item';

import './selected-item.css';

const SelectedItem: React.FC = () => {
  const outfit = useSelector(selectOutfit);
  const selectedType = useSelector(selectOutfitSelectedType);
  const { trigger } = useEngine();
  const item = React.useMemo(() => outfit[selectedType], [outfit, selectedType]);
  const itemsOfType: Clothing[] = useSelector(
    (state) => selectInventoryItemsOfType(state, item.category, item.type) as Clothing[],
  );
  const wearItem = React.useCallback(
    (selectedItem: Clothing) => {
      trigger<OutfitItemWearOptions>('outfit:item:wear', { item: selectedItem });
    },
    [trigger],
  );
  const typeCapitalised = React.useMemo(
    () => `${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`,
    [item],
  );

  return (
    <div id="outfit__selected-item">
      <h3>{l10n[`outfitItemType${typeCapitalised}` as keyof L10n]}</h3>
      <div id="outfit__selected-item__item">
        <Item item={item} />
        <div>
          <h6>{l10n[item.l10n.name]}</h6>
          <p>{l10n[item.l10n.description]}</p>
          <p>Warmth: {item.warmth}</p>
          <p>Protection: {item.protection}</p>
        </div>
      </div>
      {itemsOfType.map((itemOfType) => (
        <button
          className={classnames({
            'outfit__selected-item__option': true,
            selected: itemOfType === item,
          })}
          key={`${itemOfType.category}-${itemOfType.type}-${itemOfType.variant}`}
          onClick={() => wearItem(itemOfType)}
          type="button"
        >
          <Item item={itemOfType} />
        </button>
      ))}
    </div>
  );
};

export default SelectedItem;
