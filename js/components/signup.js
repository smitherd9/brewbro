import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { User } from '../users';
import mongoose from 'mongoose';



class SignUp extends React.Component {
	constructor(){
		super();
		
	}

	// getValidationState() {
 //    const length = this.state.value.length;
 //    if (length > 10) return 'success';
 //    else if (length > 5) return 'warning';
 //    else if (length > 0) return 'error';
 //    store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
 //  },

  	handleChange(e) {
    // this.setState({ value: e.target.value });
    store.dispatch(actions.formValidator(e.target.value));
    console.log(e.target.value);
  }



	render() {
		return (
		<div className="signup">
		<section className="box">
			<form>
        		<FormGroup controlId="formBasicText"
          		// validationState={this.getValidationState()}> 
        			>
          		<ControlLabel>Name</ControlLabel>
          		<FormControl
            		type="text"
            		value={this.props.formInput}
            		placeholder="Enter your name"
            		onChange={this.handleChange} />

            	<ControlLabel>Email</ControlLabel>
            	<FormControl
            		type="text"
            		value={this.props.formInput}
            		placeholder="Enter your email address"
            		onChange={this.handleChange} />

            	<ControlLabel>Username</ControlLabel>
            	<FormControl
            		type="text"
            		value={this.props.formInput}
            		placeholder="Choose a username"
            		onChange={this.handleChange} />

            	<ControlLabel>Password</ControlLabel>
            	<FormControl
            		type="text"
            		value={this.props.formInput}
            		placeholder="Enter your password"
            		onChange={this.handleChange} />
          				
          			<FormControl.Feedback />          			
        		</FormGroup>
    		</form>	
    	</section>	
		
		</div>

		);
	}
}



let mapStateToProps = (state, props) => {
    return {
    	formInput: state.formInput
    	
        
    }
};

export default connect(mapStateToProps)(SignUp);