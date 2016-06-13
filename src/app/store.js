'use strict';

import { createStore } from 'redux';

const initialState = {
  games: [
    {
      num: 0,
      teams: [
        {
          name: 'Home Team'
        },
        {
          name: 'Away Team'
        }
      ],
      time: 'Wed 8:45'
    },
    {
      num: 1,
      teams: [
        {
          name: 'Home Team'
        },
        {
          name: 'Away Team'
        }
      ],
      time: 'Wed 10:00'
    }
  ]
};

function gameReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_GAME':
      console.log('Action Received: ADD_GAME');
      const updatedGames = {
        games: state.games.concat(action.games)
      };
      return Object.assign({}, state, updatedGames);
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
