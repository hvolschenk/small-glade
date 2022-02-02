import React from 'react';

import { useEngine } from '~/src/engine';
import { InteractableHarvestOptions } from '~/src/engine/event/InteractableHarvest';
import bearBerry from '~/src/models/Item/Bearberry';
import { useSelector } from '~/src/store/hooks';
import { selectPlayerPosition } from '~/src/store/reducers/player';
import positionsEqual from '~/src/utilities/positionsEqual';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';

const BushBearberry: React.FC<InteractableRendererProps> = ({ interactable, position, style }) => {
  const { trigger } = useEngine();
  const playerPosition = useSelector(selectPlayerPosition);

  if (interactable.hasBeenInteractedWith) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="interactable bush-bearberry" style={style} />
      {positionsEqual(playerPosition, position) && (
        <InteractionOverlay
          actions={[
            {
              action: () => {
                trigger<InteractableHarvestOptions>('interactable:harvest', {
                  item: bearBerry,
                  interactable,
                  position,
                });
              },
              title: 'Harvest',
            },
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default BushBearberry;
