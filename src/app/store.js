'use strict';

import { createStore } from 'redux';

const teams = [
  // All: displays all games
  'Lucky Bastards',
  'Dragons',
  'Boozers',
  'Five Holers'
];

let initialState = {
  gameHighlight: 0,
  currentTeam: 'Lucky Bastards',
  games: [],
  teams: teams
};

function gameReducer(state = initialState, action) {
  console.log(`Action Received: `, action);

  switch(action.type) {
    case 'CHANGE_HIGHLIGHT':
      return Object.assign({}, state, { gameHighlight: action.num });
    case 'CHANGE_TEAM':
      return Object.assign({}, state, { currentTeam: action.team });
    case 'SET_ALL_GAMES':
      return Object.assign({}, state, { games: action.games });
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
