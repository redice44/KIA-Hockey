'use strict';

import React from 'react';

import Store from '../../store';

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);

    Store.dispatch({
      type: 'set',
      val: 10
    });
  }

  render() {
    return (
      <p>Overview Container</p>
    );
  }
}

export default OverviewContainer;