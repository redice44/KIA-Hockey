'use strict';

import React from 'react';

import DetailsContainer from '../containers/DetailsContainer.react';
import NavigationContainer from '../containers/NavigationContainer.react';
import OverviewContainer from '../containers/OverviewContainer.react';

/* Stylesheets */
require('../../../stylesheets/components/layouts/MainLayout.scss');

export default function(props) {
  return (
    <div id = 'app'>
      <NavigationContainer />
      {props.children}
    </div>
  );
}