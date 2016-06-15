'use strict';

import React from 'react';
import { connect } from 'react-redux';
 
import Store from '../../store';

/* Stylesheets */
require('../../../stylesheets/components/containers/NavigationContainer.scss');

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = updateState(props);
    this.updateFilter = this.updateFilter.bind(this);
    this.changeTeam = this.changeTeam.bind(this);

    this.updateFilter();
  }

  changeTeam(e) {
    Store.dispatch({
      type: 'CHANGE_TEAM',
      team: e.target.value
    });

    this.updateFilter(e.target.value);
  }

  updateFilter(team = this.state.team) {
    let filtered = this.state.games.filter(game => {
      return team === 'All' ||
        game.teams[0].name === team ||
        game.teams[1].name === team;  
    });

    Store.dispatch({
      type: 'UPDATE_FILTER',
      filteredGames: filtered
    });

    Store.dispatch({
      type: 'CHANGE_HIGHLIGHT',
      num: filtered[0].num
    });
  }

  componentWillReceiveProps(props) {
    console.log('Updating: NavigationContainer', props);
    this.setState(updateState(props));
  }

  render() {
    return (
      <div id = 'nav'>
        <p className = 'team'>{ this.state.team }</p>
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
      </div>
    )
  }
}

function updateState(props) {
  return {
    team: props.team,
    teams: props.teams,
    games: props.games
  };
}

const mapStateToProps = function(store) {
  return {
    team: store.currentTeam,
    teams: store.teams,
    games: store.games
  };
};

export default connect(mapStateToProps)(NavigationContainer);