'use strict';

import React from 'react';
import { connect } from 'react-redux';
 
import Store from '../../store';

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: props.team
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      team: props.team
    });
  }

  render() {
    return (
      <div>
        <p>Navigation Container</p>
        <p>Current Team: { this.state.team }</p>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    team: store.currentTeam
  };
};

export default connect(mapStateToProps)(NavigationContainer);