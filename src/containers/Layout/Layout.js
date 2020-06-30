import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxiliary';

class Layout extends React.Component {

  render() {
    return (
      <Aux>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main>
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