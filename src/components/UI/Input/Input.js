import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      type="text" 
      className='Input'
      name={props.name}
      onChange={props.change}/>
  </div>

);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func
}

export default Input;