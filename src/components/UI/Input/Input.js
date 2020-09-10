import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';

const Input = (props) => (
  <Aux>
    <label className='Input__label'>{props.label}</label>
    <input
      type={props.type} 
      className='Input'
      name={props.name}
      onChange={props.change}/>
  </Aux>

);

Input.propTypes = {
  type: PropTypes.elementType,
  label: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func
}

export default Input;