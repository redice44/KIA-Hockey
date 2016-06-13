'use strict';

import React from 'react';

export default function(props) {
  return (
    <div>
      <p>Game Number: {props.num}</p>
      {props.teams.map(team => {
        return (
          <p key={team.name}>{team.name}</p>
        );
      })}
      <p>Time: {props.time}</p>
    </div>
  );
};
