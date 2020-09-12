import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const SideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className='SideDrawer__Logo'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func
}

export default SideDrawer;