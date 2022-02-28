import React from 'react';

import { Item } from '~/src/models/Item/types';

import Bearberry from './Consumable/Bearberry';
import BottleWater from './Consumable/BottleWater';
import CrispsTomato from './Consumable/CrispsTomato';
import { ActionsRendererProps } from './types';

const actionsFactory = (item: Item): React.ComponentType<ActionsRendererProps> => {
  const actions: Record<
    Item['category'],
    Record<Item['type'], Record<Item['variant'], React.ComponentType<ActionsRendererProps>>>
  > = {
    clothing: {
      hat: {},
    },
    consumable: {
      berry: {
        bearberry: Bearberry,
      },
      bottle: {
        water: BottleWater,
      },
      crisps: {
        tomato: CrispsTomato,
      },
    },
    fire: {},
  };
  const types = actions[item.category];
  if (types) {
    const variants = types[item.type];
    if (variants) {
      const actionsRenderer = variants[item.variant];
      if (actionsRenderer) {
        return actionsRenderer;
      }
    }
  }
  const NullRenderer: React.FC = () => null;
  return NullRenderer;
};

const Actions: React.FC<ActionsRendererProps> = ({ item }) => {
  const ActionsRenderer = actionsFactory(item);
  return <ActionsRenderer item={item} />;
};

export default Actions;
