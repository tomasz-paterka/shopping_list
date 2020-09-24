import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component,
 * render backdrop style to Modal and SideDrawer.
 * @component
 */
const Button = (props) => (
  <button
    onClick={props.click} 
    className='Button'>{props.children}</button>
);

Button.propTypes = {
  /**
   * children - button description
   */
  children: PropTypes.string,
  /**
   * click func reference to method
   */
  click: PropTypes.func.isRequired
}

export default Button;