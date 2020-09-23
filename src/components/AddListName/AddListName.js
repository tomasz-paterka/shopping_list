import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

/**
 * AddListName component,
 * render input to add list name
 * @component
 */
const AddListName = (props) => (
  <div className='AddListName'>
    <Input
      type='text'
      className='AddListName__input'
      label="Nazwa listy zakupów"
      change={props.change}
      name='inputValue' />
    <Button click={props.click}>Stwórz listę</Button>
  </div>
);

AddListName.propTypes = {
  /**
   * input change func 
   */
  change: PropTypes.func.isRequired,
  /**
   * click reference to inputListNameHandler() method
   */
  click: PropTypes.func.isRequired
}

export default AddListName;