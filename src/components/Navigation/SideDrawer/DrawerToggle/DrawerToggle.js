import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggle = (props) => (
  <div className='DrawerToggle' onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {
  clicked: PropTypes.func
}

export default DrawerToggle;