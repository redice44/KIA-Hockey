'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Game from '../presentation/Game.react';

class ScheduleItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      game: props.game
    });
  }

  render() {
    return (
      <div>
        <p>Schedule Item Container (Details)</p>
        <Game game = { this.state.game } />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    game: store.games[store.gameHighlight]
  }
}

export default connect(mapStateToProps)(ScheduleItemContainer);
