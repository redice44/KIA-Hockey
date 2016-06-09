'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <nav>
      <ul>
        {props.links.map(l => {
          return (
            <li key={l.url}><Link to={l.url}>{l.name}</Link></li>
          );
        })}
      </ul>
    </nav>
  );
}