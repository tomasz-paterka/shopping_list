import React from 'react';
import PropTypes from 'prop-types';

/**
 * DrawerToggle component,
 * render mobile navigation hamburger.
 * @component
 */
const DrawerToggle = (props) => (
  <div className='DrawerToggle' onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {
  /**
   * clicked func reference to drawerToggleClicked() method
   */
  clicked: PropTypes.func.isRequired
}

export default DrawerToggle;