'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/MainLayout.react';

export default (
  <Router history = {browserHistory}>
    <Route component = {MainLayout}>
      <Route path = "/" />
    </Route>
  </Router>
);
