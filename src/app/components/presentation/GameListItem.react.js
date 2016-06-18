'use strict';

import React from 'react';
import classNames from 'classnames';

import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';

export default function(props) {
  Logger.log('Render: GameListItem', LoggerLevels.PRESENTATION_RENDER);

  const boundClick = props.showDetails(props.game.num);
  const classes = classNames({
    'game': true,
    'highlight': props.isHighlight
  });

  return (
    <div onClick = { boundClick } className = { classes }>
      #{ props.game.num }: { props.game.teams[0].name } vs { props.game.teams[1].name }
    </div>
  );
}
