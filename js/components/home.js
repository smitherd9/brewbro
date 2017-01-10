import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import SignUp from './signup';



export default class Home extends React.Component {

	render() {
		return (
			<div className="home">
					
			<Jumbotron>
				<div className="jumbotronText">
					<h1>Welcome to BrewBro</h1>
					<h3>Changing the way you discover great beer</h3>
				</div>		
			</Jumbotron>		
			
			<Row>
			<SignUp />
			</Row>
			
			
			</div>
			

			);
	}
}