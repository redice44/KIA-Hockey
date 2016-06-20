'use strict';

const Express = require('express');
const Path = require('path');

const server = Express();

const apiRouter = require('./api/1/router');
const serverPort = 3000;

const dbProtocol = 'mongodb';
const dbHost = 'localhost';
const dbPort = '27017';
const database = 'kia-hockey';

const Mongo = require('mongodb').MongoClient;

const url = `${dbProtocol}://${dbHost}:${dbPort}/${database}`;

Mongo.connect(url, (err, db) => {
  server.use(Express.static(Path.join(__dirname, '../../public'), {
    dotfiles: 'ignore',
    index: false
  }));

  server.use((req, res, next) => {
    console.log(`Request: [GET] ${req.originalUrl}`);
    
    // Pass db through
    req.db = db;
    next();
  });

  server.use('/api/1/', apiRouter);

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

  server.listen(serverPort);

  console.log(`Server listening on ${serverPort}`);
});
