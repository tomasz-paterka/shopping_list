import React from 'react';

import Layout from './containers/Layout/Layout';
import ShoppingList from './containers/ShoppingList/ShoppingList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <ShoppingList />
        </Layout>
      </div>
    );
  }
}

export default App;