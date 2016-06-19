'use strict';

import { createStore } from 'redux';

import Logger from './util/logger';
import LoggerLevels from './constants/LoggerConstants';
import Actions from './constants/ActionConstants';

let initialState = {
  _stale: true,
  currentTeam: 'All',
  games: [],
  teams: []
};

function gameReducer(state = initialState, action) {
  Logger.log(`Action Received: ${action.type}`, LoggerLevels.ACTION_DISPATCH);

  switch(action.type) {
    case Actions.CHANGE_HIGHLIGHT:
      return Object.assign({}, state, { gameHighlight: action.num });
    case Actions.CHANGE_TEAM:
      return Object.assign({}, state, { currentTeam: action.team });
    case Actions.BOOTSTRAP_APP:
      return Object.assign({}, state, {
        teams: action.data.teams,
        games: action.data.games,
        currentTeam: action.data.currentTeam,
        _stale: false
      });
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
