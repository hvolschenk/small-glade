import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import l10n from '~/src/l10n';
import starterMatches from '~/src/models/Item/Fire/StarterMatches';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const StarterMatches: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable starter-matches" style={style} />
      <InteractionOverlay
        actions={[
          {
            action: () => {
              trigger<InteractableHarvestOptions>('interactable:harvest', {
                interactable,
                item: starterMatches,
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

export default StarterMatches;
