import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import bg from '../assets/intro1.jpg';
import './NotFound.css';

class NotFound extends Component {
	render() {
		return (
			<div style={{ minHeight: '70vh' }}>
				<Container className='my-5'>
					<div className='text-center notFoundDiv'>
						<h1 className='notFound'>Oops!</h1>
					</div>

					<div className='text-center'>
						<h4 className='font-weight-bolder'>404 - PAGE NOT FOUND</h4>
						{/* <h6>Could not find the page you were looking for.</h6> */}
					</div>

					<br />

					<Row>
						<Col align='center'>
							<Link to='/' className='btn btn-warning text-decoration-none'>
								Go to Home Page
							</Link>
						</Col>
					</Row>

					{/* <Row>
						<Col align='right'>
							<Link
								to='/'
								className='btn btn-warning text-decoration-none'
								style={{ minWidth: '115px' }}
							>
								Book a Cook
							</Link>
						</Col>
						<Col align='left'>
							<Link
								to='/about'
								className='btn btn-warning text-decoration-none'
								style={{ minWidth: '115px' }}
							>
								About Us
							</Link>
						</Col>
					</Row> */}
				</Container>
			</div>
		);
	}
}

export default NotFound;

// <div
// 	style={{
// 		backgroundImage: 'url(' + bg + ')',
// 		minHeight: '50vh',
// 		backgroundRepeat: 'no-repeat',
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center center',
// 	}}
// >
// 	<div style={{ background: 'rgba(0,0,0,0.6)', minHeight: '50vh' }}>
// 		<Container className='pt-5 px-5 pb-3'>
// 			<Row>
// 				<Col align='center'>
// 					<h6
// 						className='font-weight-bolder mb-0 text-light'
// 						style={{ fontSize: '100px' }}
// 					>
// 						404
// 					</h6>
// 					<p className='text-light font-weight-lighter'>Page Not Found</p>
// 				</Col>
// 			</Row>
// 		</Container>
// 		<Row>
// 			<Col align='right'>
// 				<Link
// 					to='/'
// 					className='btn btn-warning text-decoration-none'
// 					style={{ minWidth: '115px' }}
// 				>
// 					Book a Cook
// 				</Link>
// 			</Col>
// 			<Col align='left'>
// 				<Link
// 					to='/about'
// 					className='btn btn-warning text-decoration-none'
// 					style={{ minWidth: '115px' }}
// 				>
// 					About Us
// 				</Link>
// 			</Col>
// 		</Row>
// 		<br />
// 		<br />
// 		<br />
// 	</div>
// </div>
