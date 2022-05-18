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

import FullScreenMenu from '../components/FullScreenMenu';
import Item from './Item';
import SelectedItem from './SelectedItem';

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
    <FullScreenMenu
      footer={
        <React.Fragment>
          {l10n.outfitStatisticProtection}: {protection}.&nbsp;
          {l10n.outfitStatisticWarmth}: {warmth}
          <br />
          {l10n.weatherTemperature}: {weather.temperature}.&nbsp;
          {l10n.weatherConditions}: {conditionsText}
        </React.Fragment>
      }
      isOpen={outfit.isOpen}
      list={
        <React.Fragment>
          <Item type="hat" />
          <Item type="shirt" />
          <Item type="jacket" />
          <Item type="underwear" />
          <Item type="pants" />
          <Item type="socks" />
          <Item type="shoes" />
        </React.Fragment>
      }
      onClose={() => {
        trigger('outfit:toggle');
      }}
      selected={<SelectedItem />}
      title={l10n.outfitTitle}
    />
  );
};

export default Outfit;
