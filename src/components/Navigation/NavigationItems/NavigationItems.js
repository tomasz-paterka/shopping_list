import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className='NavigationItems__links'>
    <NavigationItem link='/addlist'>Dodaj listę</NavigationItem>
    <NavigationItem link='/editlist'>Edytuj listę</NavigationItem>
    <NavigationItem link='/home'>Zapisz listę</NavigationItem>
    <NavigationItem link='#'>Usuń listę</NavigationItem>
    <NavigationItem link='#'>Konto</NavigationItem>
    <NavigationItem link='#'>Wyloguj</NavigationItem>
  </ul>
);

export default NavigationItems