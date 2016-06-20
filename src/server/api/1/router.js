'use strict';

const Moment = require('moment-timezone');
const Express = require('express');
let router = Express.Router();

// Middleware
// Simple logging
router.use((req, res, next) => {
  console.log(`Accessing API v1 at ${req.originalUrl}`);
  next();
});

// /api/1/
router.route('/')
  .get((req, res) => {
    const teams = _getTeams();
    const currentTeam = teams[0];
    const games = _getGames();

    res.json({
      data: {
        teams: teams,
        currentTeam: currentTeam,
        games: games
      }
    });
  });

router.route('/teams/')
  .get((req, res,) => {
    res.json({
      teams: _getTeams()
    });
  });

router.route('/games/')
  .get((req, res) => {
    res.json({
      games: _getGames()
    });
  });

function _getTeams() {
  // Validate
  return [
    // All: displays all games
    'Lucky Bastards',
    'Dragons',
    'Boozers',
    'Five Holers'
  ];
}

function _getGames() {
  const numGames = 50;

  return _generateGames(numGames);
}

function _generateGames(numGames) {
  const teams = _getTeams();

  let games = [];
  let gameTime = Moment.tz('Jun 15 2016 10:00PM', 'MMM Do YYYY hh:mmA', 'America/New_York');

  for (let i = 0; i < numGames; i++) {
    let home = Math.floor(Math.random() * teams.length);
    let away = home;
    
    while (home === away) {
      away = Math.floor(Math.random() * teams.length);
    }

    if (i % 2 === 0) {
      gameTime.add(7, 'days').subtract(1, 'hour').subtract(15, 'minutes');
    } else {
      gameTime.add(1, 'hour').add(15, 'minutes');
    }

    games.push({
      num: i,
      teams: [
        {
          name: teams[home]
        },
        {
          name: teams[away]
        }
      ],
      time: gameTime.clone()
    });
  }

  return games;
}

module.exports = router;