import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavItem } from 'react-bootstrap';



class HelloUser extends React.Component {
	constructor(props) {
		super(props);


	}


	render() {
		return (
			<NavItem eventKey={2} href="#">Hello, {this.props.userName} </NavItem>

			);
	}


}





let mapStateToProps = (state, props) => {
    return {
    	userLoggedIn: state.userLoggedIn,
    	userName: state.userName   	
        
    }
};

export default connect(mapStateToProps)(HelloUser);