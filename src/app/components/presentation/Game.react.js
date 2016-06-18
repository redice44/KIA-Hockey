'use strict';

import React from 'react';
import Moment from 'moment-timezone';

import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';

/* Stylesheets */
require('../../../stylesheets/components/presentation/Game.scss');

export default function(props) {
  Logger.log('Rendering: Game', LoggerLevels.PRESENTATION_RENDER);
  
  return (
    <div id = 'highlight-game'>
      <p className = 'opponent'>{ props.opponent.name }</p>
      <p className = 'time'>{ Moment(props.game.time).format('MMMM Do h:mmA') }</p>
    </div>
  );
};
