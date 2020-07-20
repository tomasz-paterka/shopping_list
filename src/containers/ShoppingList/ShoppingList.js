import React from 'react';

import Aux from '../../hoc/Auxiliary';
// import ListItems from '../../components/ShopList/ListItems';
import ShopListItem from '../../components/ShopListItem/ShopListItem';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // products: [{product: 'milk', amount: 1, id: 1}, {product: 'bread', amount: 2, id: 2}],
      products: [],
      userId: this.userId,
      name: '',
      inputValue: '',
    };
    this.inputListNameHandler = this.inputListNameHandler.bind(this);
    this.addNameList = this.addNameList.bind(this);
    this.inputProductHandler = this.inputProductHandler.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  // addNameList = () => {
  //   // add input with two fields, one for product and one for amount
  // do nazwy listy osobny
  // } sekcja 10 lekcja 181
  // dwie klasy jedna dla list i osobny stan list
  // druga dla wyseitlania poszczeglnych list

  inputListNameHandler (event) {
    this.setState({inputValue: event.target.value });
  } 

  inputProductHandler (event) {
    const value = event.target.value;
    this.setState({
      // ...this.state,
      [event.target.name]: value
    });
  } 

  addNameList() {
    const name = this.state.inputValue
    this.setState({name: name});
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
    const shopListItems = this.state.products.map(prod => (
      <ShopListItem key={prod.id} product={prod.product} amount={prod.amount}/>
    ));

    
    const list = this.state;
    console.log(list);
    return (
       <Aux>

          <ul className='ListItems'>
            <Input 
              label="Nazwa listy" 
              change={this.inputListNameHandler}
              name='inputValue' />
            <Button click={this.addNameList}>Dodaj listę</Button>

            <Input 
              label="Dodaj produkt" 
              change={this.inputProductHandler}
              name='productValue' />
            <Input 
              label="Ilość" 
              change={this.inputProductHandler}
              name='amountValue' />
            <Button click={this.addProduct}>Dodaj produkt</Button>
            <p>{this.state.name}</p>
            {shopListItems}
          </ul>
       </Aux>
    );
  }
}



export default ShoppingList;