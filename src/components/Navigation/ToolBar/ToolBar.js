import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = (props) => (
  <header className='ToolBar'>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <Logo />
    <nav className='ToolBar--desktopOnly'>
      <NavigationItems />
    </nav>
  </header>
);

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func,
}

export default ToolBar;