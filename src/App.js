import React from 'react';

import Layout from './containers/Layout/Layout';
import ShoppingList from './containers/ShoppingList/ShoppingList';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <ShoppingList />
      </Layout>
    );
  }
}

export default App;