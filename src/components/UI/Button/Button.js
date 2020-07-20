import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    onClick={props.click} 
    className='Button'>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.string,
  click: PropTypes.func
}

export default Button;