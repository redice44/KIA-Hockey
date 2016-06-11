'use strict';

import { createStore } from 'redux';

const initialState = {
  game: 0
};

function gameReducer(state = initialState, action) {
  switch(action.type) {
    case 'change':
      return Object.assign({}, state, { game: state.game + 1});
      break;
    case 'set':
      return Object.assign({}, state, { game: action.val });
      break;
  }

  return state;
}

const Store = createStore(gameReducer);

export default Store;
