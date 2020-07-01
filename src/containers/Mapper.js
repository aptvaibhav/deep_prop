import Iframe from "react-iframe";
import React, { Component } from "react";

class Mapper extends Component {
  render() {
    return (
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.9667542211012!2d77.38147035794842!3d28.571759295610484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef60eaf131a9%3A0xddda0f4ad179dae!2sShop%20No.%2019%2C%20Plot%2C%2010%2C%20Gardenia%20Gateway%2C%20Sector%2075%2C%20Noida%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1593591818029!5m2!1sen!2sin"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>

    );
  }
}
export default Mapper;
