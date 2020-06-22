import React from "react";

// CSS
import "../../assets/CSS/globalstyles.css";

// Image
// import logo from '../assets/logo_white.png';

// 3rd party libraries
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
// import { SocialIcon } from "react-social-icons";

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
                  to="/about"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  About Us
                </Link>
              </div>
              <div className="mb-2">
                <a
                  href="https://blog.coox.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Blog
                </a>
              </div>
              <div className="mb-2">
                <Link
                  to="/how-it-works"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  How It Works
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="/hiring"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  We are Hiring
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="/register-as-cook"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Register as Cook
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to=""
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to=""
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/sitemap"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </Col>

          {/* Serving In */}
          <Col md={4}>
            <div className="font-weight-bolder globalFontSize18 mt-3 mb-4 globalFontFamily">
              Serving In
            </div>

            <div className="text-light ">
              <div className="mb-2">
                <Link
                  to="/city/delhi"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Delhi
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/city/noida"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Noida
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/city/gurugram"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Gurugram
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/city/faridabad"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Faridabad
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/city/ghaziabad"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Ghaziabad
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/city/greater-noida"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  Greater Noida
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="font-weight-bolder globalFontSize18 mt-3 mb-4 globalFontFamily">
              Contact
            </div>

            <div className="text-light ">
              <div className="mb-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:hello@coox.in"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  hello@coox.in
                </a>
              </div>
              <div className="mb-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:9004044234"
                  className=" text-decoration-none text-light font-weight-bold globalFontSize14 globalFontFamily"
                >
                  9004-044-234
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://wa.me/919004044234?text=Hey,%20I%20want%20to%20book%20a%20cook%20%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%8D%B3%20"
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
        {/* <Row>
          {/* <Col md={2}>
						<img src={logo} alt='COOX LOGO' height='30' className=' m-2' />
					</Col> */}

          {/* <Col md={6} className="text-md-left text-center">
            <SocialIcon
              url="https://www.facebook.com/COOXtech/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.instagram.com/coox.in/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/cooxtech/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://twitter.com/COOX64958055"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCTgoZ4zkFnB0UfbUBGOE3kA/"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
            <SocialIcon
              network="whatsapp"
              url="https://wa.me/919004044234?text=Hey,%20I%20want%20to%20book%20a%20cook%20%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%8D%B3%20"
              target="_blank"
              style={{ height: 30, width: 30 }}
              className="m-2"
              bgColor="white"
            />
          </Col>
          <Col md={6}>
            <div className="m-md-2 globalFontFamily text-md-right text-center mt-3">
              Copyright © 2020 COOX - All Rights Reserved.
            </div
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
