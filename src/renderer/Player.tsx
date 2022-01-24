import React from 'react';

import { useEngine } from '../engine';
import { useSelector } from '../store/hooks';
import { selectPlayerName } from '../store/reducers/player';

const Player: React.FC = () => {
  const { trigger } = useEngine();
  const name = useSelector(selectPlayerName);

  return (
    <React.Fragment>
      <p>{name}</p>
      <button onClick={() => trigger('player:name')} type="button">Change name</button>
    </React.Fragment>
  );
};

export default Player;
