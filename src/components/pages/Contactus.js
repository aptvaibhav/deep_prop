import React from "react";
import Aux from "../../HOC/Aux";
// import photo from "../../assets/images/home.jpeg";
import "../pages/Temp.css";
import "../../assets/CSS/globalstyles.css";
import "../../assets/CSS/style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link as LinkScroll } from "react-scroll";
// import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import phone from "../../assets/images/phone.png";
import { Helmet } from "react-helmet";
//        @fortawesome/free-solid-svg-icons
import Mapper from "../../containers/Mapper";
import { Row, Col, Container } from "react-bootstrap";

const contact = () => (
  <Aux>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact Us | Deep Properties And Builders</title>
      <meta
        name="description"
        content="Contact Deep Properties And Builders Property Dealer in Noida,Yamuna Expressway,Greater Noida,Gurugram.Contact us-9810289415"
      />
    </Helmet>

    {/* <div className="canvas">
      <img
        src={photo}
        alt="About Us"
        style={{
          width: "100vw",
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
      <h1 className="text-light font-weight-bolder heading__text globalFontFamily text-center textalign">
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
    </div> */}
    <br />
    <br />
    <div className="center">
   
      <h1
        className="text-center globalDarkGoldenColor globalFontFamily font-weight-bolder"
        id="move__down__about"
      >
        Contact Us
      </h1>
  
    {/* <div className="text-muted margin">
      <p>
        For general queries, mail us at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:dpandbuilders@gmail.com"
        >
          dpandbuilders@gmail.com
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
      <p>
        <a
          href="https://wa.me/919013610838"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </p>
      <br />
      <p>Registered Address</p>

      <p>
      First Floor Shop No. 19, Plot 10, Gardenia Gateway
        <br />
        Sector 75, Noida
        <br />
        Uttar Pradesh 201307
      </p>
    
    </div> */}
    <br />
    <br />
   
    <Container>
      <Row>
        
          <Col className="marginleft1">
            <h3 className="marginleft2">Phone</h3>
            <div className="text-muted">
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:9810289415"
                >
                  {" "}
                  +91-9810289415
                </a>
              </h4>
            </div>
          </Col>
          <Col className="marginleft3">
            <h3 className="marginleft2">Address</h3>
            <div className="text-muted">
              <p>
                S-FF 19, Plot number 10
                <br />
                Gardenia Gateway,Sector 75, Noida 
                <br />
                Uttar Pradesh 201307
              </p>
            </div>
          </Col>
        
      </Row>
    </Container>
    <p
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 10,
      }}
      align="right"
      className="p-3 m-0"
    >
      <a target="_blank" rel="noopener noreferrer" href="tel:9810289415">
        <img src={phone} alt="phone" height="50px" />
      </a>
    </p>
  
      <Mapper />
    </div>
  </Aux>
);

export default contact;
