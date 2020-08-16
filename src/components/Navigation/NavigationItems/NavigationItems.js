import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className='NavigationItems__links'>
    <NavigationItem link='/home'>Start</NavigationItem>
    <NavigationItem link='/list'>Lista</NavigationItem>
  </ul>
);

export default NavigationItems