'use strict';

import React from 'react';
import Moment from 'moment-timezone';

/* Stylesheets */
require('../../../stylesheets/components/presentation/Game.scss');

export default function(props) {
  console.log('Rendering Game');
  
  return (
    <div id = 'highlight-game'>
      <p className = 'opponent'>{ props.opponent.name }</p>
      <p className = 'time'>{ Moment(props.game.time).format('MMMM Do h:mmA') }</p>
    </div>
  );
};
