import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import l10n from '~/src/l10n';
import bearBerry from '~/src/models/Item/Consumable/Bearberry';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const BushBearberry: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable bush-bearberry" style={style} />
      <InteractionOverlay
        actions={[
          {
            action: () => {
              trigger<InteractableHarvestOptions>('interactable:harvest', {
                interactable,
                item: bearBerry,
              });
            },
            title: l10n.interactableActionHarvest,
          },
        ]}
        position={interactable.position}
      />
    </React.Fragment>
  );
};

export default BushBearberry;
