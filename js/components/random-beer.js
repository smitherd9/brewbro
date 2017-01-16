import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, ProgressBar } from 'react-bootstrap';


class RandomBeer extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.now = 60;

	}

		handleClick() {
			store.dispatch(actions.showLoadingAnim());
			store.dispatch(actions.getRandomBeer());
			
		}

		showRandomBeerButton(){
			store.dispatch(actions.showRandomBeerButton());
		}

		componentDidUpdate() {
			console.log(store.getState());
		}

		render() {



			return (
				<div className="randomBeer">
					{!this.props.showLoadingAnim ?					
					   (<Button bsStyle="primary" bsSize="large" id="btn-randomBeer" onClick={this.handleClick} >
					   Discover a random beer!</Button>) :
					    (<ProgressBar active now={this.now} label={`${this.now}%` } />) }	    	
					     
					   
				</div>

				);

	}






}




let mapStateToProps = (state, props) => {
    return {
    	showLoadingAnim: state.showLoadingAnim,    	
    	randomBeer: state.randomBeer  	
        
    }
};

export default connect(mapStateToProps)(RandomBeer);