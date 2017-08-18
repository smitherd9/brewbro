import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, ProgressBar } from 'react-bootstrap';


class RandomBeerButton extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		

	}

		handleClick() {			
			store.dispatch(actions.showLoadingAnim());						
			store.dispatch(actions.getRandomBeer());
			this._tick();
			store.dispatch(actions.resetNow());
			
		}

		showRandomBeerButton(){
			store.dispatch(actions.showRandomBeerButton());
		}

		componentDidUpdate() {
			console.log(store.getState());

		}

		_tick(){
			var self = this;
			console.log(this.props.now);
			console.log(this.props.variable);
			console.log(this.props.randomBeer);
			this.interval = setTimeout(function(){
				if(self.props.now >= 100 || self.props.randomBeer != null){
					self.interval = undefined;
					store.dispatch(actions.hideLoadingAnim());
					return;
				}
				store.dispatch(actions.tick());
				self._tick();
			}, 1000);
		}

		render() {



			return (
				<div className="randomBeer-btn">
					{this.props.showLoadingAnim ? 
					(<ProgressBar active now={this.props.now}  />) :				
					   (<Button bsStyle="primary" bsSize="large" id="btn-randomBeer" onClick={this.handleClick} >
					   Discover a random beer!</Button>) 
					     }	    	
					     
					   
				</div>

				);

	}
}




let mapStateToProps = (state, props) => {
    return {
    	showLoadingAnim: state.showLoadingAnim,    	
    	randomBeer: state.randomBeer,
    	now: state.now,
    	variable: state.variable  	
        
    }
};

export default connect(mapStateToProps)(RandomBeerButton);