'use strict';

import React from 'react';

/* Stylesheets */
require('../../../stylesheets/components/presentation/Game.scss');

export default function(props) {
  return (
    <div id = 'highlight-game'>
      <p className = 'opponent'>{props.game.teams[0].name}</p>
      <p className = 'time'>{props.game.time}</p>
    </div>
  );
};
