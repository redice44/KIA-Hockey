'use strict';

const Express = require('express');
const Path = require('path');

const server = Express();

const apiRouter = require('./api/1/router');

server.use(Express.static(Path.join(__dirname, '../../public'), {
  dotfiles: 'ignore',
  index: false
}));

server.use((req, res, next) => {
  console.log(`Request: [GET] ${req.originalUrl}`);
  next();
});

server.use('/api/1/', apiRouter);

server.get('/teams/', (req, res, next) => {
  res.json({
    teams: _getTeams()
  });
});

server.get('/games/', (req, res, next) => {
  res.json({
    games: _getGames()
  });
});

server.get('*', (req, res, next) => {
  res.sendFile(Path.resolve(__dirname, '../index.html'));
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
