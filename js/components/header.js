import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import actions from '../actions/index';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import SignUp from './signup';
import { browserHistory } from 'react-router';



class Header extends React.Component {
	constructor(props) {
		super(props);

	}

	open() {
		store.dispatch(actions.showModal());
	}

	close(){
		store.dispatch(actions.hideModal());
	}

	signUp(){
		store.dispatch(actions.showSignUpModal());
	}

	closeSignUp(){
		store.dispatch(actions.hideSignUpModal());
	}

	home() {
		browserHistory.push('/');
	}

	contactPage() {		
		browserHistory.push('/contact');
	}


	render() {
		return (
			<div className="header">
			  <Navbar inverse collapseOnSelect fixedTop>
    			<Navbar.Header>
      			<Navbar.Brand>
        		<NavItem onClick={this.home}>BrewBro</NavItem>
      			</Navbar.Brand>      			
    			</Navbar.Header>
    			<Navbar.Collapse>
      			<Nav>
        			<NavItem eventKey={1} onClick={this.signUp}>Sign Up</NavItem>
        			<NavItem eventKey={2} href="#">Link</NavItem>
      			</Nav>

      			<Nav pullRight>
        			<NavItem eventKey={1} onClick={this.open}>What is BrewBro?</NavItem>
        			<NavItem eventKey={2} onClick={this.contactPage}>Contact Us</NavItem>
      			</Nav>
    			</Navbar.Collapse>
  				</Navbar>

  				<Modal show={this.props.showModal} onHide={this.closeSignUp}>
          		<Modal.Header closeButton>
            	<Modal.Title>What is BrewBro?</Modal.Title>
          		</Modal.Header>
          			<Modal.Body>
            			<h4>Beer recommendations at the touch of a button</h4>
            			<p>BrewBro helps you find mouthwatering beers you're bound to love.</p>
            			<p>It gives you recommendations based on your stated preferences,
            				or you can just get a tasty beer suggestion at random.</p>
            			<p>Sign up below to save your favorites and find similar brews or
            				just get a delicious random beer by clicking below.</p>
            			
            		</Modal.Body>
            		<Modal.Footer>
            			<Button onClick={this.close}>Close</Button>
          			</Modal.Footer>
        		</Modal>

        		<Modal show={this.props.showSignUpModal} onHide={this.closeSignUp}>
          		<Modal.Header closeButton>
            	<Modal.Title>Sign Up</Modal.Title>
          		</Modal.Header>
          			<Modal.Body>
            			<SignUp />            			
            		</Modal.Body>
            		<Modal.Footer>
            			<Button onClick={this.closeSignUp}>Close</Button>
          			</Modal.Footer>
        		</Modal>


			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	showModal: state.showModal,
    	showSignUpModal: state.showSignUpModal
    	
    	
        
    }
};

export default connect(mapStateToProps)(Header);