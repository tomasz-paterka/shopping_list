import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import ShoppingList from './containers/ShoppingList/ShoppingList';
import Home from './components/Home/Home';

class App extends React.Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/shopping_list/home' component={Home} />
        <Route path='/shopping_list/list' component={ShoppingList} />
        <Route path='/shopping_list/' exact component={Home} />
      </Switch>
    );

    return (
      <div className='Layout__fade'>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;