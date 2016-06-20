'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Request from 'superagent';
import Store from './store';
import Logger from './util/logger';
import LoggerLevels from './constants/LoggerConstants';
import { bootstrapApp, changeTeam } from './actions/DispatchActions';

import MainLayout from './components/layouts/MainLayout.react';

function enterHome(nextState) {
  Logger.log(`Entering Route: ${nextState.location.pathname}`, LoggerLevels.ROUTE_ENTER);

  if (Store.getState()._stale) {
    _bootstrap();
  }
}

function enterTeam(nextState) {
  Logger.log(`Entering Route: ${nextState.location.pathname}`, LoggerLevels.ROUTE_ENTER);

  if (Store.getState()._stale) {
    _bootstrap(_updateTeam(nextState));
  }
}

function _bootstrap(cb = () => {}) {
  Logger.log('Requesting: Bootstrap App', LoggerLevels.AJAX_REQUEST);

  Request.get('/api/1/').end((err, res) => {
    if (err) {
      console.log(err);
    }
    Logger.log('Received: Bootstrap App', LoggerLevels.AJAX_SUCCESS);

    bootstrapApp(res.body.data);
    cb();
  });
}

function _updateTeam(nextState) {
  return () => {
    if (nextState.params.hasOwnProperty('team') && 
      nextState.params.team !== undefined) {
      
      const teams = Store.getState().teams;

      // Refactor
      // Team is in the team list
      if (teams.find(team => {
        return team.toLowerCase() === nextState.params.team.toLowerCase();
      }) !== undefined) {
        changeTeam(nextState.params.team);
      } else {
        Logger.log(`Undefined Team: ${nextState.params.team}`, ERR_UNKNOWN_TEAM);

        // Default to All teams
        changeTeam('All');
      }
    }
  }
}

export default (
  <Router history = { browserHistory }>
    <Route component = { MainLayout }>
      <Route path = '/' onEnter = { enterHome } />
      <Route path = '/team/:team' onEnter = { enterTeam } />
    </Route>
  </Router>
);
