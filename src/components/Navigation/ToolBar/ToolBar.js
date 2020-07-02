import React from 'react';
import './ToolBar.scss';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = () => (
  <header className='header__toolbar'>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;