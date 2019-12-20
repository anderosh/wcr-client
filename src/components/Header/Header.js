import React from 'react';
import LogOut from '../LogOut/LogOut';

const Header = () => {
  const IsLogin = localStorage.getItem('token');

  return (
    <header>
      <h2>YAC</h2>
      {IsLogin ? <LogOut /> : <a href="/login">Login</a>}
    </header>
  );
};

export default Header;
