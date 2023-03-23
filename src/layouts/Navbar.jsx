import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/main.scss';

function Navbar() {
  return (
    <>
      <div>Navbar</div>
      <Outlet />
    </>
  );
}

export default Navbar;
