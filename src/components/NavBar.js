import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  textAlign: 'center'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to="/scales"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/contact"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Contact</NavLink>
      <NavLink
        to="/scales/new"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >New</NavLink>
    </div>
  );
};

export default NavBar;