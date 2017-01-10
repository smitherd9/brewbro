import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ContactForm from './contact-form';
import ContactComments from './contact-comments';





export default class ContactPage extends React.Component {

	render() {
		return (
			<div className="contact-page">
				<h1>Get in touch!</h1>
					<Row>
						<Col md={6}><ContactForm /> </Col>
						<Col md={6}><ContactComments /> </Col>
					</Row>	

			
			
			</div>
			

			);
	}
}



