import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status'

describe('<StatusSection />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />);
	})
	it('renders the status', () => {
		const test_status= 'This is the status message'
		const wrapper= shallow(<AuralStatus auralStatus={test_status}/>)
		expect(wrapper.contains(test_status)).toEqual(true);
	})
})