import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableCarcassDeerElkHarvestOptions } from '~/src/engine/event/InteractableCarcassDeerElkHarvest';
import l10n from '~/src/l10n';
import { useSelector } from '~/src/store/hooks';
import { selectInventoryWeaponsHarvesting } from '~/src/store/reducers/inventory/selectors';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const CarcassDeerElk: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();
  const weaponsHarvesting = useSelector(selectInventoryWeaponsHarvesting);
  const canHarvest = React.useMemo(() => weaponsHarvesting.length > 0, [weaponsHarvesting]);

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable carcass-deer-elk" style={style} />
      <InteractionOverlay
        actions={[
          {
            action: () => {
              trigger<InteractableCarcassDeerElkHarvestOptions>(
                'interactable:carcass-deer:harvest',
                { carcassDeerElk: interactable },
              );
            },
            disabled: !canHarvest,
            title: l10n.interactableActionHarvest,
          },
        ]}
        position={interactable.position}
      />
    </React.Fragment>
  );
};

export default CarcassDeerElk;
