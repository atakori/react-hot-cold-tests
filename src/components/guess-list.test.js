import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list'

describe('<GuessList />', () => {
	let list= [];
	beforeAll(() => {
		for (let i=0; i<10; i++) {
			list.push({i})
		}
	})
	it('renders without crashing', () => {
		shallow(<GuessList guesses= {list} />);
	})
})