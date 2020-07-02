import React from 'react';
import shoppingLogo from '../../assets/img/Shopping_logo.png';
import './Logo.scss';

const Logo = () => (
  <div className='Logo'>
    <img src={shoppingLogo} alt='Shopping_logo' />
  </div>
);

export default Logo;