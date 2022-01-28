import React from 'react';

import InteractionOverlay from './InteractionOverlay';
import { InteractableRendererProps } from './types';
import { useEngine } from '../../engine';
import { InteractableHarvestOptions } from '../../engine/event/InteractableHarvest';
import bearBerry from '../../models/Item/Bearberry';
import { useSelector } from '../../store/hooks';
import { selectPlayerPosition } from '../../store/reducers/player';
import positionsEqual from '../../utilities/positionsEqual';

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
