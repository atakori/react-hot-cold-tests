import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav'

describe('<TopNav />', () => {
	it('renders without crashing', () => {
		shallow(<TopNav/>);
	})

	it ('should call newGame() when it is clicked', () => {
		const callback= jest.fn();
		//fake function to be called
		const wrapper= shallow(<TopNav onRestartGame= {callback}/>)
		const link= wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	})

	it('should call on onGenerateAuralUpdate() when clicked', () => {
		const callback= jest.fn();
		const wrapper= shallow(<TopNav onGenerateAuralUpdate= {callback}/>);
		const link = wrapper.find('.status-link');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	})
})