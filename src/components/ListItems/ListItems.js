import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
// import Aux from '../../hoc/Auxiliary';

const ListItems = (props) => {

  return (
    <div className='ListItems'>
      <header className='ListItems__header'>
        <p>{props.name}</p>
        <Input
          type='text' 
          label="Dodaj produkt" 
          change={props.change}
          name='productValue' />
        <Input
          type='text' 
          label="Ilość" 
          change={props.change}
          name='amountValue' />
        <Button click={props.click}>Dodaj produkt</Button>
        <Button click={props.save}>zapisz</Button>
        <Button click={props.delete}>usuń</Button>
      </header>
      <ul className='ListItems__list'>
        {props.children}
      </ul>
    </div>

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