import React from 'react';
// import Aux from '../../hoc/Auxiliary';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const AddListName = (props) => (
  <div className='AddListName'>
    <Input
      type='text'
      label="Nazwa listy zakupów"
      change={props.change}
      name='inputValue' />
    <Button click={props.click}>Stwórz listę</Button>
  </div>
);

AddListName.propTypes = {
  change: PropTypes.func,
  click: PropTypes.func
}

export default AddListName;