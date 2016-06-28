import Express from 'express';
import { MongoClient } from 'mongodb';
import { MONGO_URI } from '../private/mongodb';

const SERVER_PORT = 3000;

let server = Express();

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    return console.error(err);
  }

  server.use((req, res, next) => {
    console.log(`${req.method} Request: ${req.originalUrl}`);
    next();
  });

  // EXTRACT: Extract Server Routes
  server.route('/')
    .get((req, res) => {
      res.send('Hello');
    });

  server.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
  });
});
