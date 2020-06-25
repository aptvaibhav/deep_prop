import React from "react";

//CSS
import "../../assets/CSS/globalstyles.css";
import "../../assets/CSS/style.css";
import "../pages/Temp.css";

// Image
import photo from "../../assets/images/home.jpeg";
import whatsapp from "../../assets/whatsapp.png";
import bulb from "../../assets/Bulb.jpg";
import vision from "../../assets/vision.jpg";

// 3rd party components
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

// import Gallery from "react-photo-gallery";
// import { photos } from "../pages/photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faCheckSquare,
  faGrinStars,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import { Link as LinkScroll } from "react-scroll";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Deep Properties And Builders</title>
        <meta
          name="description"
          content="We provide Cooks and Chefs for your Parties at Home. Verified and trained professionals in Delhi NCR. Read reviews, see photos and learn more here."
        />
      </Helmet>

      <div className="canvas">
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
        <h1 className="text-light font-weight-bolder heading globalFontFamily text-center textalign">
          Redefining Your Dream Home/Business Outlet.
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
      <br />
      <br />
      <br />
      <br />
      <Container>
        {/* WHO ARE WE? */}
        <h2
          className="text-center globalDarkGoldenColor globalFontFamily"
          id="move__down__about"
        >
          Who are we?
        </h2>
        <br />

        <p className="globalFontFamily text-justify text-muted">
          We are a Real Estate company which provides you with your dream
          home/business outlet. We help facilitate a transaction between the
          buyers and sellers of property.
        </p>
        <br />
        <br />
        <br />
        <br />
        {/* OUR VISION */}
        <h2 className="text-center globalDarkGoldenColor globalFontFamily">
          Our Vision
        </h2>
        <br />
        <h4 className="globalFontFamily text-justify text-center">
          When it’s about Dream Home, we don’t want you to compromise on:
        </h4>
        <br />
        <h4 className="globalFontFamily text-justify text-center ">
          Location . View . Transportation . Comfort . Cost
        </h4>
        <br />
        <br />
        <Row>
          <Col md={7}>
            <p className="globalFontFamily text-justify text-muted">
              We want to provide you with your dream home. A fully well equiped
              Home or a Business Outlet in your Budget, at a very reasonable
              price. Also, we also look into account the location of the asset
              which you are purcashing with us. As it should have a good
              trasporation system network across it along with the best view
              possible.
            </p>
          </Col>
          <Col md={5} align="center">
            <img
              // src='https://dummyimage.com/300x150/ebceeb/grey.jpg'
              // src='https://i.picsum.photos/id/469/300/150.jpg'
              src={vision}
              alt="Our Vision"
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        {/* How it started? */}
        <h2 className="text-center globalDarkGoldenColor globalFontFamily">
          How it started?
        </h2>
        <br />
        <Row>
          <Col md={7}>
            <p className="globalFontFamily text-justify text-muted">
              Our company Founder Amrish Tyagi was once looking for a
              investment, so he decided to buy a shop but he wasnt able to get a
              shop at the perfect location at a reasonable price. That's when it
              stricked him, why not have his own company for buying and selling
              properties.
            </p>
          </Col>
          <Col md={5} align="center">
            <img
              // src='https://dummyimage.com/300x150/ebceeb/grey.jpg'
              // src='https://i.picsum.photos/id/482/300/150.jpg'
              src={bulb}
              alt="dummy img"
              width="300"
            />
          </Col>
        </Row>
        <br />
        <br />
      </Container>

      <Container fluid style={{ backgroundColor: "#eeeeee" }} className="py-4">
        <Row>
          <Col md={4} className="alignTextCenterOnMobileView">
            <h4 className=" m-3 globalFontFamily globalLightGreyTxt ">
              <FontAwesomeIcon icon={faUserCheck} /> Verified Professionals
            </h4>
          </Col>
          <Col md={4} className="alignTextCenterOnMobileView">
            <h4 className=" m-3 globalFontFamily globalLightGreyTxt ">
              <FontAwesomeIcon icon={faCheckSquare} /> Assured Service
            </h4>
          </Col>
          <Col md={4} className="alignTextCenterOnMobileView">
            <h4 className=" m-3 globalFontFamily globalLightGreyTxt ">
              <FontAwesomeIcon icon={faGrinStars} /> Guaranteed Experience
            </h4>
          </Col>
        </Row>
      </Container>

      {/* <br />
			<br /> */}

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
        <a
          href="https://wa.me/919013610838"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" height="50px" />
        </a>
      </p>
    </div>
  );
};

export default About;
