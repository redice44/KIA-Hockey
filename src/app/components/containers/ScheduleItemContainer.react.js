'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Game from '../presentation/Game.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleItemContainer.scss');

class ScheduleItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(updateState(props));
  }

  render() {
    console.log('Rendering: ScheduleItemContainer');

    const opponent = this.state.game.teams[0].name === this.state.team ? 1 : 0;

    return (
      <div id = 'schedule-item'>
        <Game 
          game = { this.state.game } 
          opponent = { this.state.game.teams[opponent] }
        />
      </div>
    );
  }
}

function updateState(props) {
  return {
    game: props.game,
    team: props.team
  };
}

const mapStateToProps = function(store) {
  return {
    game: store.games[store.gameHighlight],
    team: store.currentTeam
  }
}

export default connect(mapStateToProps)(ScheduleItemContainer);
