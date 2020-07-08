import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className='NavigationItems__links'>
    <NavigationItem link='/'>Dodaj listę</NavigationItem>
    <NavigationItem link='/'>Edytuj listę</NavigationItem>
    <NavigationItem link='/'>Zapisz listę</NavigationItem>
    <NavigationItem link='/'>Usuń listę</NavigationItem>
    <NavigationItem link='/'>Konto</NavigationItem>
    <NavigationItem link='/'>Wyloguj</NavigationItem>
  </ul>
);

export default NavigationItems