import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import l10n from '~/src/l10n';
import tinderNewspaper from '~/src/models/Item/Fire/TinderNewspaper';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const TinderNewspaper: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable tinder-newspaper" style={style} />
      <InteractionOverlay
        actions={[
          {
            action: () => {
              trigger<InteractableHarvestOptions>('interactable:harvest', {
                interactable,
                item: tinderNewspaper,
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

export default TinderNewspaper;
