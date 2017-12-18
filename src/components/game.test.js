import React from 'react';
import {shallow} from 'enzyme';

import Game from './game'

describe('<Game />', () => {
	it('renders without crashing', () => {
		shallow(<Game />);
	})
	it('can start a new game', () => {
		const wrapper= shallow(<Game/>)
		wrapper.setState({
			guesses: [5,6,7,8],
      		feedback: 'Great!',
     		auralStatus: 'None',
      		correctAnswer: -12
		})
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([])
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('auralStatus')).toEqual('');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	})
})
