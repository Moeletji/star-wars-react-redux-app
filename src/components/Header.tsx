import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <img
      src={logo}
      alt="Star Wars"
      style={{ width: 300, display: 'block', margin: 'auto' }}
    />
  );
};

export default Header;
