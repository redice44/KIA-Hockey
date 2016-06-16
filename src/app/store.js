'use strict';

import { createStore } from 'redux';

let initialState = {
  _stale: true,
  gameHighlight: 0,
  currentTeam: 'Lucky Bastards',
  games: [],
  teams: []
};

function gameReducer(state = initialState, action) {
  console.log(`Action Received: `, action);

  switch(action.type) {
    case 'CHANGE_HIGHLIGHT':
      return Object.assign({}, state, { gameHighlight: action.num });
    case 'CHANGE_TEAM':
      return Object.assign({}, state, { currentTeam: action.team });
    case 'SET_ALL_GAMES':
      return Object.assign({}, state, { games: action.games, _stale: false });
    case 'SET_ALL_TEAMS':
      return Object.assign({}, state, { teams: action.teams, _stale: false });
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
