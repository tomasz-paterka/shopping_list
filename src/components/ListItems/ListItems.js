import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const ListItems = (props) => {

  return (
    <ul className='ListItems'>
      <p>{props.name}</p>
      <Input 
        label="Dodaj produkt" 
        change={props.change}
        name='productValue' />
      <Input 
        label="Ilość" 
        change={props.change}
        name='amountValue' />
      <Button click={props.click}>Dodaj produkt</Button>
      <Button click={props.save}>zapisz</Button>
      <Button click={props.delete}>usuń</Button>
      {props.children}
    </ul>
  );
};

ListItems.propTypes = {
  name: PropTypes.string,
  change: PropTypes.func,
  click: PropTypes.func,
  save: PropTypes.func,
  delete: PropTypes.func,
  children: PropTypes.array
}

export default ListItems;