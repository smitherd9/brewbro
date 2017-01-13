import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
// import { User } from '../users';
// import mongoose from 'mongoose';




class NewUser extends React.Component {

	handleClick(e) {
		e.preventDefault();	
		// create a new user
		let newUser = User({
  			name: 'Peter Quill',
  			username: 'starlord55',
  			password: 'password'
  			
		});

		// save the user
			newUser.save(function(err) {
  				if (err) throw err;

  				console.log('User created!');
		});
	}

	render() {
		return (
			<div>	
			
			
			
			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	
    	
        
    }
};

export default connect(mapStateToProps)(NewUser);