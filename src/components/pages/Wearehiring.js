import React from "react";

// CSS
import "../pages/Temp.css";
import "../../assets/CSS/globalstyles.css";
import "../../assets/CSS/style.css";

// Images
import serve from "../../assets/images/servek.png";
import web from "../../assets/images/web.jpeg";
import mark from "../../assets/images/mark.jpg";
import glass from "../../assets/images/glass.png";
import lightning from "../../assets/images/lightning.png";
import rocket from "../../assets/images/rocket.png";


// 3rd party libraries
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";



class Wearehiring extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>We are hiring | Careers at Deep Properties And Builders</title>

          <meta
            name="description"
            content="We’re looking for passionate people. See Current Openings at Jobs. Email at deepandbuilders@gmail.com Let’s build India’s largest platform for Real Estate Property Dealer.Buy your Property with us in Noida,Gurugram,Greater Noida,Ghaziabad,Yamuna Expressway."
          ></meta>
        </Helmet>
      
       
      

        <br />
        <br />
        <br />
        <br />

        <Container>
          {/* Life at COOX */}
          <h2
            className="text-center globalDarkGoldenColor globalFontFamily"
            id="move__down__hiring"
          >
            Life at Deep Properties and Builders
          </h2>
          <br />
          <p className="globalFontFamily text-justify text-muted">
            Innovation, experimentation and problem solving are our core values.
            Built on entrepreneurial DNA, the team is revolutionising the way we are Selling or Buying at such good Rates. If you have that infectious energy, then
            DPAB is the place for you. What's more? Once we’re done with work,
            we party even harder!
          </p>
          <br />
          <br />
          <br />
          <br />
          {/* Why work here? */}
          <h2 className="text-center globalDarkGoldenColor globalFontFamily">
            Why work here?
          </h2>
          <br />
          <div className="container text-center">
            <Row>
              <Col lg={4} md={4} className="py-3">
                <img src={lightning} alt="Startup Exposure" height="50px" />
                <h4 className="globalFontFamily">Startup Exposure </h4>
              </Col>
              <Col lg={4} md={4} className="py-3">
                <img src={rocket} alt="Unlimited Learning" height="50px" />
                <h4 className="globalFontFamily">Unlimited Learning</h4>
              </Col>
              <Col lg={4} md={4} className="py-3">
                <img src={glass} alt="Games & Parties" height="50px" />
                <h4 className="globalFontFamily">Games & Parties</h4>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <br />
          <br />

          {/* Current Openings  */}
          <h2 className="text-center globalDarkGoldenColor globalFontFamily">
            Current Openings
          </h2>
          <br />
          <Container>
            <Row>
              <Col sm={4} md={12}>
                <CardDeck>
                  <Card>
                    <div className="zoom-effect-container">
                      <div className="image-card">
                        <Card.Img
                          variant="top"
                          src={serve}
                          style={{ height: "240px" }}
                        />
                      </div>
                    </div>
                    <Card.Body className="globalFontFamily">
                      <Card.Title>Digital Marketer</Card.Title>
                      <Card.Text className="text-muted">
                        SeO, Google Ads, Social Media Marketing
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="zoom-effect-container">
                      <div className="image-card">
                        <Card.Img
                          variant="top"
                          src={web}
                          style={{ height: "240px" }}
                        />
                      </div>
                    </div>
                    <Card.Body className="globalFontFamily">
                      <Card.Title>Web Developer</Card.Title>
                      <Card.Text className="text-muted">
                        React JS, Node JS, JavaScript, MongoDB
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="zoom-effect-container">
                      <div className="image-card">
                        <Card.Img
                          variant="top"
                          src={mark}
                          style={{ height: "240px" }}
                        />
                      </div>
                    </div>
                    <Card.Body className="globalFontFamily">
                      <Card.Title>Operations</Card.Title>
                      <Card.Text className="text-muted">
                        Market Research, Data Analytics
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>

          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
        <center className="bg-warning">
          <div className="py-5">
            <h4 className="mb-0 globalFontFamily">
              <b>
                Passionate to work with us? Drop a note at  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:dpandbuilders@gmail.com"
                >
                  dpandbuilders@gmail.com
                </a>{" "}
              </b>
            </h4>
          </div>
        </center>
        {/* <br />
				<br />
				<br />
				<br />
				<br /> */}
      </div>
    );
  }
}
export default Wearehiring;
