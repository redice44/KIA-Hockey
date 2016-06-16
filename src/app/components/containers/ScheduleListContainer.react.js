'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import GameListItem from '../presentation/GameListItem.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleListContainer.scss');

class ScheduleListContainer extends React.Component {
  constructor(props) {
    console.log('===== Init: ScheduleListContainer', props);

    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    console.log('=== Updating: ScheduleListContainer', props);

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
    console.log('=== Rendering: ScheduleListContainer');

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
  console.log('===== Mapping Props: ScheduleListContainer');

  const filteredGames = store.games.filter(game => {
    return store.currentTeam === 'All' ||
      store.currentTeam === game.teams[0].name ||
      store.currentTeam === game.teams[1].name;
  });

  let highlight = store.gameHighlight;

  if (filteredGames.length > 0 && !filteredGames.some(game => game.num === highlight)) {
    highlight = filteredGames[0].num;
  }

  return {
    games: filteredGames,
    highlight: highlight
  };
}

export default connect(mapStateToProps)(ScheduleListContainer);
