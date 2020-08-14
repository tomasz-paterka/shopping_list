import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className='NavigationItems__links'>
    <NavigationItem link='/home'>Start</NavigationItem>
    <NavigationItem link='/list'>Lista</NavigationItem>
    <NavigationItem link='/editlist'>Edytuj listę</NavigationItem>
    <NavigationItem link='/savelist'>Zapisz listę</NavigationItem>
    <NavigationItem link='/addlist'>Usuń listę</NavigationItem>
    <NavigationItem link='#'>Konto</NavigationItem>
    <NavigationItem link='#'>Wyloguj</NavigationItem>
  </ul>
);

export default NavigationItems