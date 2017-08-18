import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import store from '../store';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';





class ContactForm extends React.Component {
	constructor(){
		super();
		
	}

	handleChange(e) {
    // this.setState({ value: e.target.value });
    store.dispatch(actions.formValidator(e.target.value));
    console.log(e.target.value);
  }

	render() {
		return (
			<div className="contact-form">
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

              <ControlLabel>Comments</ControlLabel>
              <FormControl className="commentsForm"
                type="text"
                value={this.props.formInput}
                placeholder="Leave any questions or comments here"
                onChange={this.handleChange} />

          				
          			<FormControl.Feedback />

        		</FormGroup>
    		</form>	


			
			
			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	formInput: state.formInput
    	
        
    }
};

export default connect(mapStateToProps)(ContactForm);