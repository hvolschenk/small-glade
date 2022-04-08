import React from 'react';

import { useSelector } from '~/src/store/hooks';
import { selectGameTurnsSurvived } from '~/src/store/reducers/game/selectors';

import './turns-survived.css';

const TurnsSurvived: React.FC = () => {
  const turnsSurvived = useSelector(selectGameTurnsSurvived);
  return <p id="turns-survived">{turnsSurvived}</p>;
};

export default TurnsSurvived;
