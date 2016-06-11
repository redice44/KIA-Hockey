'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Store from '../../store';
import Game from '../presentation/Game.react';

class DetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    this.inc = this.inc.bind(this);
  }

  inc() {
    console.log('Dispatching');
    Store.dispatch({
      type: 'change'
    });
  }

  componentWillReceiveProps(props) {
    console.log('updating');
    this.setState({
      name: props.name
    });
  }

  render() {
    return (
      <div>
        <p>Details Container</p>
        <Game inc={this.inc} name={this.state.name} />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    name: store.game
  };
}

export default connect(mapStateToProps)(DetailsContainer);