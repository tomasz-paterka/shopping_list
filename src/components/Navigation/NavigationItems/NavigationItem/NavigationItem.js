import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * NavigationItem component,
 * render navigation link
 * @component
 */
const NavigationItem = (props) => (
  <li className='NavigationItem'>
    <NavLink to={props.link} className='NavigationItem__link'>{props.children}</NavLink>
  </li>
);

NavigationItem.propTypes = {
  /**
   * link is a path to router
   */
  link: PropTypes.string.isRequired,
  /**
   * children - link label
   */
  children: PropTypes.string
}

export default NavigationItem;