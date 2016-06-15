'use strict';

import React from 'react';
import { connect } from 'react-redux';
 
import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/NavigationContainer.scss');

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = updateState(props);
  }

  changeTeam(e) {
    Store.dispatch({
      type: 'CHANGE_TEAM',
      team: e.target.value
    });
  }

  componentWillReceiveProps(props) {
    this.setState(updateState(props));
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div id = 'nav'>
        <p className = 'team'>{ this.state.team }</p>
        <select value = { this.state.team } onChange = { this.changeTeam }>
          { this.state.teams.map((team, i) => {
            return (
              <option key = { i } 
                value = { team }
              >
                { team }
              </option>
            );
          })}
        </select>
      </div>
    )
  }
}

function updateState(props) {
  return {
    team: props.team,
    teams: props.teams
  };
}

const mapStateToProps = function(store) {
  return {
    team: store.currentTeam,
    teams: store.teams
  };
};

export default connect(mapStateToProps)(NavigationContainer);