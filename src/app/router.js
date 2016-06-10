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

/*

import Home from './components/presentation/Home.react';
import Standings from './components/presentation/Standings.react';
import GamesContainer from './components/containers/GamesContainer.react';
import Games from './components/presentation/Games.react';
import TeamContainer from './components/containers/TeamContainer.react';
import Team from './components/presentation/Team.react';
import PlayerContainer from './components/containers/PlayerContainer.react';


      <Route path = "standings" component = {Standings} />
      <Route path = "schedule(/:team)" component = {GamesContainer} />
      <Route path = "team(/:team)" component = {TeamContainer} />
      <Route path = "games(/:game)" component = {GamesContainer} />
      <Route path = "team/:team/:player" component = {PlayerContainer} />
*/