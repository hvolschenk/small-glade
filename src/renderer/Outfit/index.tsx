import classnames from 'classnames';
import React from 'react';

import { useEngine } from '../../engine';
import { useSelector } from '../../store/hooks';
import {
  selectOutfit,
  selectOutfitProtection,
  selectOutfitWarmth,
} from '../../store/reducers/outfit';

import './outfit.css';

const Outfit: React.FC = () => {
  const { trigger } = useEngine();
  const outfit = useSelector(selectOutfit);
  const protection = useSelector(selectOutfitProtection);
  const warmth = useSelector(selectOutfitWarmth);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'o') {
        trigger('outfit:toggle');
      }
    },
    [trigger],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: outfit.isOpen })} id="outfit">
      <p>Hat: {outfit.hat.name}</p>
      <p>Jacket: {outfit.jacket.name}</p>
      <p>Pants: {outfit.pants.name}</p>
      <p>Shirt: {outfit.shirt.name}</p>
      <p>Shoes: {outfit.shoes.name}</p>
      <p>Socks: {outfit.socks.name}</p>
      <p>Underwear: {outfit.underwear.name}</p>
      <p>Protection: {protection}</p>
      <p>Warmth: {warmth}</p>
    </div>
  );
};

export default Outfit;
