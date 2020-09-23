import React from 'react';
import shoppingLogo from '../../../assets/img/Shopping_logo.png';

/**
 * Logo component.
 * Render logo image
 * @component
 */
const Logo = () => (
  <div className='Logo'>
    <img src={shoppingLogo} alt='Shopping_logo' />
  </div>
);

export default Logo;