'use strict';

import { createStore } from 'redux';

const initialState = {
  gameHighlight: 0,
  currentTeam: 'Lucky Bastards',
  games: [
    {
      num: 0,
      teams: [
        {
          name: 'Lucky Bastards'
        },
        {
          name: 'Dragons'
        }
      ],
      time: 'Wed June 15 8:45'
    }, {
      num: 1,
      teams: [
        {
          name: 'Boozers'
        },
        {
          name: 'Five Holers'
        }
      ],
      time: 'Wed June 15 10:00'
    }, {
      num: 2,
      teams: [
        {
          name: 'Boozers'
        },
        {
          name: 'Lucky Bastards'
        }
      ],
      time: 'Wed June 22 8:45'
    },
    {
      num: 3,
      teams: [
        {
          name: 'Dragons'
        },
        {
          name: 'Five Holers'
        }
      ],
      time: 'Wed June 22 10:00'
    }

  ]
};

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
