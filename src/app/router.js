'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Request from 'superagent';
import Store from './store';
import Logger from './util/logger';
import LoggerLevels from './constants/LoggerConstants';

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

function _updateTeam(nextState) {
  return () => {
    if (nextState.params.hasOwnProperty('team') && 
      nextState.params.team !== undefined) {
      
      const teams = Store.getState().teams;

      // Team is in the team list
      if (teams.find(team => {
        return team.toLowerCase() === nextState.params.team.toLowerCase();
      }) !== undefined) {
        Store.dispatch({
          type: 'CHANGE_TEAM',
          team: nextState.params.team
        });
      } else {
        console.log('Undefined Team', nextState.params.team);

        // Extrapolate
        // Default to All teams
        Store.dispatch({
          type: 'CHANGE_TEAM',
          team: 'All'
        });
      }
    }
  }
}

function _bootstrap(cb = () => {}) {
  Logger.log('Requesting: Bootstrap App', LoggerLevels.AJAX_REQUEST);

  Request.get('/bootstrap/').end((err, res) => {
    if (err) {
      console.log(err);
    }
    Logger.log('Received: Bootstrap App', LoggerLevels.AJAX_SUCCESS);

    Store.dispatch({
      type: 'BOOTSTRAP_APP',
      data: res.body.data
    });

    cb();
  });
}

// Retrieve the list of games for the store if not done so
// Needs to be checked on all routes. 
function getTeams() {
  Logger.log('Requesting: All teams', LoggerLevels.AJAX_REQUEST);

  Request.get('/teams/').end((err, res) => {
    if (err) {
      console.log(err);
    }
    Logger.log('Received: All teams', LoggerLevels.AJAX_SUCCESS);

    Store.dispatch({
      type: 'SET_ALL_TEAMS',
      teams: res.body.teams
    });
  });
}

// Retrieve the list of games for the store if not done so
// Needs to be checked on all routes. 
function getGames() {
  Logger.log('Requesting: All games', LoggerLevels.AJAX_REQUEST);

  Request.get('/games/').end((err, res) => {
    if (err) {
      console.log(err);
    }
    Logger.log('Received: All games', LoggerLevels.AJAX_SUCCESS);

    Store.dispatch({
      type: 'SET_ALL_GAMES',
      games: res.body.games
    });
  });
}

export default (
  <Router history = { browserHistory }>
    <Route component = { MainLayout }>
      <Route path = '/' onEnter = { enterHome } />
      <Route path = '/team/:team' onEnter = { enterTeam } />
    </Route>
  </Router>
);
