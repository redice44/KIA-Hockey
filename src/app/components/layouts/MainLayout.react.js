'use strict';

import React from 'react';

import TeamFilterContainer from '../containers/TeamFilterContainer.react';
import ScheduleListContainer from '../containers/ScheduleListContainer.react';
import ScheduleItemContainer from '../containers/ScheduleItemContainer.react';

/* Stylesheets */
require('../../../stylesheets/components/layouts/MainLayout.scss');

export default function(props) {
  return (
    <div id = 'app'>
      <TeamFilterContainer />
      <ScheduleListContainer />
      <ScheduleItemContainer />
    </div>
  );
}