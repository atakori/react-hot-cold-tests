import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count'

describe('<GuessCount />', () => {
	it('renders without crashing', () => {
		shallow(<GuessCount guessCount= '1' />);
	})
	it('renders the guess count', () => {
		const counter= '1';
		const guessNoun = 'guesses';
		const wrapper= shallow(<GuessCount guessCount= {counter}/>)
		expect(wrapper.contains(<h2 id="guessCount">
            You've made <span id="count">{counter}</span> {guessNoun}!
        </h2>))
	})
})