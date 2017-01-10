import React from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-bootstrap'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import store from '../store';
import Header from './header';
import Home from './home';




export default class AppContainer extends React.Component {
	constructor(){
		super();
		
	}



	render() {
		return (
		<div className="appContainer">
		<Header />
		
		{this.props.children}


		</div>

		);
	}
}