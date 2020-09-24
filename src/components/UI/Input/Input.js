import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input component,
 * render input tag with label.
 * @component
 */
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
  /**
   * type is a type of input
   */
  type: PropTypes.elementType,
  /**
   * className is a html class
   */
  className: PropTypes.string,
  /**
   * inputs label
   */
  label: PropTypes.string,
  /**
   * inputs name
   */
  name: PropTypes.string,
  /**
   * input change func reference to method
   */
  change: PropTypes.func.isRequired
}

export default Input;