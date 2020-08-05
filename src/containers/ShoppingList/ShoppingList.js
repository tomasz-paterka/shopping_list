import React from 'react';
import uuid from 'react-uuid';

import Aux from '../../hoc/Auxiliary';
import ListItems from '../../components/ListItems/ListItems';
import ShopListItem from '../../components/ShopListItem/ShopListItem';
import AddListName from '../../components/AddListName/AddListName';


class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      inputValue: '',
      products: [],
    };

    this.inputListNameHandler = this.inputListNameHandler.bind(this);
    this.addNameList = this.addNameList.bind(this);

    this.inputProductHandler = this.inputProductHandler.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  inputListNameHandler (event) {
    this.setState({inputValue: event.target.value });
  } 

  addNameList() {
    const listName = this.state.inputValue
    this.setState({
      name: listName
    });
  } 

  inputProductHandler (event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  } 

  addProduct() {
    const product = this.state.productValue;
    const amount = this.state.amountValue;
    this.setState({
      products: [
        ...this.state.products,
        {product: product, amount: amount, id: uuid()}]});
  }
  
  removeHandler(id) {
    const filteredProducts = this.state.products.filter(item => item.id !== id)
    this.setState({products: filteredProducts});
  }
  
  render() {
    const addListName = this.state.name === '' ?
      <AddListName 
        change={this.inputListNameHandler}
        click={this.addNameList}/>
      : null;


    const shopListItems = this.state.products.map(prod => (
      <ShopListItem 
        key={prod.id} 
        product={prod.product} 
        amount={prod.amount} 
        remove={() => this.removeHandler(prod.id)}/>
    ));

    let listItems;
    if (this.state.name !== '') {
      listItems = <ListItems 
        name={this.state.name}
        remove={() => this.removeHandler(this.state.products.id)}
        change={this.inputProductHandler}
        click={this.addProduct}>
          {shopListItems}
        </ListItems>
    }
    
    console.log(this.state);

    return (
      <Aux>
        {addListName}
        {listItems}
      </Aux>
    );
  }
}

export default ShoppingList;