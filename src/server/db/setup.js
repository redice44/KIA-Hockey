'use strict';

const Moment = require('moment-timezone');

const protocol = 'mongodb';
const host = 'localhost';
const port = '27017';
const database = 'kia-hockey';

const Mongo = require('mongodb').MongoClient;

const url = `${protocol}://${host}:${port}/${database}`;

Mongo.connect(url, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log(`Connected to ${url}`);

  _initCollections(db, () => {
    _populateCollections(db, () => {
      db.close().then((result) => {
        console.log(`Closed ${url}`);
      });
    });
  });
});

function _populateCollections(db, cb) {
  const Teams = db.collection('teams');
  const Games = db.collection('games');
  const numGames = 50;

  Teams.insertMany(_makeTeams(), (err, r) => {
    console.log('Inserted Many Teams');
    Games.insertMany(_makeGames(numGames), (err, r) => {
      console.log('Inserted Many Games');
      cb();
    });
  });
}

function _makeGames(numGames) {
  const teams = _makeTeams();
  let games = [];
  let seasonStart = Moment.tz('Jun 15 2016 10:00PM', 'MMM Do YYYY hh:mmA', 'America/New_York');


  for (let i = 0; i < numGames; i++) {    
    let home = Math.floor(Math.random() * teams.length);
    let away = home;
    
    while (home === away) {
      away = Math.floor(Math.random() * teams.length);
    }

    if (i % 2 === 0) {
      seasonStart.add(7, 'days').subtract(1, 'hour').subtract(15, 'minutes');
    } else {
      seasonStart.add(1, 'hour').add(15, 'minutes');
    }

    games.push(_makeGame(i, teams[home].name, teams[away].name, seasonStart.format()));
  }
  return games;
}

function _makeGame(num, home, away, start) {
  return {
    num: num,
    teams: [
      {
        name: home
      },
      {
        name: away
      }
    ],
    time: start
  };
}

function _makeTeams() {
  let teams = [];

  teams.push(_makeTeam('Lucky Bastards'));
  teams.push(_makeTeam('Boozers'));
  teams.push(_makeTeam('Dragons'));
  teams.push(_makeTeam('Five Holers'));

  return teams;
}

function _makeTeam(teamName) {
  return {
    name: teamName
  };
}

function _initCollections(db, cb) {
  db.dropCollection('teams', (err, r) => {
    console.log('Dropped teams');
    db.dropCollection('games', (err, r) => {
      console.log('Dropped games');
      db.createCollection('teams', (err, r) => {
        console.log('Created teams');
        db.createCollection('games', (err, r) => {
          console.log('Created games');
          cb();
        });
      });
    });
  });
}
