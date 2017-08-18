import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import actions from '../actions/index';


class SearchScreen extends React.Component {
	constructor(props){
		super(props);
		// this.selectedBeer = this.selectedBeer.bind(this);
		// this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		store.dispatch(actions.getSpecificBeer(store.getState().selectedBeer));
		console.log('selected: ' + store.getState().selectedBeer);
	}


	selectedState(eventKey, event){
		event.preventDefault();
		store.dispatch(actions.selectedBeer(eventKey));
		console.log('eventKey:' + eventKey);
	}



	render() {
		return(
			<div className="searchScreen">

			<Jumbotron>
				<div className="jumbotronText">
					<h1>Search Screen</h1>					
				</div>

				<Row className="searchRow">


					<Col md={12}>
					<DropdownButton title={this.props.selectedBeer} onSelect={this.selectedState} id="dropdown-basic">
      					<MenuItem title="British Ale" eventKey="1">British Origin Ales</MenuItem>
      					<MenuItem eventKey="2">Irish Origin Ales</MenuItem>
    				</DropdownButton>

					<Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Search</Button>
					</Col>
				</Row>

			</Jumbotron>

				<div className="returnedBeer">
					<p>{this.props.selectedBeer}</p>

				</div>


			</div>

			);

	}





}


let mapStateToProps = (state, props) => ({

	selectedBeer: state.selectedBeer

});


export default connect(mapStateToProps)(SearchScreen);