# Data Models

### Projected Season Model - Pre-MVP

Using MongoDB

- Season
  - Name
  - Start (Unique in db)
  - Games
    - Start (Unique in season)
    - Teams: 0: home, 1: away
      - Team Name
      - Goals
        - Goal scorer
        - Primary assist
        - Secondary assist
        - Period scored
        - Time in period
      - Penalties
        - Player number
        - Start time of penalty
        - Penalty name
        - Duration of penalty
  - Teams
    - Name (Unique in season)
    - Players
      - Number (Unique in team)
      - Name
      - Total stats in season
        - Games played
        - Goals
        - Assists
        - Points 
        - PIMs
        - GWG
        - PPG
        - SHG

### Thoughts

##### Season distinction

Would it be useful to have each season separate?
- Logistically that's how we kind of think about it. Teams and players cross over seasons, but games do not. 
- It would allow quicker queries on MongoDB. 
- It would allow having teams be related to a season

Another option is to have a piece of information indicating the first and last game of the season.
- This causes querying of a lot of games each time games are accessed. Could probably optimize through indexing on game date. 

##### Populating player's stats and game data location

Game by game stats? 
- Would have to pull data from all games that the team has played

Should total stats be calculated or stored?
- Perhaps stored since it is accessed often and small compared to game data. 

Where should the game data be held?
- Needs to be accessed on a game basis and for player stats
- Perhaps for simplicity the player should just hold the totals that are modified at the time of new game data

