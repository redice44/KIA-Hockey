'use strict';

import React from 'react';

import Navigation from '../Navigation.react';

export default function(props) {
  const links = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/standings',
      name: 'Standings'
    },
    {
      url: '/schedule',
      name: 'League Schedule'
    },
    {
      url: '/schedule/lb',
      name: "LB's schedule"
    },
    {
      url: '/team',
      name: 'All Teams'
    },
    {
      url: '/team/lb',
      name: "Lucky Bastards"
    },
    {
      url: '/team/lb/44',
      name: "Lucky Bastards' #44"
    },
    {
      url: '/team/boozers',
      name: 'Boozers'
    },
    {
      url: '/games',
      name: 'All games'
    },
    {
      url: '/games/2016-06-15-20-45',
      name: 'June 15, 2016 @8:45'
    }
  ];

  return (
    <div>
      <Navigation links={links} />
      <div>
        {props.children}
      </div>
    </div>
  );
}