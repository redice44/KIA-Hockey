'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Request from 'superagent';

import Store from './store';
import Router from './router';
import Logger from './util/logger';
import LoggerLevels from './constants/LoggerConstants';

Logger.setLevel(LoggerLevels.DETAILS);

// Bootstrap App
ReactDOM.render(<Provider store = { Store }>{ Router }</Provider>, document.getElementById('root'));
