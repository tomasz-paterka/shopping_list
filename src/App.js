import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import ShoppingList from './containers/ShoppingList/ShoppingList';
import Home from './components/Home/Home';

class App extends React.Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/list' component={ShoppingList} />
        <Route path='/' exact component={Home} />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;