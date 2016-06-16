'use strict';

const Express = require('express');
const Path = require('path');
const Moment = require('moment-timezone');

const server = Express();


let gameTime = Moment.tz('Jun 15 2016 10:00PM', 'MMM Do YYYY hh:mmA', 'America/New_York');

const teams = [
  // All: displays all games
  'Lucky Bastards',
  'Dragons',
  'Boozers',
  'Five Holers'
];

const numGames = 50;

let initialState = {
  gameHighlight: 0,
  currentTeam: 'Lucky Bastards',
  games: [],
  filteredGames: [],
  teams: teams
};

for (let i = 0; i < numGames; i++) {
  let home = Math.floor(Math.random() * 4);
  let away = home;
  
  while (home === away) {
    away = Math.floor(Math.random() * 4);
  }

  if (i % 2 === 0) {
    gameTime.add(7, 'days').subtract(1, 'hour').subtract(15, 'minutes');
  } else {
    gameTime.add(1, 'hour').add(15, 'minutes');
  }

  initialState.games.push({
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

server.use(Express.static(Path.join(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

server.get('/games/', (req, res, next) => {
  console.log(`Request: [GET] ${req.originalUrl}`);
  
  res.json({
    games: initialState.games
  });
});

server.get('/', (req, res, next) => {
  console.log(`Request: [GET] ${req.originalUrl}`);

  res.sendFile(Path.resolve(__dirname, 'index.html'));
});

server.use((req, res, next) => {
  console.log(`404: ${req.originalURL}`);
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

server.use((err, req, res, next) => {
  res.sendStatus(err.status || 500);
});

const port = 3000;
server.listen(port);

console.log(`Server listening on ${port}`);
