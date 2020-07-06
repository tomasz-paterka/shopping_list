import React from 'react';
import PropTypes from 'prop-types';
import './ShopListItem.scss';

const ShopListItem = (props) => (
  <div className='list-items__item'>
    <p>Product: 
      <span className='item__name'>{props.product}</span>
    </p>
    <p>Amount: 
      <span className='item__amount'>{props.amount}</span>
    </p>
    <span className='item__delete'>X</span>
  </div>
);

ShopListItem.propTypes = {
  product: PropTypes.string,
  amount: PropTypes.number,
}

export default ShopListItem;