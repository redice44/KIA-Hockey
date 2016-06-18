'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';
import GameListItem from '../presentation/GameListItem.react';

/* Stylesheets */
require('../../../stylesheets/components/containers/ScheduleListContainer.scss');

class ScheduleListContainer extends React.Component {
  constructor(props) {
    Logger.log('Init: ScheduleListContainer', LoggerLevels.CONTAINER_INIT);

    super(props);
    this.state = updateState(props);
  }

  componentWillReceiveProps(props) {
    Logger.log('Updating: ScheduleListContainer', LoggerLevels.CONTAINER_UPDATE);

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
    Logger.log('Rendering: ScheduleListContainer', LoggerLevels.CONTAINER_RENDER);

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
  Logger.log('Mapping Props: ScheduleListContainer', LoggerLevels.CONTAINER_MAPPING);

  const filteredGames = store.games.filter(game => {
    return store.currentTeam === 'All' ||
      store.currentTeam === game.teams[0].name ||
      store.currentTeam === game.teams[1].name;
  });

  let highlight = store.gameHighlight;

  if (filteredGames.length > 0 && !filteredGames.some(game => game.num === highlight)) {
    if (highlight === undefined) {
      // Update the store
      Store.dispatch({
        type: 'CHANGE_HIGHLIGHT',
        num: filteredGames[0].num
      });
    }
    highlight = filteredGames[0].num;
  }

  return {
    games: filteredGames,
    highlight: highlight
  };
}

export default connect(mapStateToProps)(ScheduleListContainer);
