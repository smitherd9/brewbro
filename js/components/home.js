import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import SignUp from './signup';
import RandomBeerDisplay from './random-beer-display';
import { browserHistory } from 'react-router';





export default class Home extends React.Component {
	
	constructor(props){
		super(props);
		
	}

	signOut() {
	let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
	}

	searchScreen() {
		browserHistory.push('/search');
	}

	render() {
		return (
			<div className="home">
					
			<Jumbotron>
				<div className="jumbotronText">
					<h1>Welcome to BrewBuddy</h1>
					<h3>Changing the way you discover great beer</h3>
				</div>
				
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
				<div className="signOut">
				<Button bsStyle="primary" bsSize="large" id="btn-signOut" onClick={this.signOut}>Sign Out </Button>
				</div>		
			</Jumbotron>		
			
			<Row>
			<RandomBeerDisplay />
			</Row>

			<Row className="searchButtonRow-home">
				<Button className="searchScreen-btn" bsStyle="primary" bsSize="large" onClick={this.searchScreen}>Search for your favorite styles</Button>

			</Row>
			
			
			</div>
			

			);
	}
}



// let mapStateToProps = (state, props) => {
//     return {
//     	randomBeer: state.randomBeer  	
        
//     }
// };

// export default connect(mapStateToProps)(Home);