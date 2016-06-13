'use strict';

import React from 'react';

import DetailsContainer from '../containers/DetailsContainer.react';
import NavigationContainer from '../containers/NavigationContainer.react';
import OverviewContainer from '../containers/OverviewContainer.react';

export default function(props) {
  return (
    <div>
      <NavigationContainer />
      {props.children}
    </div>
  );
}