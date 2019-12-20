import React from 'react';

const LogOut = () => {
  const handelClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <a href="/login" onClick={handelClick}>
        Logout
      </a>
    </div>
  );
};

export default LogOut;
