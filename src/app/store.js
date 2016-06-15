'use strict';

import { createStore } from 'redux';

const teams = [
  // All: displays all games
  'Lucky Bastards',
  'Dragons',
  'Boozers',
  'Five Holers'
];

const numGames = 50;

let initialState = {
  gameHighlight: 0,
  currentTeam: 'Lucky Bastards',
  games: []
};

for (let i = 0; i < numGames; i++) {
  let home = Math.floor(Math.random() * 4);
  let away = home;
  while (home === away) {
    away = Math.floor(Math.random() * 4);
  }
  initialState.games.push({
    num: i,
    teams: [
      {
        name: teams[home]
      },
      {
        name: teams[away]
      }
    ],
    time: `June ${ i } ${ i % 2 ? '8:45' : '10:00'}`
  });
}

function gameReducer(state = initialState, action) {
  console.log('Action Received', action);
  switch(action.type) {
    case 'ADD_GAME':
      const updatedGames = {
        games: state.games.concat(action.games)
      };
      return Object.assign({}, state, updatedGames);
    case 'CHANGE_HIGHLIGHT':
      return Object.assign({}, state, { gameHighlight: action.num });
    case 'CHANGE_TEAM':
      return Object.assign({}, state, { currentTeam: action.team });
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
