import React from 'react';
import { useSelector } from 'react-redux';

import l10n from '~/src/l10n';
import { selectInventorySelectedItem } from '~/src/store/reducers/inventory/selectors';

import ItemRenderer from '../../Item';
import Actions from './Actions';

const SelectedItem: React.FC = () => {
  const item = useSelector(selectInventorySelectedItem);

  if (!item) {
    return <p>{l10n.inventoryMessageNoItemSelected}</p>;
  }

  return (
    <React.Fragment>
      <h3>{l10n[item.l10n.name]}</h3>
      <ItemRenderer item={item} />
      <p>{l10n[item.l10n.description]}</p>
      <Actions item={item} />
    </React.Fragment>
  );
};

export default SelectedItem;
