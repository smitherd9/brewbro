import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect, should } from 'chai';
expect();
should();
import AppContainer from '../js/components/app-container';
import SearchScreen from '../js/components/search-screen';



describe('App Container', () => {
	it('Renders the app', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<AppContainer />);
		let result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('appContainer');
	});

});


describe('Search Screen', () => {
	it('renders the search screen', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<SearchScreen />);
	});
})