import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import AddList from './containers/AddList/AddList';
import ShoppingList from './containers/ShoppingList/ShoppingList';
import EditList from './containers/EditList/EditList';
import Home from './containers/testRouter/Home';
// import About from './containers/testRouter/About';

class App extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/list' component={ShoppingList} />
        <Route path='/editlist' component={EditList} />
        <Route path='/addlist' component={AddList} />
        <Route path='/' component={AddList} />
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