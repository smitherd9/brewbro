import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, Clearfix } from 'react-bootstrap';
import RandomBeerButton from './random-beer-btn';
import RandomBeer from './random-beer';


class RandomBeerDisplay extends React.Component {
	randomBeer;
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.randomBeer = null;

	}

		handleClick(){

		}

		componentWillUpdate(){
		this.randomBeer= <RandomBeer />;
		}


		componentDidUpdate() {
			console.log(store.getState());			
		}

		render() {



			return (
				<div className="randomBeerDisplay">

				<Row>
					<Col md={4}>
					<div className="brewBuddyDescription-random">
						<h2>At BrewBuddy, we love great beer and want to share that love with the world.</h2>
						<p>We search through thousands of different beers, including both tried and true varieties and craft brews
						 to recommend new flavors to wow your palette.</p>
						<p>Give it a try and find a new tasty beer today!</p>
						<RandomBeerButton  />
					</div>	
					</Col>
					<Col md={8}>
					<Clearfix>{this.randomBeer}</Clearfix>
					</Col>
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

export default connect(mapStateToProps)(RandomBeerDisplay);