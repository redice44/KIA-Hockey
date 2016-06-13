'use strict';

import React from 'react';

export default function(props) {
  const boundClick = props.showDetails(props.game.num);
  return (
    <div onClick = { boundClick } className = 'game-preview'>
      <span className = "home">{ props.game.teams[0].name }</span> vs <span className = "away">{ props.game.teams[1].name }</span>
    </div>
  );
}
