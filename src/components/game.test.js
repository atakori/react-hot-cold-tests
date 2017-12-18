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
	it('can make guesses', () => {
		const wrapper= shallow(<Game/>)
		wrapper.setState({
			correctAnswer:86
		})
		wrapper.instance().makeGuess(33);
		expect(wrapper.state('guesses')).toEqual([33]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
	})
	it('can generate Aural Updates', () => {
		const wrapper= shallow(<Game />);
		wrapper.setState({
			correctAnswer: 90
		})
		wrapper.instance().makeGuess(25);
		wrapper.instance().makeGuess(39);
		wrapper.instance().makeGuess(88);

		wrapper.instance().generateAuralUpdate();

		expect(wrapper.state('auralStatus')).toEqual(`Here's the status of the game right now: You're Hot! You've made 3 guesses. In order of most- to least-recent, they are: 88, 39, 25`);


	})

})
