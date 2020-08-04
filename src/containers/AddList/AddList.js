import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      inputValue: '',
    };
    this.inputListNameHandler = this.inputListNameHandler.bind(this);
    this.addNameList = this.addNameList.bind(this);
  }

  inputListNameHandler (event) {
    this.setState({inputValue: event.target.value });
  } 

  addNameList() {
    const name = this.state.inputValue
    this.setState({
      name: name
    });
    this.props.history.push({
      pathname: '/list',
      listName: this.state.inputValue
    });
  } 
  
  render() {
    return (
      <Aux>
        <div className='AddList'>
          <Aux>
            <Input 
              label="Nazwa listy zakupów" 
              change={this.inputListNameHandler} 
              name='inputValue' />
            <Button click={this.addNameList}>Stwórz listę</Button>
          </Aux>
        </div>
      </Aux>
    );
  }
}

AddList.propTypes = {
  history: PropTypes.object
}

export default AddList;