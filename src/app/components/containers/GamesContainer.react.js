'use strict';

import React from 'react';

import Games from '../presentation/Games.react';

class GamesContainer extends React.Component {
  constructor(props) {
    super(props);
    if (props.params.hasOwnProperty('team')) {
      this.state = {
        name: props.params.team
      };    
    }

    if (props.params.hasOwnProperty('game')) {
      this.state = {
        name: props.params.game
      };
    }

  }

  componentWillReceiveProps(props) {
    if (props.params.hasOwnProperty('team')) {
      this.setState({
        name: props.params.team
      });
    }

    if (props.params.hasOwnProperty('game')) {
      this.setState({
        name: props.params.game
      });
    }
  }

  render() {
    return (
      <Games name={this.state.name} />
    );
  }
}

export default GamesContainer;
