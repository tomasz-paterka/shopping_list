import React from 'react';
import PropTypes from 'prop-types';

import ShopListItem from './ShopListItem/ShopListitem';
import Button from '../UI/Button/Button';

const ListItems = (props) => {
  const shopListItems = props.products.map(prod => (
    <ShopListItem key={prod.id} product={prod.product} amount={prod.amount}/>
  ));
  
  return (
    <div>
      <Button>Dodaj</Button>
      <ul>
        {shopListItems}
      </ul>
    </div>
  )
};

ListItems.propTypes = {
  products: PropTypes.array,
}


export default ListItems;