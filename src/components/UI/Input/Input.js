import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input
    type="text" 
    className='Input'
    value={props.value}/>
);

Input.propTypes = {
  value: PropTypes.string,
}

export default Input;