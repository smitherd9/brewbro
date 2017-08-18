require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import react_redux from 'react-redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import store from './store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import AppContainer from './components/app-container';
import Home from './components/home';
import ContactPage from './components/contact-page';
import SearchScreen from './components/search-screen';



render(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContainer} >
				<IndexRoute component={Home} ></IndexRoute>
				<Route path="/contact" component={ContactPage} ></Route>
				<Route path="/search" component={SearchScreen} ></Route>
			</Route>					
			
		
        </Router>
        </Provider>, document.getElementById('app'));

