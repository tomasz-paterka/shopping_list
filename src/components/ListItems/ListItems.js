import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Auxiliary';

const ListItems = (props) => {

  return (
    <Aux>
      <header className='ListItems__header'>
        <h2>{props.name}</h2>
        <div className='ListItems__inputs'>
          <Input
            type='text'
            className='ListItems__input' 
            label="produkt" 
            change={props.change}
            name='productValue' />
          <Input
            type='text'
            className='ListItems__input'  
            label="ilość" 
            change={props.change}
            name='amountValue' />
        </div>
        <div className='ListItems__buttons'>
          <Button click={props.click}>Dodaj produkt</Button>
          <Button click={props.save}>Zapisz listę</Button>
          <Button click={props.delete}>Usuń listę</Button>
        </div>


      </header>
      <div className='ListItems'>
        <ul className='ListItems__list'>
          {props.children}
        </ul>
      </div>
    </Aux>
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