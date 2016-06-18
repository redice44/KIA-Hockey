'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/TeamFilterContainer.scss');

class TeamFilterContainer extends React.Component {
  constructor(props) {
    console.log('===== Init: TeamFilterContainer', props);

    super(props);
    this.state = _updateState(props);
  }

  componentWillReceiveProps(props) {
    console.log('=== Updating: TeamFilterContainer', props);

    this.setState(_updateState(props));
  }

  render() {
    console.log('=== Rendering: TeamFilterContainer');

    return (
      <div id = 'team-filter'>
        <p>{ this.state.teamFilter }</p>
      </div>
    )
  }
}

function _updateState(props) {
  return {
    teamFilter: props.teamFilter
  };
}

const mapStateToProps = function(store) {
  console.log('===== Mapping Props: TeamFilterContainer');

  return {
    teamFilter: store.currentTeam
  };
};

export default connect(mapStateToProps)(TeamFilterContainer);