'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import GameListItem from '../presentation/GameListItem.react';

class ScheduleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: props.games
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      games: props.games
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
        {this.state.games.map(game => {
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
    games: store.games
  }
}

export default connect(mapStateToProps)(ScheduleListContainer);
