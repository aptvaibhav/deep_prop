import React from "react";

// CSS
import "../../assets/CSS/globalstyles.css";

// Image
// import logo from '../assets/logo_white.png';

// 3rd party libraries
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";  

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black" }} className="text-light p-4">
      <Container className="px-md-4">
        <Row className="my-5">
          {/* Company */}
          <Col md={4}>
            <div className="font-weight-bolder globalFontSize18 mt-3 mb-4 globalFontFamily">
              Company
            </div>

            <div className="text-light ">
              <div className="mb-2">
                <Link
                  to="/about-us"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  About Us
                </Link>
              </div>
              {/* <div className="mb-2">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Blog
                </a>
              </div> */}
              <div className="mb-2">
                <Link
                  to="/contact-us"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/sitemap.html"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Sitemap
                </Link>
              </div>

              {/* <div className="mb-2">
                <Link
                  to="/"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  We are Hiring
                </Link>
              </div> */}
            </div>
          </Col>

          {/* Serving In */}
          <Col md={4}>
            <div className="font-weight-bolder globalFontSize18 mt-3 mb-4 globalFontFamily">
              Serving In
            </div>

            <div className="text-light ">
              <div className="mb-2">
                {/* <Link
                  to="/"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                > */}
               <p> Noida</p>  
                {/* </Link> */}
              </div>
              <div className="mb-2">
                {/* <Link
                  to="/"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                > */}
                  <p>Yamuna Expressway</p>
                {/* </Link> */}
              </div>
              <div className="mb-2">
               <p>Gurugram</p>
                  
               
              </div>
              <div className="mb-2">
                
                <p>   Ghaziabad</p>
               
               
              </div>
              <div className="mb-2">
               
                <p>
                Greater Noida
                </p>
                
               
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="font-weight-bolder globalFontSize18 mt-3 mb-4 globalFontFamily">
              Contact
            </div>

            <div className="text-light ">
              <div className="mb-2">
                <p>
               First Floor Shop No. 19, Plot 10, Gardenia Gateway, Sector 75, Noida, Uttar Pradesh 201307
                </p>
              </div>
              <div className="mb-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:dpandbuilders@gmail.com"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  dpandbuilders@gmail.com
                </a>
              </div>
              <div className="mb-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:9810289415"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  +91-9810289415
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://wa.me/919013610838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr style={{ border: "0.1px solid whitesmoke" }} />
        <Row>
          {/* <Col md={2}>
						<img src={logo} alt='COOX LOGO' height='30' className=' m-2' />
					</Col> */}

          <Col md={6} className="text-md-left">
            <SocialIcon
              url="https://www.facebook.com/Deep-Properties-And-Builders-114386600319897"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.instagram.com/dpandbuilders/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/deep-properties-and-builders-460a6b1a9/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://twitter.com/DeepBuilders"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UC9rT4dSfRTY8oOgRdcdeCzw"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              network="whatsapp"
              url="https://wa.me/919013610838"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
          </Col>
          <Col md={6}>
            <div className="m-md-2 globalFontFamily text-md-right mt-3">
              Copyright © 2020 Deep Properties & Builders - All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
