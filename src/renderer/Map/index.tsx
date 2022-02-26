/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useSelector } from '~/src/store/hooks';
import { selectMap } from '~/src/store/reducers/map/selectors';

import Player from '../Player';
import Animals from './Animals';
import Interactables from './Interactables';
import Tiles from './Tiles';

import './map.css';

const Map: React.FC = () => {
  const map = useSelector(selectMap);

  return (
    <div id="map">
      <Player />
      <Animals animals={map.animals} />
      <Interactables interactables={map.interactables} />
      <Tiles tiles={map.tiles} />
    </div>
  );
};

export default Map;
