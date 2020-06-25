import React from 'react';

import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink href="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;