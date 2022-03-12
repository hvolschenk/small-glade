import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { Weather } from '~/src/models/Weather/types';
import { useSelector } from '~/src/store/hooks';
import {
  selectOutfit,
  selectOutfitProtection,
  selectOutfitWarmth,
} from '~/src/store/reducers/outfit/selectors';
import { selectWeather } from '~/src/store/reducers/weather/selectors';

import Item from './Item';
import SelectedItem from './SelectedItem';

import './outfit.css';

const Outfit: React.FC = () => {
  const { trigger } = useEngine();
  const outfit = useSelector(selectOutfit);
  const protection = useSelector(selectOutfitProtection);
  const warmth = useSelector(selectOutfitWarmth);
  const weather = useSelector(selectWeather);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'o') {
        trigger('outfit:toggle');
      }
    },
    [trigger],
  );

  const conditionsText = React.useMemo(() => {
    const texts: Record<Weather['conditions'], string> = {
      overcast: l10n.weatherConditionsOvercast,
      snowing: l10n.weatherConditionsSnowing,
      sunny: l10n.weatherConditionsSunny,
    };
    return texts[weather.conditions];
  }, [weather]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: outfit.isOpen })} id="outfit">
      <div id="outfit__header">
        <h1>Outfit</h1>
        <button
          id="outfit__close"
          onClick={() => {
            trigger('outfit:toggle');
          }}
          type="button"
        >
          X
        </button>
      </div>
      <div id="outfit__content">
        <div id="outfit__items">
          <Item type="hat" />
          <Item type="shirt" />
          <Item type="jacket" />
          <Item type="underwear" />
          <Item type="pants" />
          <Item type="socks" />
          <Item type="shoes" />
        </div>
        <div id="outfit__selected">
          <SelectedItem />
        </div>
      </div>
      <div id="outfit__footer">
        {l10n.outfitStatisticProtection}: {protection}.&nbsp;
        {l10n.outfitStatisticWarmth}: {warmth}
        <br />
        {l10n.weatherTemperature}: {weather.temperature}.&nbsp;
        {l10n.weatherConditions}: {conditionsText}
      </div>
    </div>
  );
};

export default Outfit;
