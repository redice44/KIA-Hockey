'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Game from '../presentation/Game.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleItemContainer.scss');

class ScheduleItemContainer extends React.Component {
  constructor(props) {
    console.log('===== Init: ScheduleItemContainer', props);

    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    console.log('=== Updating: ScheduleItemContainer', props);

    this.setState(updateState(props));
  }

  render() {
    console.log('=== Rendering: ScheduleItemContainer');

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
        <div></div>
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
  console.log('===== Mapping Props: ScheduleItemContainer');
  return {
    game: store.games[store.gameHighlight],
    team: store.currentTeam
  }
}

export default connect(mapStateToProps)(ScheduleItemContainer);
