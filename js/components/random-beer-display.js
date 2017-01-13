import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';


class RandomBeerDisplay extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}

		handleClick(){

		}


		componentDidUpdate() {
			console.log(store.getState());
		}

		render() {



			return (
				<div className="randomBeerDisplay"> 
					<section className="box">
					<h2>{this.props.randomBeer.name}</h2>
					<p>{this.props.randomBeer.description}</p>
					</section>
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