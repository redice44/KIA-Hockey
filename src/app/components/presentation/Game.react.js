'use strict';

import React from 'react';

export default function(props) {
  return (
    <p onClick={props.inc}>Game Name: {props.name}</p>
  );
};
