import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import SignUp from './signup';
import RandomBeer from './random-beer';
import RandomBeerDisplay from './random-beer-display';



class Home extends React.Component {
	randomBeerDisplay;
	constructor(props){
		super(props);
		this.randomBeerDisplay = null;
	}

	componentWillUpdate(){
		this.randomBeerDisplay = <RandomBeerDisplay />;
	}

	signOut() {
	let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
	}

	render() {
		return (
			<div className="home">
					
			<Jumbotron>
				<div className="jumbotronText">
					<h1>Welcome to BrewBro</h1>
					<h3>Changing the way you discover great beer</h3>
				</div>
				<RandomBeer  />
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
				<div className="signOut">
				<Button bsStyle="primary" bsSize="large" id="btn-signOut" onClick={this.signOut}>Sign Out </Button>
				</div>		
			</Jumbotron>		
			
			<Row>
			{this.randomBeerDisplay}
			</Row>
			
			
			</div>
			

			);
	}
}



let mapStateToProps = (state, props) => {
    return {
    	randomBeer: state.randomBeer  	
        
    }
};

export default connect(mapStateToProps)(Home);