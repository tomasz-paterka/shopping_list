import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

/**
 * NavigationItems component,
 * renders list of navigation links
 * @component
 */
const NavigationItems = () => (
  <ul className='NavigationItems__links'>
    <NavigationItem link='/home'>Start</NavigationItem>
    <NavigationItem link='/list'>Lista</NavigationItem>
  </ul>
);

export default NavigationItems