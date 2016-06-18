'use strict';

import React from 'react';

import Logger from '../../util/logger';
import LoggerLevels from '../../constants/LoggerConstants';

import TeamFilterContainer from '../containers/TeamFilterContainer.react';
import ScheduleListContainer from '../containers/ScheduleListContainer.react';
import ScheduleItemContainer from '../containers/ScheduleItemContainer.react';

/* Stylesheets */
require('../../../stylesheets/components/layouts/MainLayout.scss');

export default function(props) {
  Logger.log('Rendering: MainLayout', LoggerLevels.PRESENTATION_RENDER);
  
  return (
    <div id = 'app'>
      <TeamFilterContainer />
      <ScheduleListContainer />
      <ScheduleItemContainer />
    </div>
  );
}