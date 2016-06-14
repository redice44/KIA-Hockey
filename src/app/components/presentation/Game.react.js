'use strict';

import React from 'react';

/* Stylesheets */
require('../../../stylesheets/components/presentation/Game.scss');

export default function(props) {
  return (
    <div className = 'game'>
      <p>Game Number: {props.game.num}</p>
      {props.game.teams.map(team => {
        return (
          <p key={team.name}>{team.name}</p>
        );
      })}
      <p>Time: {props.game.time}</p>
    </div>
  );
};
