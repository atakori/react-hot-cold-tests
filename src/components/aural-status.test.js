import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status'

describe('<StatusSection />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />);
	})
})