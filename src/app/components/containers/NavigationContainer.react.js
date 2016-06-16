'use strict';

import React from 'react';
import { connect } from 'react-redux';
 
import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/NavigationContainer.scss');

class NavigationContainer extends React.Component {
  constructor(props) {
    console.log('===== Init: NavigationContainer');
    super(props);
    this.state = _updateState(props);
  }

  /*
  changeTeam(e) {
    Store.dispatch({
      type: 'CHANGE_TEAM',
      team: e.target.value
    });

    this.updateFilter(e.target.value);
  }
  */

  componentWillReceiveProps(props) {
    console.log('=== Updating: NavigationContainer', props);

    this.setState(_updateState(props));
  }

  render() {
    console.log('=== Rendering: NavigationContainer');

    return (
      <div id = 'nav'>
        <p>{ this.state.team }</p>
      </div>
    )
  }
  /* 
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
  */
}

function _updateState(props) {
  return {
    team: props.team
    //teams: props.teams,
    //games: props.games
  };
}

const mapStateToProps = function(store) {
  console.log('===== Mapping Props: NavigationContainer');

  return {
    team: store.currentTeam
    //teams: store.teams,
    //games: store.games
  };
};

export default connect(mapStateToProps)(NavigationContainer);