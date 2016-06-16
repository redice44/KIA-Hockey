'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Request from 'superagent';

import Store from './store';
import Router from './router';

// Bootstrap App
ReactDOM.render(<Provider store = { Store }>{ Router }</Provider>, document.getElementById('root'));
