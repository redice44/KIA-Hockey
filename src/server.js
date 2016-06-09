'use strict';

const Express = require('express');
const Path = require('path');

const server = Express();

server.use(Express.static(Path.join(__dirname, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

server.get('*', (req, res, next) => {
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
