'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Game from '../presentation/Game.react';

class ScheduleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: props.games,
      count: 2
    };
    this.more = this.more.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      games: props.games
    });
  }

  more() {
    const g = {
      num: this.state.count,
      teams: [
        {
          name: 'Home Team'
        },
        {
          name: 'Away Team'
        }
      ],
      time: 'Wed 8:45'
    };

    Store.dispatch({
      type: 'ADD_GAME',
      games: g
    });

    this.setState({
      count: this.state.count+1
    });
  }

  render() {
    return (
      <div>
      <p onClick={this.more}>Clicky</p>
      {this.state.games.map(game => {
        return (
          <Game key = { game.num } {...game} />
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
