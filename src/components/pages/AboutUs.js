import React from "react";
import Aux from "../../HOC/Aux";
import photo from "../../assets/images/home.jpeg";
import "../pages/Temp.css";
import "../../assets/CSS/globalstyles.css";
import "../../assets/CSS/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as LinkScroll } from "react-scroll";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
const about = () => (
  <Aux>
    <div className="canvas">
      <img
        src={photo}
        alt="About Us"
        style={{
          width: "100vw",
          height: "600px",
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
      className="aboutTintTextPosition w-75"
    >
      <h1 className="text-light font-weight-bolder heading__text globalFontFamily text-center">
        Let's get in Touch.
      </h1>
    </div>
    <div
      style={{
        position: "absolute",
        top: "90%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {window.screen.width < 768 ? (
        ""
      ) : (
        <>
          <h6 className="text-light text-center">scroll for more</h6>
          <h6 className="text-center text-light">
            <LinkScroll
              activeClass="active"
              to="move__down__about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="globalCursorPointer"
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </LinkScroll>
          </h6>
        </>
      )}
    </div>
    <div style={{ textAlign: "center" }}>
      <h2
        className="text-center globalDarkGoldenColor globalFontFamily font-weight-bolder"
        id="move__down__about"
      >
        About Us
      </h2>
    </div>
    <div style={{ marginLeft: "60px" }}>
      <p>
        For general queries, mail us at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:vaibhav31122@gmail.com"
        >
          vaibhav31122@gmail.com
        </a>
      </p>

      <br></br>
      <p>
        If you want to buy/sell or rent your property, you may call at{" "}
        <a target="_blank" rel="noopener noreferrer" href="tel:9810289415">
          {" "}
          +91-9810289415
        </a>
      </p>
      <br />
      <p>
        If you are a property dealer and want to collab with us, you may call at{" "}
        <a target="_blank" rel="noopener noreferrer" href="tel:9810289415">
          {" "}
          +91-9810289415
        </a>
      </p>
      <br />
      <p>Registered Address</p>

      <p>1st Floor, D-154, Sector 47, Noida, Uttar Pradesh - 201303, India</p>
    </div>
  </Aux>
);

export default about;
