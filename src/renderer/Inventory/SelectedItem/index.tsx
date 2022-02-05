import React from 'react';

import l10n from '~/src/l10n';

import ItemRenderer from '../../Item';
import { ItemRendererProps } from '../../Item/types';

interface SelectedItemProps extends ItemRendererProps {}

const SelectedItem: React.FC<SelectedItemProps> = ({ item }) => (
  <React.Fragment>
    <h3>{l10n[item.l10n.name]}</h3>
    <ItemRenderer item={item} />
    <p>{l10n[item.l10n.description]}</p>
  </React.Fragment>
);

export default SelectedItem;
