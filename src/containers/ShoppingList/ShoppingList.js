import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxiliary';
import ShopListItem from '../../components/ShopListItem/ShopListItem';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    };

    this.inputProductHandler = this.inputProductHandler.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  inputProductHandler (event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  } 

  addProduct() {
    let product = this.state.productValue;
    let amount = this.state.amountValue;
    this.setState({
      products: [
        ...this.state.products,
        {product: product, amount: amount, id: product}]});
  } 
  
  render() {
    const shopListItems = this.state.products ? this.state.products.map(prod => (
      <ShopListItem key={prod.id} product={prod.product} amount={prod.amount}/>
    )) : null;

    const list = this.state;
    console.log(list);

    return (
      <Aux>
        <ul className='ShoppingList'>
          <p>{this.props.location.listName}</p>
          <Input 
            label="Dodaj produkt" 
            change={this.inputProductHandler}
            name='productValue' />
          <Input 
            label="Ilość" 
            change={this.inputProductHandler}
            name='amountValue' />
          <Button click={this.addProduct}>Dodaj produkt</Button>
          {shopListItems}
        </ul>
      </Aux>
    );
  }
}

ShoppingList.propTypes = {
  location: PropTypes.object,
  name: PropTypes.string
}

export default ShoppingList;