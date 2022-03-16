import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { GameStatus } from '~/src/models/Game';
import { useSelector } from '~/src/store/hooks';
import { selectGameStatus } from '~/src/store/reducers/game/selectors';

import Controls from './Controls';
import Inventory from './Inventory';
import Map from './Map';
import Outfit from './Outfit';
import PauseMenu from './PauseMenu';
import Vitals from './Vitals';

import './renderer.css';

const Renderer: React.FC = () => {
  const { trigger } = useEngine();
  const status = useSelector(selectGameStatus);

  React.useEffect(() => {
    // HENDRIK: Load all assets here
    trigger('game:load:done');
  }, [trigger]);

  if (status === GameStatus.GAME_STATUS_ENDED) {
    return (
      <div id="game__status">
        <div>
          <p>{l10n.gameEndedMessage}</p>
        </div>
      </div>
    );
  }

  if (status === GameStatus.GAME_STATUS_LOADING) {
    return (
      <div id="game__status">
        <div>
          <p>{l10n.gameIntroductionLoading}</p>
        </div>
      </div>
    );
  }

  if (status === GameStatus.GAME_STATUS_UNSTARTED) {
    return (
      <div id="game__status">
        <div>
          <p>{l10n.gameIntroductionQuote}</p>
          <button onClick={() => trigger('game:start')} type="button">
            {l10n.gameIntroductionAction}
          </button>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Inventory />
      <Outfit />
      <Map />
      <Vitals />
      <Controls />
      <PauseMenu />
    </React.Fragment>
  );
};

export default Renderer;
