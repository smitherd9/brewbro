import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';


class RandomBeer extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}

		handleClick() {
			store.dispatch(actions.getRandomBeer());
			
		}

		componentDidUpdate() {
			console.log(store.getState());
		}

		render() {



			return (
				<div className="randomBeer"> 
					   <Button bsStyle="primary" bsSize="large" id="btn-randomBeer" onClick={this.handleClick}  >
					   Discover a random beer!</Button>
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