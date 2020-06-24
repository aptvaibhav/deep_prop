import React from 'react';

// CSS
import '../pages/Review.css';
import '../../assets/CSS/globalstyles.css';

// 3rd party libraries
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faCheckSquare,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";

// Images
import img1 from '../../assets/review1.jpg';
import img2 from '../../assets/review2.jpg';
import img2Webp from '../../assets/review2.webp';
import img3 from '../../assets/review3.jpg';

import Aux from "../../HOC/Aux";

class Review extends React.Component {
	render() {
		return (
            <Aux>
			<div>
				<p align='center'>
					<span className='globalLightGoldenColor globalFontSize25 font-weight-bolder globalFontFamily'>
						Our Clients Love Us
					</span>
				</p>
				<Container>
					<Row>
						<Col sm={4} md={12}>
							<CardDeck>
								<Card className=''>
									<div className='zoom-effect-container'>
										<div className='image-card'>
											<picture>
												<source srcSet={img2Webp} type='image/webp' />
												<Card.Img
													variant='top'
													src={img2}
													className='rounded-circle mt-4 userImg'
													alt='Five star reviews from customers'
												/>
											</picture>
										</div>
									</div>
									<Card.Body>
										<p className='text-center globalLightGoldenColor globalFontSize25 globalFontFamily'>
											"Bought very good land at Cheap price"
										</p>

										<blockquote className='blockquote'>
											<h6
												className='text-muted mb-0 globalFontFamily'
												style={{ lineHeight: '2' }}
											>
												I had an amazing experience bought very good land at cheap price
											</h6>
											<br />
											<footer className='blockquote-footer globalFontFamily'>
												Shruti Malhotra <cite title='22/3/2019'>22/3/2019</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
								<Card className=''>
									<div className='zoom-effect-container'>
										<div className='image-card'>
											<Card.Img
												variant='top'
												src={img1}
												className='rounded-circle mt-4 userImg'
												alt='Five star reviews from customers'
											/>
										</div>
									</div>
									<Card.Body>
										<p className='text-center globalLightGoldenColor globalFontSize25 globalFontFamily'>
											"Wonderful Experience"
										</p>

										<blockquote className='blockquote'>
											<h6
												className='text-muted mb-0 globalFontFamily'
												style={{ lineHeight: '2' }}
											>
												I am happy with the land i bought from them.
											</h6>
											<br />
											<footer className='blockquote-footer globalFontFamily'>
												Poonam Dhingra <cite title='10/3/2019'>10/3/2019</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
								<Card className=''>
									<div className='zoom-effect-container'>
										<div className='image-card'>
											<Card.Img
												variant='top'
												src={img3}
												className='rounded-circle mt-4 userImg'
												alt='Five star reviews from customers'
											/>
										</div>
									</div>
									<Card.Body>
										<p className='text-center globalLightGoldenColor globalFontSize25 globalFontFamily'>
											"Pocket Friendly"
										</p>

										<blockquote className='blockquote'>
											<h6
												className='text-muted mb-0 globalFontFamily'
												style={{ lineHeight: '2' }}
											>
												They helped me sell my property as a very good rate.
											</h6>
											<br />
											<footer className='blockquote-footer globalFontFamily'>
												Rajeev Gupta <cite title='8/5/2019'>8/5/2019</cite>
											</footer>
										</blockquote>
									</Card.Body>
								</Card>
							</CardDeck>
						</Col>
					</Row>
                    <br />
                    <br />
				</Container>
    <Container fluid style={{ backgroundColor: "#eeeeee" }} className="py-4">
        <Row style={{textAlign:"center"}}>
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
			</div>
            </Aux>
		);
	}
}
export default Review;
