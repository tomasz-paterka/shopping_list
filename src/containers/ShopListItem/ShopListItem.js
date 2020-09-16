import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Aux from '../../hoc/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class ShopListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product,
      amount: this.props.amount,
      edited: false
    }

    this.openModalHandler = this.openModalHandler.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.inputChangeProductHandler = this.inputChangeProductHandler.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
  }

  openModalHandler() {
    this.setState({edited: true});
  }

  cancelEdit() {
    this.setState({edited: false});
  }

  inputChangeProductHandler (event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  } 

  changeProduct() {
    const product = this.state.productValue;
    const amount = this.state.amountValue;

    this.setState({
      product: product,
      amount: amount,
      id: uuid()
    });

    this.cancelEdit();
  }
  
  render() {

    // console.log(this.state);
    return (
      <Aux>
        <Modal show={this.state.edited} modalClosed={this.cancelEdit}>
          <Input
            className='Modal__input'  
            label="produkt" 
            change={this.inputChangeProductHandler}
            name='productValue' />
          <Input
            className='Modal__input' 
            label="ilość" 
            change={this.inputChangeProductHandler}
            name='amountValue' />
          <Button click={this.changeProduct}>Zmień produkt</Button>
        </Modal>
        <div className='ShopListItem__item'>
          <div className='ShopListItem__products' onClick={this.openModalHandler}>
            <p className='ShopListItem__name'>Produkt:
              <span className='ShopListItem__element'>{this.state.product}</span>
            </p>
            <p className='ShopListItem__amount'>Ilość:
              <span className='ShopListItem__element'>{this.state.amount}</span>
            </p>
          </div>
          <div className='ShopListItem__delete' onClick={this.props.remove}>
            <span className='ShopListItem__delete--item'>X</span>
          </div>
        </div>
      </Aux>

    );
  }
}

ShopListItem.propTypes = {
  product: PropTypes.string,
  amount: PropTypes.string,
  remove: PropTypes.func
}

export default ShopListItem;