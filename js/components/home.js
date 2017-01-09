import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';



export default class Home extends React.Component {

	render() {
		return (
			<div className="home">
			
			<Row>		
			<Jumbotron><img src="../../img/beer-taps.jpg" />
			</Jumbotron>		
			</Row>
			
			
			</div>
			

			);
	}
}