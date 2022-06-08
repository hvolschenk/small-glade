import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import l10n from '~/src/l10n';
import fuelStick from '~/src/models/Item/Fire/FuelStick';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const FuelStick: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable fuel-stick" style={style} />
      <InteractionOverlay
        actions={[
          {
            action: () => {
              trigger<InteractableHarvestOptions>('interactable:harvest', {
                interactable,
                item: fuelStick,
              });
            },
            title: l10n.interactableActionPickUp,
          },
        ]}
        position={interactable.position}
      />
    </React.Fragment>
  );
};

export default FuelStick;
