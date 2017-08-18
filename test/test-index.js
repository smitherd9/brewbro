import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import AppContainer from '../js/components/app-container';



describe('App Container', () => {
	it('Renders the app', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<AppContainer />);
		let result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('appContainer');
	});

});