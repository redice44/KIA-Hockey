'use strict';

import React from 'react';
import classNames from 'classnames';

export default function(props) {
  const boundClick = props.showDetails(props.game.num);
  const classes = classNames({
    'game': true,
    'highlight': props.isHighlight
  });

  return (
    <div onClick = { boundClick } className = { classes }>
      #{ props.game.num }: <span className = "home">{ props.game.teams[0].name }</span> vs <span className = "away">{ props.game.teams[1].name }</span>
    </div>
  );
}
