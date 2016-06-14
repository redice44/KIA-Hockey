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

    this.changeTeam = this.changeTeam.bind(this);
  }

  changeTeam(team) {
    return function() {
      console.log(team);
      Store.dispatch({
        type: 'CHANGE_TEAM',
        team: team
      });
    }
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
        <p onClick = { this.changeTeam("Lucky Bastards") }>Lucky Bastards</p>
        <p onClick = { this.changeTeam("Dragons") }>Dragons</p>
        <p onClick = { this.changeTeam("Five Holers") }>Five Holers</p>
        <p onClick = { this.changeTeam("Boozers") }>Boozers</p>
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