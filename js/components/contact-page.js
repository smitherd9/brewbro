import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ContactForm from './contact-form';
import ContactComments from './contact-comments';





export default class ContactPage extends React.Component {

	render() {
		return (
			<div className="contact-page">
			
				<div className="hops">
				<img src="../../img/hops1.jpg" />
				</div>
				<h1>Do you love beer as much as we do?</h1>
				<h3>Send us your questions, concerns or comments.</h3>
					
				<ContactForm /> 					

			
			
			</div>
			

			);
	}
}



