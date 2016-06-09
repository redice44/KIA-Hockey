'use strict';

import React from 'react';

import Team from '../presentation/Team.react';

class TeamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.params.team
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      name: props.params.team
    });
  }

  render() {
    return (
      <Team name={this.state.name} />
    );
  }
}

export default TeamContainer;
