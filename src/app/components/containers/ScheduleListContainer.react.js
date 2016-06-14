'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import GameListItem from '../presentation/GameListItem.react';

class ScheduleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: props.games,
      currentTeam: props.team
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      games: props.games,
      currentTeam: props.team
    });
  }

  // Will Trigger the details display to update
  showDetails(gameNum) {
    return function() {
      Store.dispatch({
        type: 'CHANGE_HIGHLIGHT',
        num: gameNum
      });
    }
  }

  render() {
    return (
      <div>
        <p>Schedule List Container (overview)</p>
        {this.state.games.filter(game => {
          return this.state.currentTeam === 'All' ||
            game.teams[0].name === this.state.currentTeam || 
            game.teams[1].name === this.state.currentTeam;
        }).map(game => {
          return (
            <GameListItem key = { game.num } game = {game} showDetails = { this.showDetails } />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    games: store.games,
    team: store.currentTeam
  }
}

export default connect(mapStateToProps)(ScheduleListContainer);
