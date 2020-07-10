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
      list: {
        products: [{product: 'milk', amount: 1, id: 1}, {product: 'bread', amount: 2, id: 2}],
        userId: this.userId,
        name: this.name
      }
    }
  }

  // addProductHandler = () => {
  //   // add input with two fields, one for product and one for amount
  // } sekcja 10 lekcja 181


  
  render() {
    const shopListItems = this.state.list.products.map(prod => (
      <ShopListItem key={prod.id} product={prod.product} amount={prod.amount}/>
    ));

    const list = this.state;
    console.log(list);
    return (
       <Aux>
          <ul className='ListItems'>
            <Input />
            <Button>Dodaj produkt</Button>
            {shopListItems}
          </ul>
       </Aux>
    );
  }
}



export default ShoppingList;