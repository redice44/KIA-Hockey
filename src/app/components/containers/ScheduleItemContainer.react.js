'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';
import Game from '../presentation/Game.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleItemContainer.scss');

class ScheduleItemContainer extends React.Component {
  constructor(props) {
    Logger.log('Init: ScheduleItemContainer', LoggerLevels.CONTAINER_INIT);

    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    Logger.log('Updating: ScheduleItemContainer', LoggerLevels.CONTAINER_UPDATE);

    this.setState(updateState(props));
  }

  render() {
    Logger.log('Rendering: ScheduleItemContainer', LoggerLevels.CONTAINER_RENDER);

    if (this.state.hasOwnProperty('game') && this.state.game !== undefined) {
      const opponent = this.state.game.teams[0].name === this.state.team ? 1 : 0;

      return (
        <div id = 'schedule-item'>
          <Game 
            game = { this.state.game } 
            opponent = { this.state.game.teams[opponent] }
          />
        </div>
      );
    } else {
      return (
        <div id = 'schedule-item'></div>
      );
    }
  }
}

function updateState(props) {
  return {
    game: props.game,
    team: props.team
  };
}

const mapStateToProps = function(store) {
  Logger.log('Mapping: ScheduleItemContainer', LoggerLevels.CONTAINER_MAPPING);

  return {
    game: store.games[store.gameHighlight],
    team: store.currentTeam
  }
}

export default connect(mapStateToProps)(ScheduleItemContainer);
