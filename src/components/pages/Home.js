import React from "react";
// import { Button, ButtonToolbar } from "react-bootstrap";
import Aux from "../../HOC/Aux";

import photo from "../../assets/images/home.jpeg";
import "../pages/Temp.css";
// import "../../assets/CSS/globalstyles.css";
// import "../../assets/CSS/style.css";

const home = () => (
  <Aux>
   <div className="canvas">
        <img
          src={photo}
          alt="Home"
          style={{
            width: "100vw",
            height: "300px"
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="w-75"
      >
        <h1 className="aligntext text-light font-weight-bolder heading__text globalFontFamily text-center">
          Book your property Now with Us.   
        </h1>
      </div>
    </Aux>

);

export default home;
