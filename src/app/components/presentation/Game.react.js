'use strict';

import React from 'react';

/* Stylesheets */
require('../../../stylesheets/components/presentation/Game.scss');

export default function(props) {
  return (
    <div id = 'highlight-game'>
      <p className = 'opponent'>{props.opponent.name}</p>
      <p className = 'time'>{props.game.time}</p>
    </div>
  );
};
