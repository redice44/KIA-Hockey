'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Request from 'superagent';

import Store from './store';
import Router from './router';

// Bootstrap App
console.log('app.js');
Request.get('/games/')
  .end((err, res) => {
    if (err) {
      console.log(err);
    }

    Store.dispatch({
      type: 'SET_ALL_GAMES',
      games: res.body.games
    });
});

ReactDOM.render(<Provider store={Store}>{Router}</Provider>, document.getElementById('root'));