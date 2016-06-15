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
    console.log('Updating: ScheduleListContainer', props);

    this.setState(updateState(props));
  }

  // Will Trigger the details display to update
  showDetails(gameNum) {
    return function() {
      Store.dispatch({
        type: 'CHANGE_HIGHLIGHT',
        num: gameNum
      });
    };
  }

  render() {
    console.log('Rendering: ScheduleListContainer');

    return (
      <div id = 'schedule-list'>
        { this.state.games.map(game=> {
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
    highlight: props.highlight
  }
}

const mapStateToProps = function(store) {
  return {
    games: store.filteredGames,
    highlight: store.gameHighlight
  }
}

export default connect(mapStateToProps)(ScheduleListContainer);
