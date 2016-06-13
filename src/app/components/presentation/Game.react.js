'use strict';

import React from 'react';

export default function(props) {
  return (
    <div>
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
