import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import l10n from '~/src/l10n';
import tinderNewspaper from '~/src/models/Item/Fire/TinderNewspaper';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerPosition } from '~/src/store/reducers/player/selectors';
import positionsEqual from '~/src/utilities/positionsEqual';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const TinderNewspaper: React.FC<InteractableRendererProps> = ({ interactable, style }) => {
  const { trigger } = useEngine();
  const playerPosition = useSelector(selectPlayerPosition);

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable tinder-newspaper" style={style} />
      {positionsEqual(playerPosition, interactable.position) && (
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
        />
      )}
    </React.Fragment>
  );
};

export default TinderNewspaper;
