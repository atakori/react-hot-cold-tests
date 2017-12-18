import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list'

describe('<GuessList />', () => {
	let list= [1,2,3,4];
	it('renders without crashing', () => {
		shallow(<GuessList guesses= {list} />);
	})
	it('renders a list of guesses', () => {
		let list = [1,2,3,4];
		const wrapper = shallow(<GuessList guesses= {list}/>)
		const items = wrapper.find('li');
		expect(items.length).toEqual(list.length);
		list.forEach((value, index) => {
			expect(items.at(index).text()).toEqual(value.toString());
		})
	})
})