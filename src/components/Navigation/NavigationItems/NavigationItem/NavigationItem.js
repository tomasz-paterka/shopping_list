import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavigationsItem.scss';

const NavigationItem = (props) => (
  <li className='header__nav-link'>
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string
}

export default NavigationItem;