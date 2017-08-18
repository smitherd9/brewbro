import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, ProgressBar } from 'react-bootstrap';



class RandomBeer extends React.Component {
	constructor(props){
		super(props);		
		

	}

	render() {
		return (
			<div className="randomBeer">
			<div className="randomBeerName">
				<h2>{this.props.randomBeer.name}</h2>				
			</div>
			<div className="randomBeerStyle">
				<h3>{this.props.randomBeer.style.name}</h3>
			</div>

			<div className="randomBeerDesc">
				<h3>Description:</h3> <p>{this.props.randomBeer.description ? (this.props.randomBeer.description) : (this.props.randomBeer.style.description) }</p>
			</div>
			</div>

			);
	}




}



let mapStateToProps = (state, props) => {
    return {    	  	
    	randomBeer: state.randomBeer
    	 	
        
    }
};

export default connect(mapStateToProps)(RandomBeer);