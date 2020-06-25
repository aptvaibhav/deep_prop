import React from "react";

import logo from "../../../assets/images/2.jpeg";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { Link,NavLink } from "react-router-dom";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" height="70" width="500" style={{marginTop:"10px"}}/>
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
