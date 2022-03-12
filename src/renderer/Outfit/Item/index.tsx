import React from 'react';

import { useEngine } from '~/src/engine';
import { OutfitSelectedTypeUpdateOptions } from '~/src/engine/event/OutfitSelectedTypeUpdate';
import l10n from '~/src/l10n';
import { L10n } from '~/src/l10n/types';
import { Clothing } from '~/src/models/Item/Clothing/types';
import { Outfit } from '~/src/models/Outfit/types';
import Item from '~/src/renderer/Item';
import { useSelector } from '~/src/store/hooks';
import { selectOutfit } from '~/src/store/reducers/outfit/selectors';

import './item.css';

interface OutfitItemProps {
  type: Outfit['selectedType'];
}

const OutfitItem: React.FC<OutfitItemProps> = ({ type }) => {
  const { trigger } = useEngine();
  const outfit = useSelector(selectOutfit);
  const clothing: Clothing = React.useMemo(() => outfit[type], [outfit, type]);
  const typeCapitalised = React.useMemo(
    () => `${type.charAt(0).toUpperCase()}${type.slice(1)}`,
    [type],
  );
  const selectedTypeUpdate = React.useCallback(() => {
    trigger<OutfitSelectedTypeUpdateOptions>('outfit:selected-type:update', { selectedType: type });
  }, [trigger, type]);

  return (
    <button className="outfit-item" onClick={selectedTypeUpdate} type="button">
      <p>{l10n[`outfitItemType${typeCapitalised}` as keyof L10n]}</p>
      <Item item={clothing} />
    </button>
  );
};

export default OutfitItem;
