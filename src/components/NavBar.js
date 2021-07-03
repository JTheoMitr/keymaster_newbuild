import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '5px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (



    <div className='navbar'>

        <br></br>


    <div className='navButton'>
      <NavLink
        to="/scales"
        exact
        style={link}
      >Home</NavLink>
      </div>

      <br></br>

    <div className='navButton'>
      <NavLink
        to="/about"
        exact
        style={link}
      >About</NavLink>
      </div>

        <br></br>

    <div className='navButton'>
      <NavLink
        to="/contact"
        exact
        style={link}
      >Contact</NavLink>
      </div>

      <br></br>

    <div className='navButton'>
      <NavLink
        to="/scales/new"
        exact
        style={link}
      >New</NavLink>
      </div>

      <br></br>

      <div className='navButton'>
      <NavLink
        to="/resources"
        exact
        style={link}
      >Resources</NavLink>
      </div>

      <br></br>


    </div>
  );
};

export default NavBar;