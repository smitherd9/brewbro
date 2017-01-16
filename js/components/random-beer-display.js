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
				<h1>Your Tasty Temptation</h1>
					<Row className="randomBeerDisplayRow">
						
							
						
						<Col md={12}> 
							<div className="randomBeerName">
								<h2>Name: {this.props.randomBeer.name}</h2>				
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<div className="randomBeerDesc">
								<p>Description: {this.props.randomBeer.description ? (this.props.randomBeer.description) : (this.props.randomBeer.style.description) }</p>
							</div>
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