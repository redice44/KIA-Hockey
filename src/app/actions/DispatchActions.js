'use strict';

import Store from '../store';
import Actions from '../constants/ActionConstants';

export function bootstrapApp(data) {
  Store.dispatch({
    type: Actions.BOOTSTRAP_APP,
    data: data
  });
}

export function changeTeam(team) {
  Store.dispatch({
    type: Actions.CHANGE_TEAM,
    team: team
  });
}

export function changeHighlight(highlight) {
  Store.dispatch({
    type: Actions.CHANGE_HIGHLIGHT,
    num: highlight
  });
}
