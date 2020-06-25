import React from "react";

import logo from "../../../assets/images/newlogo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" height="60" width="200" style={{marginTop:"10px"}}/>
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>

          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
