'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import GameListItem from '../presentation/GameListItem.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleListContainer.scss');

class ScheduleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(updateState(props));
  }

  // Will Trigger the details display to update
  showDetails(gameNum) {
    return function() {
      Store.dispatch({
        type: 'CHANGE_HIGHLIGHT',
        num: gameNum
      });
    }
  }

  render() {
    return (
      <div id = 'schedule-list'>
        {this.state.games.filter(game => {
          return this.state.currentTeam === 'All' ||
            game.teams[0].name === this.state.currentTeam || 
            game.teams[1].name === this.state.currentTeam;
        }).map(game => {
          return (
            <GameListItem key = { game.num } 
              game = { game } 
              showDetails = { this.showDetails }
              isHighlight = { this.state.highlight === game.num }
            />
          );
        })}
      </div>
    );
  }
}

function updateState(props) {
  return {
    games: props.games,
    currentTeam: props.team,
    highlight: props.highlight
  }
}

const mapStateToProps = function(store) {
  return {
    games: store.games,
    team: store.currentTeam,
    highlight: store.gameHighlight
  }
}

export default connect(mapStateToProps)(ScheduleListContainer);
