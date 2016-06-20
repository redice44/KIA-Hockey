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
    _getTeams(req.db, (teams) => {
      _getGames(req.db, (games) => {
        res.format({
          json: function() {
            res.send({
              data: {
                teams: teams,
                currentTeam: teams[0],
                games: games
              }
            });
          }
        });
      });
    });
  });

router.route('/teams/')
  .get((req, res) => {
    _getTeams(req.db, (teams) => {
      res.format({
        json: function() {
          res.send({
            teams: teams
          });
        }
      });
    });
  });

router.route('/games/')
  .get((req, res) => {
    const Games = req.db.collection('games');

    Games.find().toArray((err, games) => {
      if (err) {
        return console.log(err);
      }

      console.log(`Retrieved ${games.length} games.`);
      res.format({
        json: function() {
          res.send({
            games: games
          });
        }
      });
    });
  });

function _getTeams(db, cb) {
  const Teams = db.collection('teams');

  Teams.find().toArray((err, teams) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Retrieved ${teams.length} teams.`);
    cb(teams.map(t => {
      return t.name;
    }));
  });
}

function _getGames(db, cb) {
  const Games = db.collection('games');

  Games.find().toArray((err, games) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Retrieved ${games.length} games.`);
    cb(games);
  });
}

module.exports = router;