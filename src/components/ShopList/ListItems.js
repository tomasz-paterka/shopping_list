import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxiliary';
import './ListItems.scss'
import ShopListItem from './ShopListItem/ShopListitem';
import Button from '../UI/Button/Button';

const ListItems = (props) => {
  const shopListItems = props.products.map(prod => (
    <ShopListItem key={prod.id} product={prod.product} amount={prod.amount}/>
  ));
  
  return (
    <Aux>
      
      <ul className='list__items'>
        <Button>Dodaj</Button>
        {shopListItems}
      </ul>
    </Aux>
  )
};

ListItems.propTypes = {
  products: PropTypes.array,
}


export default ListItems;