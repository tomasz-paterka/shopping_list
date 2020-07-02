import React from 'react';
import './NavigationsItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className='header__nav-links'>
    <NavigationItem link='/'>Dodaj listę</NavigationItem>
    <NavigationItem link='/'>Edytuj listę</NavigationItem>
    <NavigationItem link='/'>Zapisz listę</NavigationItem>
    <NavigationItem link='/'>Usuń listę</NavigationItem>
    <NavigationItem link='/'>Konto</NavigationItem>
    <NavigationItem link='/'>Usuń listę</NavigationItem>
  </ul>
);

export default NavigationItems