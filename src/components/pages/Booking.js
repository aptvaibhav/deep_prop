import React from "react";
// import picture from "../../assets/images/picture.jpg";
// import photo from "../../assets/images/home.jpeg";
// import whatsapp from "../../assets/whatsapp.png";
import phone from "../../assets/images/phone.png";
import whyus from "../../assets/images/whyus.png";

import vision from "../../assets/vision.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import { Redirect } from "react-router-dom";
const Booking = () => (
  <div>
    <Container>
      {/* WHO ARE WE? */}
      <br />
      <br />
      {/* <p align="center">
        <span className="globalLightGoldenColor globalFontSize25 font-weight-bolder globalFontFamily">
          Why Choose Us
        </span>
      </p>

      <br /> */}

      {/* <p className="globalFontFamily text-justify text-muted">
        Being the first one to have organized the realty services sector, we
        very well understands the pulse of the market and the mental space of
        the prospective buyers. This long run has equipped DPAB with deep
        industry knowledge, market trends and customer preferences. DPAB family
        having well-educated professionals and consultants on-board assure
        delivery of our value system offering a selfless, trustworthy and
        reliable companionship throughout the buying transactional experience. If
        you want to <b> Buy or Sell your property</b>{" "}
        <a target="_blank" rel="noopener noreferrer" href="tel:9810289415">
          Call us now.
        </a>
      </p> */}

      {/* OUR VISION */}
      <Row>
        <Col>
          <img
            src={whyus}
            alt="Why Choose Us"
            style={{
              width: "500px"
            }}
          />
        </Col>
        <Col>
          <h1 style={{ marginTop: "20%" }}>WHY CHOOSE US</h1>
          <hr style={{ backgroundColor: "#ffec47", height: "12px" }} />
          <p>
          Being the first one to have organized the realty services sector, we
        very well understands the pulse of the market and the mental space of
        the prospective buyers. If
        you want to <b> Buy or Sell your property</b>{" "}
        <a target="_blank" rel="noopener noreferrer" href="tel:9810289415">
          Call us now.
        </a>
          </p>
          {/* <hr 
        width: 100%;
        height: 30px;
        margin-left: auto;
        margin-right: auto;
        background-color: #b7d0e2;
          /> */}
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <p align="center">
        <span className="globalLightGoldenColor globalFontSize25 font-weight-bolder globalFontFamily">
          YOUR PARTNER IN PROPERTY, PEACE & PROSPERITY
        </span>
      </p>

      <br />

      <Row>
        <Col md={7}>
          <p className="globalFontFamily text-justify text-muted">
            Established in the year 2000, by its visionary founder Amrish Tyagi,
            Deep Properties And Builders is the one of the largest real estate
            services company of India. With a strong network connections across
            India, the company is strengthening its reach year-on-year. Backed
            by more than 2100 professionals, Deep Properties And Builders is
            known for its best-in-class customer service through hi-tech
            response mechanism. Deep Properties And Builders is counted among
            the first few companies that transformed the real estate industry of
            India and shaped it into a more professional and organized market.
            The company now has an influential presence in offline as well as
            online real estate space. With a turnover of 200+ Cr, it is the
            highest tax payer in the primary real estate services industry of
            India. Deep Properties And Builders brand value is reckoned at 2000
            Cr. The company has touched the lives of over 3 million families and
            helped them find the home of their dreams. For its exemplary
            contribution to the real estate industry, Deep Properties And
            Builders has also received many awards and recognitions.
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
    </Container>

    {/* <p
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
    </p> */}
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
  </div>
);

export default Booking;
