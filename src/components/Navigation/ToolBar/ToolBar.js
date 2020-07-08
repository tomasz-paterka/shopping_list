import React from 'react';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = () => (
  <header className='ToolBar'>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;