'use strict';

import React from 'react';
import { connect } from 'react-redux';
 
import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/NavigationContainer.scss');

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
      <div id = 'nav'>
        <p className = 'team'>{ this.state.team }</p>
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