'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/TeamFilterContainer.scss');

class TeamFilterContainer extends React.Component {
  constructor(props) {
    console.log('===== Init: TeamFilterContainer', props);
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
    console.log('=== Updating: TeamFilterContainer', props);

    this.setState(_updateState(props));
  }

  render() {
    console.log('=== Rendering: TeamFilterContainer');

    return (
      <div id = 'team-filter'>
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
  };
}

const mapStateToProps = function(store) {
  console.log('===== Mapping Props: TeamFilterContainer');

  return {
    team: store.currentTeam
  };
};

export default connect(mapStateToProps)(TeamFilterContainer);