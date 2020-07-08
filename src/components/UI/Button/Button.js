import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button className='Button'>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;