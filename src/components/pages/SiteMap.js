import React from "react";

import "../../assets/CSS/globalstyles.css";


// 3rd party libraries
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SiteMap = () => {
  return (
    <ul>
      <br />
      <br />
      <Container>
        <h3 className="globalDarkGoldenColor globalFontFamily font-weight-bolder">Company</h3>
        <ul type="disc">
          <br />
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />

          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <br />
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <br />
          <li>
            <Link to="/hiring">We are hiring</Link>
          </li>
          <br />
        </ul>
      </Container>
    </ul>
  );
};

export default SiteMap;
