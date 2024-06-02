import React from 'react';
import { NavLink } from 'react-router-dom';

//Rendering the route navigation links for the application
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/gallery/cats">Cats</NavLink></li>
        <li><NavLink to="/gallery/dogs">Dogs</NavLink></li>
        <li><NavLink to="/gallery/birds">Birds</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/admin/cats">Admin</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
