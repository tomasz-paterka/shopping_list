import React from 'react';
import PropTypes from 'prop-types';

const ShopListItem = (props) => (
  <div>
    <p>{props.product}</p>
    <p>{props.amount}</p>
  </div>
);

ShopListItem.propTypes = {
  product: PropTypes.string,
  amount: PropTypes.number,
}

export default ShopListItem;