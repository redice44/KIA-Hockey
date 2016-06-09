'use strict';

import React from 'react';

import Player from '../presentation/Player.react';

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.params.player,
      team: props.params.team
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      num: props.params.player,
      team: props.params.team
    });
  }

  render() {
    return (
      <Player team={this.state.team} num={this.state.num} />
    );
  }
}

export default PlayerContainer;
