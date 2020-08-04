import React from 'react';
import PropTypes from 'prop-types';

const ShopListItem = (props) => (
  <div className='ShopListItem__item'>
    <p>Product: 
      <span className='ShopListItem__name'>{props.product}</span>
    </p>
    <p>Amount: 
      <span className='ShopListItem__amount'>{props.amount}</span>
    </p>
    <span onClick={props.remove} className='ShopListItem__delete'>X</span>
  </div>
);

ShopListItem.propTypes = {
  product: PropTypes.string,
  amount: PropTypes.string,
  remove: PropTypes.func
}

export default ShopListItem;