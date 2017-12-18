import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section'

describe('<StatusSection />', () => {
	const guessList= [1,2,3]
	it('renders without crashing', () => {
		shallow(<StatusSection guesses= {guessList} auralStatus= 'blank'/>);
	})
})