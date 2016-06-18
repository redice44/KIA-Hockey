'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';

/* Stylesheets */
require('../../../stylesheets/components/containers/TeamFilterContainer.scss');

class TeamFilterContainer extends React.Component {
  constructor(props) {
    Logger.log('Init: TeamFilterContainer', LoggerLevels.CONTAINER_INIT);

    super(props);
    this.state = _updateState(props);
  }

  componentWillReceiveProps(props) {
    Logger.log('Updating: TeamFilterContainer', LoggerLevels.CONTAINER_UPDATE);

    this.setState(_updateState(props));
  }

  render() {
    Logger.log('Rendering: TeamFilterContainer', LoggerLevels.CONTAINER_RENDER);

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
  Logger.log('Mapping: TeamFilterContainer', LoggerLevels.CONTAINER_MAPPING);

  return {
    teamFilter: store.currentTeam
  };
};

export default connect(mapStateToProps)(TeamFilterContainer);