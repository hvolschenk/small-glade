import React from 'react';

import { Item as ItemInterface } from '~/src/models/Item/types';

import HatBeanieWool from './Clothing/HatBeanieWool';
import JacketDenim from './Clothing/JacketDenim';
import PantsJeans from './Clothing/PantsJeans';
import ShirtCotton from './Clothing/ShirtCotton';
import ShoesSneakers from './Clothing/ShoesSneakers';
import SocksCotton from './Clothing/SocksCotton';
import UnderwearCotton from './Clothing/UnderwearCotton';
import Bearberry from './Consumable/Bearberry';
import BottleWater from './Consumable/BottleWater';
import CrispsTomato from './Consumable/CrispsTomato';
import { ItemRendererProps } from './types';

import './item.css';

const itemFactory = (item: ItemInterface): React.ComponentType<ItemRendererProps> => {
  const items: Record<
    ItemInterface['category'],
    Record<string, Record<string, React.ComponentType<ItemRendererProps>>>
  > = {
    clothing: {
      hat: {
        'beanie-wool': HatBeanieWool,
      },
      jacket: {
        denim: JacketDenim,
      },
      pants: {
        jeans: PantsJeans,
      },
      shirt: {
        cotton: ShirtCotton,
      },
      shoes: {
        sneakers: ShoesSneakers,
      },
      socks: {
        cotton: SocksCotton,
      },
      underwear: {
        cotton: UnderwearCotton,
      },
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
  };
  const types = items[item.category];
  if (types) {
    const variants = types[item.type];
    if (variants) {
      const itemRenderer = variants[item.variant];
      if (itemRenderer) {
        return itemRenderer;
      }
    }
  }
  const NullRenderer: React.FC = () => null;
  return NullRenderer;
};

const InventoryItem: React.FC<ItemRendererProps> = ({ item }) => {
  const ItemRenderer = itemFactory(item);
  return <ItemRenderer item={item} />;
};

export default InventoryItem;
