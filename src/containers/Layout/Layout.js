import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxiliary';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSideDrawer: false
    }

    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  sideDrawerClosedHandler() {
    this.setState({
      showSideDrawer: false
    });
  }

  sideDrawerToggleHandler() {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}/>
        <main className='Layout'>
          <div className='Layout__fade'></div>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout;