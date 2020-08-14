import React from 'react';
import axios from '../../axios';

class EditList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: null
    }
  }
  

  
  componentDidMount() {
    axios.get('/lists.json')
      .then(res => {
        const lists = [];
        for (let key in res.data) {
          lists.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(res);

        this.setState({lists: lists});
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
    const lists = this.state.lists;
    console.log(lists);
    return (
      <div>
        <p>EditList</p>
        
      </div>
    );
  }
}


export default EditList;