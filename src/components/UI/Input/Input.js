import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div className={props.className}>
    <label className='Input__label'>{props.label}</label>
    <input
      className='Input__input'
      type={props.type} 
      name={props.name}
      onChange={props.change}/>
  </div>

);

Input.propTypes = {
  type: PropTypes.elementType,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func
}

export default Input;