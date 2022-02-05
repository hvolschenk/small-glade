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
} from '~/src/store/reducers/outfit';
import { selectWeather } from '~/src/store/reducers/weather';

import './outfit.css';

const weatherConditionsText = (conditions: Weather['conditions']): string => {
  const texts: Record<Weather['conditions'], string> = {
    overcast: l10n.weatherConditionsOvercast,
    snowing: l10n.weatherConditionsSnowing,
    sunny: l10n.weatherConditionsSunny,
  };
  return texts[conditions];
};

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

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: outfit.isOpen })} id="outfit">
      <p>
        {l10n.outfitItemTypeHat}: {l10n[outfit.hat.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypeJacket}: {l10n[outfit.jacket.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypePants}: {l10n[outfit.pants.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypeShirt}: {l10n[outfit.shirt.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypeShoes}: {l10n[outfit.shoes.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypeSocks}: {l10n[outfit.socks.l10n.name]}
      </p>
      <p>
        {l10n.outfitItemTypeUnderwear}: {l10n[outfit.underwear.l10n.name]}
      </p>
      <p>
        {l10n.outfitStatisticProtection}: {protection}
      </p>
      <p>
        {l10n.outfitStatisticWarmth}: {warmth}
      </p>
      <br />
      <p>
        {l10n.weatherTemperature}: {weather.temperature}
      </p>
      <p>
        {l10n.weatherConditions}: {weatherConditionsText(weather.conditions)}
      </p>
    </div>
  );
};

export default Outfit;
