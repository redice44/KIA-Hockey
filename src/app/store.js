'use strict';

import { createStore } from 'redux';
let Moment = require('moment-timezone');

let gameTime = Moment.tz('Jun 15 2016 10:00PM', 'MMM Do YYYY hh:mmA', 'America/New_York');

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
  games: [],
  teams: teams
};

for (let i = 0; i < numGames; i++) {
  let home = Math.floor(Math.random() * 4);
  let away = home;
  
  while (home === away) {
    away = Math.floor(Math.random() * 4);
  }

  if (i % 2 === 0) {
    gameTime.add(7, 'days').subtract(1, 'hour').subtract(15, 'minutes');
  } else {
    gameTime.add(1, 'hour').add(15, 'minutes');
  }
  console.log(`${i}: ${gameTime.format()}`);

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
    time: gameTime.clone()
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
