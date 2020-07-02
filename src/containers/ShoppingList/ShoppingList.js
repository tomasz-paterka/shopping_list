import React from 'react';

import ListItems from '../../components/ShopList/ListItems';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{product: 'milk', amount: 1, id: 1}, {product: 'bread', amount: 2, id: 2}],
    }
  }

  // addProductHandler = () => {
  //   // add input with two fields, one for product and one for amount
  // }


  render() {
    const list = this.state;
    console.log(list);
    return (
       <div>
         <ListItems products={this.state.products} />
       </div>
    );
  }
}



export default ShoppingList;