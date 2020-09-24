import React from 'react';
import PropTypes from 'prop-types';

/**
 * Backdrop component,
 * render backdrop style to Modal and SideDrawer.
 * @component
 */
const Backdrop = (props) => (
  props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
);

Backdrop.propTypes = {
  /**
   * show checks if Backdrop is visible
   */
  show: PropTypes.bool.isRequired,
  /**
   * clicked func reference to method
   */
  clicked: PropTypes.func.isRequired
}

export default Backdrop;