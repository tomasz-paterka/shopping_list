import React from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';
import Aux from '../../hoc/Auxiliary';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';

class Layout extends React.Component {

  render() {
    return (
      <Aux>
        <ToolBar />
        <main className='content'>
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