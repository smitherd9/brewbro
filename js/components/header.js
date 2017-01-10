import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import actions from '../actions/index';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';



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

	render() {
		return (
			<div className="header">
			  <Navbar inverse collapseOnSelect fixedTop>
    			<Navbar.Header>
      			<Navbar.Brand>
        		<a href="#">BrewBro</a>
      			</Navbar.Brand>      			
    			</Navbar.Header>
    			<Navbar.Collapse>
      			<Nav>
        			<NavItem eventKey={1} href="#">Sign Up</NavItem>
        			<NavItem eventKey={2} href="#">Link</NavItem>
      			</Nav>

      			<Nav pullRight>
        			<NavItem eventKey={1} onClick={this.open}>What is BrewBro?</NavItem>
        			<NavItem eventKey={2} href="#">Contact Us</NavItem>
      			</Nav>
    			</Navbar.Collapse>
  				</Navbar>

  				<Modal show={this.props.showModal} onHide={this.close}>
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


			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	showModal: state.showModal,
    	
        
    }
};

export default connect(mapStateToProps)(Header);